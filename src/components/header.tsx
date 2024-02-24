"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import { LuUser2 } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Avatar from "@/assets/images/user-image.jpg";
import { SessionData } from "@/lib/types";
import { useUser } from "./session-context";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const url = usePathname();

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      return;
    }
    if (menuOpen) {
      disableBodyScroll(menuRef.current!);
    } else {
      enableBodyScroll(menuRef.current!);
    }
  }, [menuOpen]);

  // IF MENU IS OPEN, ON NAVIGATION, CLOSE IT..
  useEffect(() => {
    setMenuOpen(false);
  }, [url]);

  return (
    <header className="z-20 bg-secondary sticky top-0">
      <div className="container flex justify-between items-center py-4">
        {/* LOGO */}
        <Image src={Logo} alt="Logo" />
        {/* END LOGO */}

        <div
          ref={menuRef}
          data-menu-open={menuOpen}
          className="nav max-lg:-translate-x-full max-lg:data-[menu-open=true]:translate-x-0 
          transition-transform max-lg:fixed max-lg:z-20 max-lg:left-0 
          max-lg:bottom-0 max-lg:top-16 max-lg:bg-secondary 
          max-lg:pt-10 overflow-y-auto"
        >
          {/* NAV MENU */}
          <nav className="flex items-center">
            <ul className="flex flex-col lg:flex-row gap-5 justify-between text-sm">
              {routes.map(({ title, href }) => (
                <li
                  key={href}
                  className="cursor-pointer max-lg:text-lg text-white hover:text-primary 
                  transition-colors max-lg:px-16 py-3 max-lg:hover:bg-primary 
                  max-lg:hover:text-black"
                >
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* END NAV MENU */}
        </div>

        <div className="flex items-center">
          {/* PROFILE ICON */}
          {/* TODO: IMPLEMENT THIS FUNCTION */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-white space-x-2 px-1"
              >
                <LuUser2 className="text-2xl" />
                <div>Profile</div>
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              {user ? <LoggedInProfileMenu /> : <LoginProfileMenu />}
            </PopoverContent>
          </Popover>
          {/* END PROFILE ICON */}

          {/* MOBILE MENU ICON */}
          <Button
            variant="ghost"
            className="hover:text-primary lg:hidden px-1"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {/* w-6 h-0.5 bg-white after:block after:w-6 after:h-0.5 after:bg-white after:translate-y-1.5 before:block before:w-4 before:h-0.5 before:bg-white before:-translate-y-2.5 data-[menu-open=true]:before:-translate-y-1 data-[menu-open=true]:after:-translate-y-2 data-[menu-open=true]:h-0 data-[menu-open=true]:before:w-8 data-[menu-open=true]:before:rotate-45 data-[menu-open=true]:after:-rotate-45 */}
            {/* <MenuIcon className="text-white block lg:hidden" /> */}
            <div data-menu-open={menuOpen} className="menu-icon"></div>
          </Button>
          {/* END MOBILE MENU ICON */}
        </div>

        {/* TODO: IMPLEMENT PROFILE ICON */}
      </div>
    </header>
  );
}

function LoggedInProfileMenu() {
  const { setUser } = useUser();

  return (
    <div>
      {/* AVATAR AND NAME */}
      <div className="flex items-center space-x-2">
        <Image src={Avatar} alt="" className="size-9 rounded-full mb-3" />
        <div className="font-medium font-merriweather text-sm">Person Name</div>
      </div>
      {/* END AVATAR AND NAME  */}

      {/* MENU ITEMS */}
      <div className="border-t pt-3 text-sm flex flex-col">
        <Link
          href="#"
          className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
        >
          Edit Profile
        </Link>
        <Link
          href="#"
          className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
        >
          Favourites
        </Link>
        <Link
          href="#"
          className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
        >
          Bids & Transaction History
        </Link>
        <Link
          onClick={async () => {
            await logout();
            setUser(null);
          }}
          href="#"
          className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
        >
          Logout
        </Link>
      </div>
      {/* END MENU ITEMS */}
    </div>
  );
}

function LoginProfileMenu() {
  return (
    <div className="text-sm flex flex-col">
      <Link
        href="/login"
        className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="py-2 px-3 transition-colors hover:bg-secondary hover:text-white"
      >
        Register
      </Link>
    </div>
  );
}
