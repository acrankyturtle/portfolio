import ckp1 from "../../assets/cranky_keypad/ckp1.png";
import ckp10 from "../../assets/cranky_keypad/ckp10.png";
import ckp11 from "../../assets/cranky_keypad/ckp11.png";
import ckp12 from "../../assets/cranky_keypad/ckp12.png";
import ckp13 from "../../assets/cranky_keypad/ckp13.png";
import ckp14 from "../../assets/cranky_keypad/ckp14.png";
import ckp15 from "../../assets/cranky_keypad/ckp15.png";
import cover from "../../assets/cranky_keypad/ckp15_cropped.png";
import ckp16 from "../../assets/cranky_keypad/ckp16.png";
import ckp19 from "../../assets/cranky_keypad/ckp19.png";
import ckp2 from "../../assets/cranky_keypad/ckp2.png";
import ckp20 from "../../assets/cranky_keypad/ckp20.png";
import ckp21 from "../../assets/cranky_keypad/ckp21.png";
import ckp3 from "../../assets/cranky_keypad/ckp3.png";
import ckp4 from "../../assets/cranky_keypad/ckp4.png";
import ckp5 from "../../assets/cranky_keypad/ckp5.png";
import ckp6 from "../../assets/cranky_keypad/ckp6.png";
import ckp7 from "../../assets/cranky_keypad/ckp7.png";
import ckp9 from "../../assets/cranky_keypad/ckp9.png";
import { ImageCard } from "../../components/blocks/ImageCard";
import { ImageGrid } from "../../components/blocks/ImageGrid.tsx";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import { Section } from "../../components/blocks/Section";
import { ProjectRef } from "../../components/ui/ProjectRef";
import { meta as cardboardMeta } from "./cardboard";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "cranky-keypad",
  title: "Cranky Keypad",
  tagline:
    "Predecessor to Cardboard, a prototype programmable keyboard controller system with host software and Python firmware.",
  year: 2021,
  tech: ["C#", "WinForms", "Python"],
  cover,
  coverAlt: "Cranky Keypad 3D printed prototype",
};

