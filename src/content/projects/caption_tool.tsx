import cover from "../../assets/caption_tool/ct1.png";
import ct2 from "../../assets/caption_tool/ct2.png";
import ct6 from "../../assets/caption_tool/ct6.png";
import { ImageCard } from "../../components/blocks/ImageCard";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import { Section } from "../../components/blocks/Section.tsx";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "caption-tool",
  title: "Caption Tool",
  tagline: "Automatically caption images based on Excel data",
  year: 2022,
  tech: ["C#", "WinForms", "NPOI"],
  cover,
};

export default function CaptionTool() {
  return (
    <ProjectLayout>
      <ImageCard
        src={cover}
        alt="Project hero"
        frame="shadow"
        caption="Some elements blurred and caption text replaced for customer privacy"
      />
      <Prose size="lead">
        <p>
          Caption Tool is software I developed and sold to a publicly traded
          company worth over $2.5B. Caption Tool is software designed to
          automatically caption images using data pulled from an Excel document.
          It determines exactly which cells to use from only the image's file
          name. Before using this software, the customer had to manually caption
          hundreds of images using Paint with information from a large Excel
          spreadsheet. Every image has different captions. This process led to
          wasted man-hours and was prone to human error. To quote what the
          customer said to me after using it: "to me, [Caption Tool] is worth
          its weight in gold." Software, of course, doesn't weigh very much, but
          we won't tell him that!
        </p>
      </Prose>

      <Section eyebrow="Overview" heading="Automate to save time">
        <Prose>
          <p>
            Caption Tool simplifies the customer's workflow greatly. The photo's
            filename is created by the technician at the time it is taken, and
            it tells Caption Tool everything it needs to know about what cells
            in the spreadsheet to pull the data from, how it should be
            formatted, and where on the image the caption should go.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Workflow" heading="The process">
        <ImageCard
          src={ct2}
          alt="Import dialog"
          caption="Caption Tool's import dialog"
        />
        <Prose>
          <p>
            First, the user selects which Excel spreadsheet to use. Caption Tool
            automatically searches the root directory for images and allows the
            user to select which ones to import. Once imported, the user can
            then view, edit, and reformat the images. Once satisfied, the user
            can press the Export button to caption all the images in parallel,
            also optionally allowing them to create a backup of the original
            images. This saves the customer countless hours and prevents
            possible human error.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Speed" heading="Efficiency is king">
        <Prose>
          <p>
            Caption Tool is highly performant, using asynchronous and parallel
            processing to give the user a smooth, fast, and pleasant experience.
            The goal is for the user to spend as little time as possible using
            Caption Tool so they can focus on their work. Asynchronous code
            ensures the form never freezes or hitches, even when performing CPU
            intensive tasks. A smooth and seamless customer experience is
            absolutely critical to me.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="User Experience" heading="Attention to detail">
        <Prose>
          <p>
            Most developers ignore minor bugs outside of their own source code.
            Microsoft's Windows Forms code is loaded with bugs, many of which I
            believe should be fixed in order to give the user a good experience.
            For example, included is a workaround for a bug in Microsoft's
            ToolStripButton control. When the user mouses over a ToolStripButton
            and a tooltip appears, the tooltip will sometimes appear under the
            cursor and block the user from being able to click the button. The
            first click registers as a click on the tooltip itself and closes
            the tooltip, requiring a second click to properly activate the
            button. This may seem small, but to me, this is unacceptable.
          </p>
          <ImageCard
            src={ct6}
            alt="WinForms bug workaround"
            caption="This code ensures the tooltip never appears underneath the mouse cursor"
          />
        </Prose>
      </Section>
    </ProjectLayout>
  );
}
