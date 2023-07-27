import { format, isBefore } from "date-fns";
import { GraduationCap } from "lucide-react";

import Timeline from "./timeline/Timeline";

export function getEducationData() {
  return [
    {
      title: "M.Sc. Applied Computer Science",
      institution: "HTW Berlin - University of Applied Sciences",
      description:
        'I am studying Applied Computer Science (Angewandte Informatik) at <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a>. I am currently working on my master\'s thesis. During my time at this university, I have completed several projects in the areas of bioinformatics, deep learning, data science, and web development.',
      bullets: [
        "Using generative adversarial networks to create images of human faces",
        'Member of the <a target="_blank" href="https://campus-stories.htw-berlin.de/en/jahr/2022/in-drei-stunden-das-virus-identifizieren/">Covid-SpiNGS</a> project, developing an on-demand next-generation sequencing pipeline for COVID-19 detection',
        'Exchange year in Taipei, Taiwan at the <a target="_blank" href="https://www.ntust.edu.tw/">National Taiwan University of Science and Technology (NTUST)</a>',
      ],
      from: new Date(2019, 9, 1),
      to: new Date(2023, 8, 30),
      current: true,
    },
    {
      title: "B.Sc. Applied Computer Science",
      institution: "HTW Berlin - University of Applied Sciences",
      description:
        'I graduated from <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a> with a Bachelor in Applied Computer Science. During this time, I specialized in data science and deep learning.',
      bullets: [
        'Exchange semester in Cuernavaca, Mexico at <a target="_blank" href="https://uninter.edu.mx/">Universidad Internacional (UNINTER)</a>',
        "Bachelor thesis on transferring painting styles to photos using deep learning techniques",
      ],
      from: new Date(2016, 3, 1),
      to: new Date(2019, 8, 30),
    },
    {
      title: "IT Management Assistant",
      institution: "KBS Nordhorn",
      description:
        'As part of my apprenticeship at <a target="_blank" href="https://www.kortmann-beton.de/">Kortmann Beton</a>, I attended this business-related school where the theoretical knowledge needed for the apprenticeship was taught.',
      from: new Date(2009, 8, 1),
      to: new Date(2011, 6, 31),
      bullets: [],
    },
    {
      title: "Information Technology Assistant",
      institution: "Berufskolleg Rheine",
      description:
        'I began my IT career path at the technical college in Rheine. <a target="_blank" href="https://www.berufskolleg-rheine.de/">Berufskolleg Rheine</a> offered various subjects like Programming, Database, etc. I graduated with a dual degree as an Information Technology Assistant and the general qualification to study at Germany\'s Universities of Applied Sciences (Fachhochschule).',
      from: new Date(2004, 8, 1),
      to: new Date(2008, 6, 31),
      bullets: [],
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
              <p
                className="prose prose-sm prose-indigo mb-5 mt-4 max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />

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
