import { format, isBefore } from "date-fns";
import { GraduationCap } from "lucide-react";

import Timeline from "./timeline/Timeline";

export function getEducationData() {
  return [
    {
      title: "M.Sc. Applied Computer Science",
      institution: "HTW Berlin",
      bullets: [
        "Thesis: Explorative Analysis of Data from Nanopore-Based DNA Sequencing to Identify Dilution Effects — Grade: 1.1",
        "Specialisations: AI, Bioinformatics, Deep Learning, Data Science",
        "Exchange: NTUST, Taipei",
      ],
      from: new Date(2019, 11, 1),
      to: new Date(2023, 9, 31),
      current: false,
    },
    {
      title: "B.Sc. Applied Computer Science",
      institution: "HTW Berlin",
      bullets: [
        "Thesis: Style transfer for photos using deep learning — Grade: 1.6",
        "Exchange: UNINTER, Cuernavaca, Mexico",
      ],
      from: new Date(2016, 3, 1),
      to: new Date(2019, 8, 30),
    },
    {
      title: "IT Management Assistant (Apprenticeship)",
      institution: "Kortmann Beton GmbH & Co. KG",
      bullets: [
        "Completed apprenticeship alongside theoretical studies — Grade: 2.0",
      ],
      from: new Date(2009, 6, 1),
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
