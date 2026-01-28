import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christoph Stach - About Me",
  openGraph: {
    title: "Christoph Stach - About Me",
  },
};

export default function AboutMe() {
  return (
    <div className="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
      <h2>About Me</h2>

      <p>
        I&apos;m a full‑stack engineer based in Berlin with more than a decade
        of experience building modern web applications across{" "}
        <strong>Vue/Nuxt</strong>, <strong>React/Next.js</strong> and{" "}
        <strong>Angular</strong>. I care a lot about clean, maintainable code,
        usability, accessibility, and performance, and I enjoy designing
        components that feel polished and predictable to work with.
      </p>

      <p>
        At <strong>MBition (Mercedes‑Benz)</strong>, I work as a senior full
        stack engineer on Nuxt and NestJS applications backed by PostgreSQL and
        MongoDB. I ship features end‑to‑end, from designing REST contracts and
        APIs to building reusable UI components. I enjoy enforcing strong{" "}
        <strong>TypeScript</strong> and ESLint standards, maintaining pnpm
        monorepos for better DX, and setting up reliable{" "}
        <strong>CI/CD pipelines in Azure DevOps</strong>.
      </p>
      <p>
        Before that, I spent several years building frontends with{" "}
        <strong>React, Remix, Vue, Nuxt and Angular</strong>, including a
        graph‑based no‑code workflow builder that empowered non‑technical users
        to model and deploy workflows themselves. Earlier in my career I worked
        as a PHP/JavaScript full stack developer, modernising legacy systems and
        improving maintainability and feature velocity.
      </p>
      <p>
        Alongside my professional work, I completed both a{" "}
        <strong>B.Sc.</strong> and <strong>M.Sc. in Applied Computer Science</strong> at{" "}
        <a href="https://www.htw-berlin.de/">HTW Berlin</a>, specialising in AI,
        bioinformatics, deep learning and data science, with research on
        nanopore‑based DNA sequencing and neural style transfer. I enjoy
        exploring new technologies—recently around React Server Components,
        Tailwind and modern tooling—while keeping a strong focus on type safety
        and long‑term maintainability.
      </p>
    </div>
  );
}
