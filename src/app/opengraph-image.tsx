import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "The Joful Mode. A creative agency specializing in Web Design, SEO, and Marketing for Law Firms.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const soraSemiBold = fetch(
    new URL("../assets/Sora-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8DA1B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <p>
            The Joyful{``}
            <span
              style={{
                color: "#9A008A",
              }}
            >
              Mode
            </span>
          </p>
          <p
            style={{
              color: "#000",
              // fontSize: 48,
            }}
          >
            .COM
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Sora",
          data: await soraSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
