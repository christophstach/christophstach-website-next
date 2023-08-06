import { format, isBefore } from "date-fns";
import { GraduationCap } from "lucide-react";

import Timeline from "./timeline/Timeline";

export function getEducationData() {
  return [
    {
      title: "M.Sc. Applied Computer Science",
      institution: "HTW Berlin",
      bullets: [
        "Currently working on Master's thesis",
        "Focus on Web, AI, Bio Informatics, Deep Learning and Data Science",
        "Generate human face images using generative adversarial networks",
        "Contribute to Covid-SpiNGS project, developing an on-demand next-generation sequencing pipeline for COVID-19 detection",
        "Participate in exchange program at National Taiwan University of Science and Technology (NTUST) in Taipei, Taiwan",
      ],
      from: new Date(2019, 11, 1),
      to: new Date(),
      current: true,
    },
    {
      title: "B.Sc. Applied Computer Science",
      institution: "HTW Berlin",
      bullets: [
        "Complete Bachelor thesis on transferring painting styles to photos using Deep Learning techniques, Grade: 1.6",
        "Participate in exchange semester at Universidad Internacional (UNINTER) in Cuernavaca, Mexico",
      ],
      from: new Date(2016, 3, 1),
      to: new Date(2019, 8, 30),
    },
    {
      title: "IT Management Assistant (IHK)",
      institution: "KBS Nordhorn",
      bullets: [
        "Apprenticeship at Kortmann Beton alongside KBS Nordhorn theoretical studies, Grade: 2.0",
      ],
      from: new Date(2009, 8, 1),
      to: new Date(2011, 6, 30),
    },
    {
      title: "Information Technology Assistant",
      institution: "Berufskolleg Rheine",
      bullets: [
        "Dual degree in Information Technology, covering programming, database management, and more, including university eligibility, Grade: 2.9",
      ],
      from: new Date(2004, 8, 1),
      to: new Date(2008, 6, 30),
    },
  ];
}
export default function EducationTimeline() {
  const data = getEducationData();

  return (
    <Timeline>
      {data.map((item, index) => {
        return (
          <Timeline.Item key={index}>
            <Timeline.Icon current={item.current}>
              <GraduationCap />
            </Timeline.Icon>
            <Timeline.Title>
              <div className="flex flex-wrap">
                <span className="font-extrabold">{item.title}</span>
                <span className="font-extralight">@{item.institution}</span>
              </div>
            </Timeline.Title>
            <Timeline.Time>
              {format(item.from, "MMMM yyyy")} -
              {isBefore(item.to, new Date())
                ? format(item.to, " MMMM yyyy")
                : " Present"}
            </Timeline.Time>
            <Timeline.Content>
              {item.bullets.length > 0 && (
                <ul className="ml-4 list-disc text-sm">
                  {item.bullets.map((bullet, index) => {
                    return (
                      <li
                        key={index}
                        className="prose prose-sm prose-indigo max-w-none dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
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
