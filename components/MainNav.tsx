"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Brand from "@/components/Brand";
import ThemeChanger from "@/components/ThemeChanger";
import { MainNavLink } from "@/data/main-nav-links";
import { cn } from "@/lib/utils";

export interface MainNavProps {
  links: MainNavLink[];
}

export default function MainNav(props: MainNavProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  function handleToggleOpen() {
    setOpen(!open);
  }

  return (
    <nav>
      <div className="fixed left-0 top-0 z-20 w-full border-b border-gray-300 bg-white/30 px-4 backdrop-blur dark:border-gray-600 dark:bg-gray-900/30">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <div>
            <Brand />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4">
              {props.links.map((link, index) => {
                const isActive = link.exact
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "block rounded px-3 py-2 text-sm font-medium text-indigo-700 dark:text-white"
                          : "block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <ThemeChanger />
              </div>
              <div className="block md:hidden">
                <button
                  className="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  type="button"
                  onClick={handleToggleOpen}
                  aria-label="Open the menu"
                >
                  {open ? (
                    <X className="animate-in fade-in zoom-in" />
                  ) : (
                    <Menu className="animate-in fade-in zoom-in" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            open && "container mx-auto animate-in slide-in-from-top-20",
            !open && "hidden",
          )}
        >
          <ul className="flex flex-col gap-4 py-4">
            {props.links.map((link, index) => {
              const isActive = link.exact
                ? pathname === link.href
                : pathname.startsWith(link.href);

              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setOpen(false);

                      setTimeout(() => {
                        window.scrollTo({
                          top: 420,
                          behavior: "smooth",
                        });
                      }, 500);
                    }}
                    className={
                      isActive
                        ? "block rounded px-3 py-2 text-sm font-medium text-indigo-700 dark:text-white"
                        : "block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
