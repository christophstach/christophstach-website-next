import "./globals.css";

import { format } from "date-fns";
import { Facebook, Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";
import SocialLink from "@/components/SocialLink";
import mainNavLinks from "@/data/main-nav-links";

export const metadata: Metadata = {
  title: "Christoph Stach",
  description:
    "Christoph Stach is a software engineer with a passion for webtechnologies, especially frontend development",
  openGraph: {
    type: "website",
    title: "Christoph Stach",
    description:
      "Christoph Stach is a software engineer with a passion for webtechnologies, especially frontend development",
    url: "https://christophstach.me",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <MainNav links={mainNavLinks} />

          <div className="mt-20">
            <Hero />
          </div>

          <main className="container mx-auto my-12 px-4">{children}</main>

          <footer className="bg-neutral-50 p-2.5 dark:bg-neutral-900">
            <div className="container mx-auto flex items-center">
              <div className="flex-1">
                <small>
                  Copyright &copy; 2022 - {format(new Date(), "yyyy")} Christoph
                  Stach
                </small>
              </div>
              <div className="flex justify-end gap-2.5">
                <SocialLink href="https://www.linkedin.com/in/christoph-stach-7586b958">
                  <Linkedin />
                </SocialLink>

                <SocialLink href="https://www.facebook.com/christoph.stach">
                  <Facebook />
                </SocialLink>
                <SocialLink href="https://github.com/christophstach">
                  <Github />
                </SocialLink>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
