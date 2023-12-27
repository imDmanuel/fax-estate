import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { routes } from "@/lib/routes";

export function Header() {
  return (
    <header className="bg-secondary">
      <div className="container flex justify-between items-center py-4">
        {/* LOGO */}
        <Image src={Logo} alt="Logo" />
        {/* END LOGO */}

        {/* NAV MENU */}
        <nav className="bg-secondary">
          <ul>
            <nav className="hidden md:block">
              <ul className="flex gap-10 text-sm">
                {routes.map(({ title, href }) => (
                  <li key={href} className="text-white hover:text-primary">
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ul>
        </nav>
        {/* END NAV MENU */}

        {/* PROFILE BUTTON */}
        {/* TODO: IMPLEMENT THIS FUNCTION */}
        {/* END PROFILE BUTTON */}

        {/* MOBILE MENU ICON */}
        <MenuIcon />
        {/* END MOBILE MENU ICON */}
      </div>
    </header>
  );
}
