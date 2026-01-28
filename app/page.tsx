import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christoph Stach - Home",
  openGraph: {
    title: "Christoph Stach - Home",
  },
};

export default function Home() {
  return (
    <div className="prose prose-indigo mx-auto dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
      <h2>Home</h2>

      <p>
        Hey, I{"'"}m Christoph — a full‑stack engineer based in Berlin with 10+
        years of experience building modern web applications. I work across{" "}
        <strong>Vue/Nuxt</strong>, <strong>React/Next.js</strong>, and{" "}
        <strong>Angular</strong>, with a strong focus on clean, type‑safe code,
        usability, accessibility, and performance.
      </p>
      <p>
        Currently I{"'"}m a Senior Full Stack Engineer at MBition (Mercedes‑Benz)
        working with Nuxt, NestJS, PostgreSQL, MongoDB and Azure DevOps — from
        REST API design and backend services to reusable UI components, monorepo
        tooling, and CI/CD pipelines.
      </p>
      <p>
        On this site you can read more <a href="/about-me">about me</a>, browse
        my <a href="/projects">projects</a>, or explore my{" "}
        <a href="/curriculum">curriculum</a> with details on roles, tech stacks,
        and education. If you{"'"}d like to get in touch, feel free to{" "}
        <a href="https://www.linkedin.com/in/christoph-stach-7586b958/">
          connect with me on LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
