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
      <section className="mb-10">
        <p>
          On this page, you{"'"}ll find a rundown of my education, professional
          experience, and skills. I{"'"}m always looking to learn new things and
          push myself to be the best I can be, and this page is a way for me to
          show you what I{"'"}ve been up to.
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
