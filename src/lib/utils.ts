import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
import { PrismaClient } from "@prisma/client";
import { LoginForm } from "./formSchemas";

export const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: string) {
  return builder.image(source);
}

export function getUser(form: LoginForm) {
  return prisma.user.findUnique({
    where: { email: form.email, password: form.password },
  });
}
