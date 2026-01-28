import { format, isBefore } from "date-fns";
import { Briefcase } from "lucide-react";

import Timeline from "./timeline/Timeline";

export function getExperienceData() {
  return [
    {
      title: "Senior Full Stack Engineer",
      company: "MBition GmbH (Mercedes-Benz)",
      description: "",
      bullets: [
        "Tech: Vue, Nuxt, TypeScript, NestJS, PostgreSQL, MongoDB, Azure DevOps",
        "Shipped end-to-end features across Nuxt and NestJS: designed REST contracts, integrated APIs, and built reusable UI components",
        "Enforced strict TypeScript and ESLint, significantly reducing runtime errors",
        "Consolidated multiple products into a pnpm monorepo, cutting build times by ~50% and enabling end-to-end type-safety and better DX",
        "Standardized Azure DevOps CI/CD (lint → test → build → release), improving deployment success rates and release traceability",
        "Implemented a Role-Based Access Control (RBAC) system using CASL.js",
      ],
      from: new Date(2023, 9, 1),
      to: new Date(),
      current: true,
    },
    {
      title: "Frontend Engineer",
      company: "DERICON GmbH",
      description: "",
      bullets: [
        "Tech: React, Remix, Vue, Nuxt, Angular, TypeScript",
        "Launched a graph-based no-code workflow builder (React/Remix) that let non-technical users model and deploy workflows independently",
        "Delivered new features on an Angular-based frontend, modernizing components and improving performance and accessibility",
        "Built middleware and UI integrations to bridge legacy systems with modern REST APIs, simplifying data flows and de-risking migrations",
      ],
      from: new Date(2016, 11, 1),
      to: new Date(2023, 9, 31),
    },
    {
      title: "Full Stack Developer",
      company: "SLH GmbH",
      description: "",
      bullets: [
        "Tech: JavaScript, ExtJS, REST, PHP, Symfony, MySQL",
        "Modernized a legacy frameset-based PHP/HTML/CSS/JS application into a modular frontend/back-end architecture, rebuilding the UI with ExtJS and establishing a clean PHP backend to improve maintainability and feature velocity",
        "Collaborated with stakeholders to prioritize requirements, deliver new features, and resolve defects quickly",
      ],
      from: new Date(2011, 9, 1),
      to: new Date(2014, 10, 30),
    },
    {
      title: "Full Stack Developer",
      company: "CREAVIVA GmbH & Co. KG",
      description: "",
      bullets: [
        "Tech: PHP, MySQL, CSS, JavaScript, TYPO3",
        "Manage and create content for websites using PHP, MySQL, CSS, and JavaScript",
        "Develop websites with TYPO3 CMS, including custom TYPO3 extension creation",
      ],
      from: new Date(2011, 6, 1),
      to: new Date(2011, 9, 30),
    },
    {
      title: "IT Management Assistant",
      company: "Kortmann Beton GmbH & Co. KG",
      description: "",
      bullets: ["Develop and maintain the company website"],
      from: new Date(2009, 6, 1),
      to: new Date(2011, 6, 30),
    },
  ];
}

export default function ExperienceTimeline() {
  const data = getExperienceData();

  return (
    <Timeline>
      {data.map((item, index) => {
        return (
          <Timeline.Item key={index}>
            <Timeline.Icon current={item.current}>
              <Briefcase />
            </Timeline.Icon>
            <Timeline.Title>
              <div className="flex flex-wrap">
                <span className="font-extrabold">{item.title}</span>
                <span className="font-extralight">@{item.company}</span>
              </div>
            </Timeline.Title>
            <Timeline.Time>
              {format(item.from, "MMMM yyyy")} -
              {isBefore(item.to, new Date())
                ? format(item.to, " MMMM yyyy")
                : " Present"}
            </Timeline.Time>
            <Timeline.Content>
              <p className="prose prose-sm prose-indigo mb-5 mt-4 max-w-none dark:prose-invert">
                {item.description}
              </p>

              {item.bullets.length > 0 && (
                <ul className="ml-4 list-disc text-sm">
                  {item.bullets.map((bullet, index) => {
                    return (
                      <li
                        key={index}
                        className="prose prose-sm prose-indigo max-w-none dark:prose-invert"
                      >
                        {bullet}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
