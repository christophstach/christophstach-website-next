import { ImageResponse } from "@vercel/og";
import Image from "next/image";

import heroWebp from "@/images/hero.webp";

export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          width={288}
          height={288}
          className="h-32 w-32 rounded-full object-cover drop-shadow-xl md:h-72 md:w-72"
          src={heroWebp}
          alt="Hero section image"
          loading="eager"
          priority
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
