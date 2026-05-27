import demoVideo from "../../assets/pingometer/demo.webm";
import cover from "../../assets/pingometer/pingometer.png";
import pingometer2 from "../../assets/pingometer/pingometer2.png";
import pingometer3 from "../../assets/pingometer/pingometer3.png";
import pingometer5 from "../../assets/pingometer/pingometer5.png";
import pingometer6 from "../../assets/pingometer/pingometer6.png";
import pingometer7 from "../../assets/pingometer/pingometer7.png";
import { ImageCard } from "../../components/blocks/ImageCard.tsx";
import { ImageGrid } from "../../components/blocks/ImageGrid";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import { Section } from "../../components/blocks/Section";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "pingometer",
  title: "Pingometer",
  tagline: "Real time network diagnostic tool",
  year: 2022,
  tech: ["C#", "WinForms"],
  cover,
  coverAlt: "Pingometer with owner-drawn graph component",
};

export default function Pingometer() {
  return (
    <ProjectLayout>
      <ImageCard
        src={cover}
        alt="Pingometer"
        frame="shadow"
        caption="Custom highly performant owner-drawn graph control"
      />

      <Prose size="lead">
        <p>
          Pingometer was a project born out of frustration. The bandwidth
          provided by my former ISP was just 6 Mbps down / 0.5 Mbps up. The
          slightest network traffic would adversely affect latency and bring the
          entire network to a standstill, leading to the need for
          troubleshooting tools to monitor my buffer bloat in real time.
        </p>
      </Prose>

      <Section eyebrow="Overview" heading="Visual network diagnostics">
        <Prose>
          <p>
            Before eventually switching ISPs, Pingometer was essential to
            determining if network slowdowns were related to network usage on my
            network or problems related to my ISP. Even after switching to a new
            ISP, Pingometer is useful for checking network performance and
            variance under stress conditions. For example, I used Pingometer to
            optimize my Smart Queue settings. Pingometer not only displays a
            text readout of important statistics such as current ping, average
            ping, and standard deviation; it shows them visually on the graph so
            you can clearly see your average ping and standard deviation.
          </p>
        </Prose>
        <ImageGrid
          columns={1}
          images={[
            {
              src: pingometer2,
              alt: "Ping at a moment in time",
              caption:
                "Placing your mouse cursor near a sample will display an accurate reading of your ping at that moment in time.",
              noUpscale: true,
            },
            {
              src: pingometer3,
              alt: "Custom drawn graph control",
              caption:
                "Custom drawn Windows Forms control can be customized to any size and scale while maintaining clarity and performance.",
              noUpscale: true,
            },
            {
              kind: "video",
              src: demoVideo,
              alt: "Demo video",
              caption: "Video demonstration of Pingometer",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Some code" heading="Under the hood">
        <ImageGrid
          columns={2}
          images={[
            {
              src: pingometer6,
              alt: "Components",
              caption:
                "The graph control uses a number of separate components so the code is less coupled. This makes it easy to maintain, extend, and use in future applications. With just a single new component, ping results could be written to a file and later recalled, making analysis of past data simple.",
              fit: "contain",
            },
            {
              src: pingometer5,
              alt: "Ping result query",
              caption:
                "You can query the results collection based on a given time frame. This is how the graph gets the stats it displays.",
            },
            {
              src: pingometer7,
              alt: "Smoothing",
              caption:
                "Because the Y bounds of the graph are set automatically based on the minimum and maximum sampled ping results, statistics are smoothed over time so the final result is free from jittering. This also makes the average and standard deviation lines move smoothly as well.",
            },
          ]}
        />
      </Section>
    </ProjectLayout>
  );
}
