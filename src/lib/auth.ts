"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { LoginForm, RegisterForm } from "./formSchemas";
import { SessionData } from "./types";
import { getUser, prisma } from "./utils";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 min from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function login(form: LoginForm) {
  // verify credentials and get the user

  try {
    const user = await getUser(form);
    if (!user) {
      return {
        success: false,
        message: "Invalid email or password!",
      } as const;
    }

    // create the session
    const expires = new Date(Date.now() + 30 * 60 * 1000);
    //   @ts-expect-error
    const sessionData = { user, expires } as SessionData;
    const session = await encrypt(sessionData);

    // save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });

    return {
      success: true,
      user: sessionData.user,
    } as const;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "An error occurred while loggin in",
    };
  }
}

export async function logout() {
  // destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) return null;
  return (await decrypt(session)) as SessionData;
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();

  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
}

export async function register(form: RegisterForm) {
  try {
    const user = await prisma.user.create({
      data: {
        email: form.email,
        fullName: form.fullName,
        password: form.password,
      },
    });

    return {
      success: true,
      message: "User details created successfully",
    } as const;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "An error occurred while creating the user",
    } as const;
  }
}
