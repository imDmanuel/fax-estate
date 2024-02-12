import React from "react";
import { FooterContactForm } from "./footer-contact-form";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { FaChevronRight } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="mt-20 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 pb-10 md:pb-0 lg:gap-20 bg-[#1c313c] pl-[calc(1rem_+_3%)] lg:pl-[calc(2rem_+_5%)] pt-16">
          {/* DESCRIPTION */}
          <div className="flex-1 max-w-xs">
            <div>{/* TODO: ADD LOGO */}</div>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              eaque qui quis? Voluptates aliquam eveniet non illo ipsum, ad eum
              numquam odit sit quod odio, dignissimos eligendi, cumque
              consequuntur amet!
            </p>
          </div>
          {/* END DESCRIPTION */}

          {/* FOOTER NAV LINKS */}
          <div className="flex-1">
            <h3 className="text-white">Quick links</h3>

            <nav className="text-gray-400 mt-4">
              <ul>
                <nav>
                  <ul className="space-y-2">
                    {routes.map(({ title, href }) => (
                      <li
                        key={href}
                        className="hover:text-white transition-colors flex items-center space-x-2"
                      >
                        <FaChevronRight />
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ul>
            </nav>
          </div>
          {/* END FOOTER NAV LINKS */}
        </div>
        <div className="bg-[#031a26] pl-10 pr-[calc(1rem_+_3%)] pt-16">
          {/* FOOTER CONTACT FORM */}
          <h3 className="text-white">Get in touch with us</h3>

          <div>
            <FooterContactForm />
          </div>
          {/* END FOOTER CONTACT FORM */}
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="bg-secondary">
        <div className="container flex items-center text-gray-400 py-5">
          <div>
            &copy; {new Date().getFullYear()} FaxEstate. All Rights Reserved
          </div>

          <div className="ml-auto">Privacy Policy | Terms of Service</div>
        </div>
      </div>
      {/* END FOOTER BOTTOM */}
    </footer>
  );
}
