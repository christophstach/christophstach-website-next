/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  const imageUrl = new URL("../../images/hero.png", import.meta.url);
  const imageData = await fetch(imageUrl).then(
    (res) => res.arrayBuffer() as unknown as string,
  );

  return new ImageResponse(
    (
      <div tw="bg-neutral-50 flex justify-center items-center w-full h-full">
        <div tw="flex flex-col max-w-screen-sm">
          <h1 tw="text-5xl font-extrabold leading-none tracking-tight text-gray-900">
            Hi, I am Christoph!
          </h1>

          <p tw="font-light text-gray-500">
            A software engineer with a passion for webtechnologies, especially
            frontend development.
          </p>
        </div>

        <img
          width="288"
          height="288"
          tw="rounded-full"
          src={imageData}
          alt="Logo"
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