export default function CrankyKeypad() {
  return (
    <ProjectLayout>
      <ImageCard
        src={ckp15}
        alt="Cranky Keypad 3D printed prototype"
        frame="shadow"
        caption="Cranky Keypad 3D printed prototype"
      />

      <Prose size="lead">
        <p>
          Cranky Keypad is a custom-built fusion of hardware and software,
          designed for those who want incredibly powerful and customizable
          macros for everyday computer use. There are two separate programs
          working in unison and communicating with each other to provide these
          capabilities: the CircuitPython code running on the onboard Raspberry
          Pi Pico, and the C# program running on the user's computer. At a
          glance, Cranky Keypad may appear similar to the products it was built
          to replace, such as the Logitech G13 or the Razer Orbweaver. However,
          the custom software powering it is the real difference maker. More on
          what really sets this apart from its competitors after some
          fundamental details.
        </p>
      </Prose>

      <Section eyebrow="The Hardware" heading="Designed from scratch">
        <Prose>
          <p>
            Cranky Keypad began in Spring 2021 as a way for me to begin learning
            hardware programming and circuit board design. This project
            represents the first PCB I designed and built myself, my first foray
            into programming a Raspberry Pi Pico using CircuitPython, and my
            first time using Python for an actual project.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          images={[
            {
              src: ckp11,
              alt: "Python code",
              caption:
                "Snippet of Python code, which is interpreted by the onboard Raspberry Pi Pico",
            },
            {
              src: ckp13,
              alt: "PCB assembly",
              caption: "PCB assembly progress photo",
            },
            {
              src: ckp14,
              alt: "Assembled board",
              caption:
                "Finished board ready to be installed in custom designed 3D printed chassis. Opaque keycaps exhibited less than desirable appearance with LED backlights. However, LEDs can be disabled by removing a jumper.",
            },
            {
              src: ckp12,
              alt: "3D printed body",
              caption: "3D printed body before assembly",
            },
          ]}
        />
      </Section>

      <Section eyebrow="The motivation" heading="Why go custom?">
        <Prose>
          <p>
            There are several products out there that do exactly what this
            appears to do, so why use Cranky Keypad? The answer is simple:
            well-designed software with features its competitors simply do not
            have. If you perform a simple Google search, you will find that many
            users are unhappy with Logitech G Hub and Razer Synapse. I have used
            both extensively and was commonly frustrated by their bugs, bad UX,
            and lack of features.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          images={[
            {
              src: ckp1,
              alt: "Main interface",
              caption:
                "It may not be as aesthetic as its competitors, but it is functional, and I think it came out pretty well for constraining project hardware and software development time to three months.",
            },
            { src: ckp10, alt: "Context menu", noUpscale: true },
          ]}
        />
      </Section>

      <Section eyebrow="The difference" heading="What sets it apart?">
        <Prose>
          <p>
            Like its competitors, Cranky Keypad supports automatic profile
            switching. This means your keys and macros will change depending on
            what application you are currently using on your computer. However,
            unlike its competitors, Cranky Keypad Controller has multiple checks
            to ensure that your profile changes every time you switch
            applications. It is very common for its competitors to "miss"
            application changes, costing you productivity and causing
            frustration.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          images={[
            {
              src: ckp2,
              alt: "Profile editor",
              caption: "Profile editor shown editing the default profile.",
            },
            {
              src: ckp4,
              fit: "contain",
              alt: "Sequence editor",
              caption:
                "Sequence editor showing a macro that presses K and then clicks the left mouse button on key press",
            },
          ]}
        />
        <Prose>
          <p>
            An extremely useful feature Cranky Keypad Controller has that I have
            yet to see in any other competitor is profile inheritance. What this
            means is when you create a new profile, all keys by default inherit
            from the default profile.
          </p>
          <p>
            For example, let's say you want the top bar to control your media
            player. You would add the 'Media Previous', 'Play/Pause', and 'Media
            Next' macros like I have in the image below. Now let's say you have
            profiles for 10 different applications, and you want all 10 profiles
            to share that top bar. In software such as Logitech G Hub, you would
            accomplish this by duplicating the default profile, then making your
            application specific changes to that profile. In my software, the
            top bar can be set to inherit from default. Now let's say in the
            future you decide to make a change to that top bar, such as adding a
            macro to start Spotify, or moving the media buttons to different
            keys. In Cranky Keypad Controller, you only need to modify the
            default profile because all other profiles inherit from it. In
            Logitech G Hub and Razer Synapse, you need to make those exact same
            tedious changes to all{" "}
            <em>
              <u>ten profiles</u>
            </em>
            .
          </p>
        </Prose>
        <ImageCard
          src={ckp3}
          alt="Profile editor"
          caption="Buttons with parenthesis and gray text are inherited. Buttons with black text take precedence when the profile is loaded."
        />
        <ImageGrid
          columns={3}
          images={[
            {
              src: ckp7,
              alt: "Emblem editor",
              caption:
                "Profiles can use a custom emblem to indicate when they are active.",
              fit: "contain",
            },
            {
              src: ckp6,
              alt: "Tray icon with no emblem",
              caption: "System tray icon when default profile is loaded.",
              noUpscale: true,
              fit: "contain",
            },
            {
              src: ckp9,
              alt: "Tray icon with emblem",
              caption:
                "System tray icon changes to show the emblem of the currently loaded profile.",
              noUpscale: true,
              fit: "contain",
            },
            {
              src: ckp21,
              alt: "Sequence editor",
              caption:
                "Extremely powerful macros with precise timings and loops. Logitech G Hub and Razer Synapse have nowhere near the same power and flexibility.",
              fit: "contain",
            },
            {
              src: ckp20,
              alt: "Basic key wizard",
              caption:
                "If you just want a key on the Keypad to trigger a basic key press rather than a fully-fledged macro, the interface can be rather intimidating. The Basic Key Wizard solves this by allowing you to select up to four keys and automatically generates a macro which behaves like an ordinary key press for those four keys.",
              fit: "contain",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Remote buttons"
        heading="Triggering macros from other devices"
      >
        <Prose>
          <p>
            A very unique and powerful feature of Cranky Keypad is the remote
            button. A remote button is a per-profile virtual macro that is not
            triggered by a hardware key press on the Keypad itself, but instead
            by another device. The controller does this by listening to input
            from one or more specified devices, then signaling key down and key
            up events to the Keypad in response. This allows you to use any
            button on any device connected to your computer to trigger one of
            Cranky Keypad's extremely powerful macros. For example, if you want
            the back button on your Logitech mouse to run a macro that is too
            complicated for Logitech G Hub to run, you can instead set up a
            remote button and have Cranky Keypad run it when it detects the back
            button being pressed.
          </p>
        </Prose>
        <ImageCard
          src={ckp5}
          alt="Remote button editor"
          caption="A custom macro running off my Logitech G502 mouse. Cranky Keypad Controller will run the given macro when the specified trigger button is pressed."
        />
      </Section>

      <Section eyebrow="Code snippets" heading="Clean and extensible">
        <ImageGrid
          columns={2}
          images={[
            {
              src: ckp16,
              alt: "Async communication",
              caption:
                "Communication to and from the Keypad is asynchronous, and the Keypad will respond to indicate whether the command sent was successful or if an error occurred.",
              fit: "contain",
            },
            {
              src: ckp19,
              alt: "SendCommand function code",
              caption:
                "The SendCommand function, using the abstract Command class, does all of the heavy lifting behind the scenes, allowing the developer to focus on functionality rather than implementation.",
              fit: "contain",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Post mortem" heading="Lessons learned">
        <Prose>
          <p>
            While I no longer use my Cranky Keypad prototype due to{" "}
            <ProjectRef project={cardboardMeta}>Cardboard</ProjectRef> replacing
            it, I used it from 2021-2026 almost every day and it held up
            wonderfully. My Logitech G502 mouse sometimes fails to change
            profiles when my active application changes, but my Cranky Keypad
            has never failed and is one of the most reliable peripherals plugged
            into my computer, thanks to the powerful but lightweight controller
            software.
          </p>
          <p>
            I learned many lessons from my experience developing the Cranky
            Keypad prototype. I drew from this experience when designing{" "}
            <ProjectRef project={cardboardMeta}>Cardboard</ProjectRef>, and I go
            over some of these lessons on its project page.
          </p>
        </Prose>
      </Section>
    </ProjectLayout>
  );
}
