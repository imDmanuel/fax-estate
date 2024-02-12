import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { routes } from "@/lib/routes";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-secondary">
      <div className="container flex justify-between items-center py-4">
        {/* LOGO */}
        <Image src={Logo} alt="Logo" />
        {/* END LOGO */}

        {/* NAV MENU */}
        <nav className="">
          <ul className="flex gap-5 justify-between text-sm">
            {routes.map(({ title, href }) => (
              <li
                key={href}
                className="text-white hover:text-primary transition-colors"
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* END NAV MENU */}

        {/* PROFILE BUTTON */}
        {/* TODO: IMPLEMENT THIS FUNCTION */}
        {/* END PROFILE BUTTON */}

        {/* MOBILE MENU ICON */}
        <Button variant="ghost" className="hover:text-primary">
          <MenuIcon className="text-white hidden lg:block" />
        </Button>
        {/* END MOBILE MENU ICON */}

        {/* TODO: IMPLEMENT PROFILE ICON */}
      </div>
    </header>
  );
}
