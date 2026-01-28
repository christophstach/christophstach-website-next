import Image from "next/image";

import heroWebp from "@/images/hero.webp";

export default function Hero() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-8 px-4 py-8 lg:flex-row lg:gap-20 lg:py-16">
        <div>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Hi, I&apos;m Christoph.
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            I&apos;m a full-stack engineer based in Berlin with 10+ years of
            experience building modern web apps across{" "}
            <strong>Vue/Nuxt</strong>, <strong>React/Next.js</strong>, and{" "}
            <strong>Angular</strong>. I care about clean, type-safe code,
            usability, accessibility, and performance, with a strong focus on
            well-designed, reusable components.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            width={288}
            height={288}
            className="h-32 w-32 rounded-full object-cover drop-shadow-xl md:h-72 md:w-72"
            src={heroWebp}
            alt="Hero section image"
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
}
