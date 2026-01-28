import { Metadata } from "next";

import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Christoph Stach - Curriculum",
  openGraph: {
    title: "Christoph Stach - Curriculum",
  },
};

export default function Curriculum() {
  return (
    <div>
      <div className="prose prose-indigo mb-10 max-w-none dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
        <h2>Curriculum</h2>
      </div>

      <section className="mb-10">
        <p>
          Here you{"'"}ll find a concise overview of my professional experience
          and education. I{"'"}ve spent the last decade building modern web
          applications as a full‑stack engineer, mainly with{" "}
          <strong>Vue/Nuxt</strong>, <strong>React/Next.js</strong>,{" "}
          <strong>NestJS</strong>, and relational and document databases like
          PostgreSQL and MongoDB.
        </p>
        <p>
          The timelines below mirror my CV: recent work on Nuxt/NestJS products
          at MBition (Mercedes‑Benz), several years of frontend engineering with
          React, Remix, Vue, Nuxt, and Angular, and a strong academic background
          with a B.Sc. and M.Sc. in Applied Computer Science focusing on AI,
          bioinformatics, deep learning, and data science.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="prose prose-indigo mb-10 max-w-none dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
            <h2>Professional Experience</h2>
          </div>

          <ExperienceTimeline />
        </div>
        <div className="flex-1">
          <div className="prose prose-indigo mb-10 max-w-none dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
            <h2>Education</h2>
          </div>

          <EducationTimeline />
        </div>
      </div>
    </div>
  );
}
