import { addMonths, format, isBefore } from "date-fns";
import { Briefcase } from "lucide-react";

import Timeline from "./timeline/Timeline";

export function getExperienceData() {
  return [
    {
      title: "Frontend Engineer",
      company: "DERICON GmbH",
      description: "",
      bullets: [
        "Develop user interfaces using ReactJS and Remix for internal software",
        "Enhance web-based software frontend with Angular (v2+)",
        "Create PHP Symfony middleware to integrate AngularJS (v1) frontend with REST API",
        "Set up a monorepo architecture for multiple Vue.js (Nuxt) projects",
      ],
      from: new Date(2016, 11, 1),
      to: addMonths(new Date(), 1),
      current: true,
    },
    {
      title: "Fullstack Developer",
      company: "SLH GmbH",
      description: "",
      bullets: [
        "Implement new features for a web-based software in PHP",
        "Create a new frontend using Sencha ExtJS",
        "Debug and resolve PHP-based business logic issues",
        "Develop features with ASP.NET MVC and Entity Framework",
        "Utilize GIT SCM workflows for version control",
      ],
      from: new Date(2011, 9, 1),
      to: new Date(2014, 10, 30),
    },
    {
      title: "Fullstack Developer",
      company: "CREAVIVA GmbH & Co. KG",
      description: "",
      bullets: [
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
      from: new Date(2011, 6, 1),
      to: new Date(2011, 9, 30),
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
