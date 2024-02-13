"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { routes } from "@/lib/routes";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const url = usePathname();

  // useEffect(() => {
  //   return () => {
  //     clearAllBodyScrollLocks();
  //   };
  // });

  // useEffect(() => {
  //   if (window.innerWidth >= 1024) {
  //     return;
  //   }
  //   if (menuOpen) {
  //     disableBodyScroll();
  //   } else {
  //     enableBodyScroll();
  //   }
  // }, [menuOpen]);

  // // IF MENU IS OPEN, ON NAVIGATION, CLOSE IT..
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [url]);

  return (
    <header className="bg-secondary">
      <div className="container flex justify-between items-center py-4">
        {/* LOGO */}
        <Image src={Logo} alt="Logo" />
        {/* END LOGO */}

        <div
          ref={menuRef}
          data-menu-open={menuOpen}
          className="translate-x-full data-[menu-open=true]:translate-x-0 transition-transform max-lg:absolute max-lg:z-20 max-lg:left-0 max-lg:right-0 max-lg:bottom-0 max-lg:top-16 max-lg:bg-secondary max-lg:pt-14"
        >
          {/* NAV MENU */}
          <nav className="">
            <ul className="flex flex-col lg:flex-row gap-5 justify-between text-sm max-lg:text-center">
              {routes.map(({ title, href }) => (
                <li
                  key={href}
                  className="max-lg:text-lg text-white hover:text-primary transition-colors max-lg:px-10 py-3"
                >
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* END NAV MENU */}
        </div>

        {/* PROFILE BUTTON */}
        {/* TODO: IMPLEMENT THIS FUNCTION */}
        {/* END PROFILE BUTTON */}

        {/* MOBILE MENU ICON */}
        <Button
          variant="ghost"
          className="hover:text-primary"
          onClick={() => {
            setMenuOpen((prevState) => {
              if (prevState === false) {
                document.querySelector("body")?.classList.add("no-scroll");
              } else {
                document.querySelector("body")?.classList.remove("no-scroll");
              }
              return !prevState;
            });
          }}
        >
          {/* <MenuIcon className="text-white block lg:hidden" /> */}
          <div
            data-menu-open={menuOpen}
            className="w-8 h-1 bg-white after:block after:w-8 after:h-1 after:bg-white after:translate-y-1.5 before:block before:w-6 before:h-1 before:bg-white before:-translate-y-2.5 data-[menu-open=true]:before:-translate-y-1 data-[menu-open=true]:after:-translate-y-2 data-[menu-open=true]:h-0 data-[menu-open=true]:before:w-8 data-[menu-open=true]:before:rotate-45 data-[menu-open=true]:after:-rotate-45"
          ></div>
        </Button>
        {/* END MOBILE MENU ICON */}

        {/* TODO: IMPLEMENT PROFILE ICON */}
      </div>
    </header>
  );
}
