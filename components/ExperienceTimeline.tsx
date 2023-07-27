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
        "Developed user interfaces in ReactJS and Remix for internal software",
        "Extended the existing frontend of a web-based software using Angular (v2+)",
        "Developed PHP Symfony framework middleware to connect the AngularJS (v1) frontend with the system's core REST API",
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
        "Planned and implemented new features for the web-based software UWEB2000",
        "Developed a new frontend using Sencha ExtJS",
        "Fixed bugs in the PHP-based business logic",
        "Troubleshot software issues with customers",
        "Served as a consultant and contact person for customers",
        "Implemented features in the company's second product using ASP.NET MVC and Entity Framework",
        "Worked with predefined GIT SCM workflows",
      ],
      from: new Date(2011, 9, 1),
      to: new Date(2014, 10, 30),
    },
    {
      title: "Fullstack Developer",
      company: "CREAVIVA GmbH & Co. KG",
      description: "",
      bullets: [
        "Managed content and developed new websites using PHP, MySQL, CSS, and JavaScript",
        "Developed websites with the CMS TYPO3, including the creation of new TYPO3 extensions",
        "Served as the internal contact person for IT-related issues",
      ],
      from: new Date(2011, 6, 1),
      to: new Date(2011, 9, 31),
    },
    {
      title: "IT Management Assistant",
      company: "Kortmann Beton GmbH & Co. KG",
      description: "",
      bullets: [
        "Developed the company's website",
        "Developed reports for internal company analysis using C#, Crystal Reports, Visual Basic, and Microsoft Access",
        "Served as the internal contact person for IT-related issues",
      ],
      from: new Date(2011, 6, 1),
      to: new Date(2011, 9, 31),
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
