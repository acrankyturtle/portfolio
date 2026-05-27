import association_editor from "../../assets/cardboard/association_editor.png";
import associations from "../../assets/cardboard/associations.png";
import cad01 from "../../assets/cardboard/cad_01.png";
import cad02 from "../../assets/cardboard/cad_02.png";
import code_command_controller from "../../assets/cardboard/code_command_controller.png";
import code_command_firmware from "../../assets/cardboard/code_command_firmware.png";
import code_command_usage from "../../assets/cardboard/code_command_usage.png";
import code_deviceprovider from "../../assets/cardboard/code_deviceprovider.png";
import code_http_endpoints from "../../assets/cardboard/code_http_endpoints.png";
import code_macrostate from "../../assets/cardboard/code_macrostate.png";
import code_sequencestate from "../../assets/cardboard/code_sequencestate.png";
import dashboard from "../../assets/cardboard/dashboard.png";
import debugging from "../../assets/cardboard/debugging.png";
import guide from "../../assets/cardboard/guide.png";
import cover from "../../assets/cardboard/keypads_on_desk.png";
import macro_editor from "../../assets/cardboard/macro_editor.png";
import macro_templates from "../../assets/cardboard/macro_templates.png";
import pcb from "../../assets/cardboard/pcb.png";
import pcbDesign from "../../assets/cardboard/pcb_design.png";
import profile_editor from "../../assets/cardboard/profile_editor.png";
import schematic01 from "../../assets/cardboard/schematic_01.png";
import schematic02 from "../../assets/cardboard/schematic_02.png";
import schematic03 from "../../assets/cardboard/schematic_03.png";
import update_firmware from "../../assets/cardboard/update_firmware.png";
import { ImageCard } from "../../components/blocks/ImageCard";
import { ImageGrid } from "../../components/blocks/ImageGrid.tsx";
import { ProblemSolution } from "../../components/blocks/ProblemSolution";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import { Section } from "../../components/blocks/Section.tsx";
import { ExternalLink } from "../../components/ui/ExternalLink.tsx";
import { ProjectRef } from "../../components/ui/ProjectRef";
import { meta as crankyKeypadMeta } from "./cranky_keypad";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "cardboard",
  title: "Cardboard",
  tagline:
    "Programmable keyboard controller system with host software, configuration UI, and embedded firmware.",
  year: 2024,
  endYear: 2026,
  tech: ["Rust", "Embassy", "C#", "ASP.Net", "TypeScript", "React"],
  cover,
  coverAlt: "Two custom devices running Cardboard firmware",
  links: [
    { label: "Github", href: "https://github.com/acrankyturtle/Cardboard" },
  ],
  featured: true,
};

export default function Cardboard() {
  return (
    <ProjectLayout>
      <ImageCard
        src={cover}
        alt="Two custom devices running Cardboard firmware"
        caption="Two custom-built devices running Cardboard firmware"
        frame="shadow"
      />

      <Prose size="lead">
        <p>
          Cardboard was birthed from the ashes of a previous solo prototype
          project called the{" "}
          <ProjectRef project={crankyKeypadMeta}>Cranky Keypad</ProjectRef>.
          Cranky Keypad proved the use-case of such a device, but it was a
          one-off and not designed for others to use. Cardboard is a completely
          redesigned and reimagined version, built from the ground up with a
          focus on usability, reliability, and extensibility.
        </p>
        <p>
          It consists of three main components: the embedded firmware that runs
          on the device, the host software that runs on the user's computer and
          communicates with the device, and the configuration UI that lets users
          easily customize their device's behavior — together, a versatile tool
          for anyone looking to build their own programmable keyboard
          controller.
        </p>
        <p>
          Check out the{" "}
          <ExternalLink href="https://github.com/acrankyturtle/Cardboard/blob/master/GUIDE.md">
            user guide
          </ExternalLink>{" "}
          for Cardboard, where most features are explained at a high level. You
          can also check out the{" "}
          <ExternalLink href="https://github.com/acrankyturtle/Cardboard/tree/master/docs">
            technical docs
          </ExternalLink>{" "}
          where you can find more detailed information aimed at developers.
        </p>
      </Prose>

      <Section eyebrow="Improvements" heading="Lessons learned">
        <Prose>
          <p>
            Cranky Keypad proved the concept, but living with it surfaced plenty
            to improve. Each of its limitations became a design goal for
            Cardboard.
          </p>
        </Prose>
        <ProblemSolution
          beforeLabel="Cranky Keypad"
          afterLabel="Cardboard"
          items={[
            {
              problem: {
                title: "Locked-in design",
                description:
                  "Controller software was hard-coded for the Cranky Keypad's exact layout -- one device, no room to grow.",
              },
              solution: {
                title: "Ecosystem",
                description:
                  "Supports a wide variety of devices with differing layouts, settings, and capabilities.",
              },
            },
            {
              problem: {
                title: "Interpreted firmware",
                description:
                  "Firmware was written in Python -- slower and less reliable.",
              },
              solution: {
                title: "Native & reliable",
                description:
                  "Firmware written in Rust, a high-performance low-level language.",
              },
            },
            {
              problem: {
                title: "No layer system",
                description:
                  "Profiles were re-sent on every application change, and keys couldn't act as modifiers.",
              },
              solution: {
                title: "Layers",
                description:
                  "Less chatter with host software, and keys can modify the behavior of other keys.",
              },
            },
            {
              problem: {
                title: "Limited protocol",
                description:
                  "Device must use USB CDC to communicate with host.",
              },
              solution: {
                title: "Open and extensible",
                description:
                  "Device provider interface can be implemented for any communication protocol.",
              },
            },
            {
              problem: {
                title: "Limited to Windows",
                description:
                  "The controller was heavily coupled to Windows Forms, meaning it could never work on any other OS.",
              },
              solution: {
                title: "Cross-platform",
                description:
                  "Frontend is truly cross-platform with React, and backend is decoupled so that the only features locked to Windows are truly Windows only, such as tray icon support, active application events, etc. These services can be easily ported to any other OS.",
              },
            },
            {
              problem: {
                title: "Soldered key switches",
                description: "Key switches must be desoldered to be swapped.",
              },
              solution: {
                title: "Hot-swappable",
                description: "Key switches can be swapped without soldering.",
              },
            },
            {
              problem: {
                title: "Hard-wired",
                description:
                  "USB plug hard-wired to on-board Raspberry Pi Pico. Users could not customize the cable length to their needs, and if the code becomes damaged, the device must be opened up for it to be replaced.",
              },
              solution: {
                title: "USB-C plug",
                description:
                  "Device connects to host via USB-C plug, which can be easily replaced if damaged and allows users to choose a cable length that suits their setup.",
              },
            },
            {
              solution: {
                title: "Macro references",
                description:
                  "The same macro can be assigned to multiple keys or layers.",
              },
            },
            {
              solution: {
                title: "Stays up to date",
                description:
                  "Host talks to update server to maintain up-to-date host software, firmware, and even device metadata.",
              },
            },
            {
              solution: {
                title: "Smooth space bar",
                description: "Stabilizers for a smoother space bar.",
              },
            },
          ]}
        />
        <p>...and more!</p>
      </Section>
      <Section eyebrow="The Hardware" heading="Simple is better">
        <Prose>
          <p>
            The first step was to design a new device to run the firmware. I
            learned from the years of using Cranky Keypad that I did not need
            nearly as many keys. I decided to trim the fat and came up with a
            simpler, leaner design, dubbed CK1-30.
          </p>
        </Prose>
        <ImageGrid
          columns={3}
          images={[
            {
              src: schematic01,
              alt: "Raspberry Pi Pico connection schematic",
              caption:
                "Schematic for connections from Raspberry Pi Pico microcontroller to key matrix",
            },
            {
              src: schematic02,
              alt: "Key matrix schematic",
              caption: "Schematic for connections from/to each row and column",
            },
            {
              src: schematic03,
              alt: "Key row schematic",
              caption: "Schematic for a single key row",
            },
            {
              src: pcbDesign,
              alt: "CK1-30 PCB design",
              caption: "Custom designed PCB for CK1-30",
            },
            {
              src: pcb,
              alt: "CK1-30 PCB photo",
              caption: "Actual CK1-30 PCB",
            },
            {
              src: cad01,
              alt: "3D rendering of keypad chassis top",
              caption: "CK1-30 CAD rendering top view",
            },
            {
              src: cad02,
              alt: "3D rendering of keypad chassis bottom",
              caption: "CK1-30 CAD rendering bottom view",
            },
            {
              src: debugging,
              alt: "Debugging Cardboard",
              caption: "Debugging Cardboard using another Raspberry Pi Pico",
            },
          ]}
        />
      </Section>
      <Section eyebrow="The Firmware" heading="Lightweight & asynchronous">
        <Prose>
          <p>
            While the hardware was mostly a difference in layout and
            hot-swapability, the firmware is where the largest change happened.
            The prototype firmware was written using CircuitPython, which makes
            development very easy, but results in slower execution, larger
            executable size, and less capabilities. The new firmware is written
            in Rust using the Embassy async runtime in order to address these
            issues.
          </p>
          <p>
            Performance is the biggest gain, with Python being a slower
            interpreted language. The Raspberry Pi Pico has two cores, which
            allows great potential for speed improvements. Embassy provides many
            of the tools necessary to take advantage of this, and I plan to
            utilize the second core in Cardboard's firmware eventually. As of
            now, using the second core is impossible with CircuitPython alone.{" "}
            <ExternalLink href="https://github.com/adafruit/circuitpython/issues/4106">
              See here for more information.
            </ExternalLink>
          </p>
          <p>
            Executable size matters on embedded hardware. The Raspberry Pi Pico
            comes with 2 MiB of flash storage, which must be shared between the
            executable, profile, and settings. A larger executable means less
            space for the profile and settings. Cardboard is much more feature
            rich, yet the firmware size is cut down over 15%. There could
            definitely be more optimizations to be made, especially with cutting
            down dependencies, but this is a great start and allows for much
            more room for the profile and settings to grow in the future.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          fit="contain"
          images={[
            {
              src: code_macrostate,
              alt: "Macro processing code",
              caption:
                "Macro state machine code, showing how macros are processed in the firmware",
            },
            {
              src: code_sequencestate,
              alt: "Sequence processing code",
              caption:
                "Sequence state machine code, showing how sequences are processed in the firmware",
            },
            {
              src: code_command_firmware,
              alt: "Command implementation",
              caption:
                "Implementation of a command, which is invoked on the firmware by the controller",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Backend" heading="Extensible & powerful">
        <Prose>
          <p>
            The backend has three responsibilities: provide background services,
            such as setting tags based on the active application, hosting the
            React frontend web page, and providing an API for the frontend. This
            is all handled by a ASP.Net application written in C#.
          </p>
          <p>
            Provided by the backend are a number of services, such as an
            external tag switcher, and a virtual key dispatcher. Projects, such
            as the <code>Cardboard.Windows</code> project, utilize these
            services to switch external tags based on the active application,
            and invoke virtual keys in response to key presses on other devices.
            You can read more about tags in the Cardboard guide{" "}
            <ExternalLink href="https://github.com/acrankyturtle/Cardboard/blob/master/GUIDE.md#tags">
              here
            </ExternalLink>
            , and virtual keys{" "}
            <ExternalLink href="https://github.com/acrankyturtle/Cardboard/blob/master/GUIDE.md#virtual-keys">
              here
            </ExternalLink>
            .
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          fit="contain"
          images={[
            {
              src: code_deviceprovider,
              alt: "Device provider interface",
              caption:
                "Device provider interface, which makes adding devices from other protocols possible. Currently ships with a USB CDC implementation, but could be easily extended to support Bluetooth, Wi-Fi, etc.",
            },
            {
              src: code_command_controller,
              alt: "Command implementation",
              caption: "Implementation of a command on the controller side",
            },
            {
              src: code_command_usage,
              alt: "Command usage",
              caption:
                "Example of how to broadcast a command to all devices capable of handling it",
            },
            {
              src: code_http_endpoints,
              alt: "HTTP endpoint handlers",
              caption:
                "Some of the backend's ASP.Net minimal API endpoint handlers",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Frontend" heading="Cross-platform UI">
        <Prose>
          <p>
            An important goal of Cardboard versus the prototype was to decouple
            the frontend from the Windows operating system. Building the
            frontend in React felt like a sound decision because it allows a lot
            of flexibility and is battle-tested framework. My original plan was
            to use Electron, but because the app needed to run in the background
            to provide services and an API for the frontend anyways, I decided
            to go with a more lightweight approach of just hosting the React app
            in ASP.Net and having it open in the user's default browser.
          </p>
        </Prose>
        <ImageGrid
          columns={3}
          images={[
            {
              src: dashboard,
              alt: "Dashboard page",
              caption:
                "Dashboard page provides overview of Cardboard ecosystem",
            },
            {
              src: profile_editor,
              alt: "Profile editor",
              caption: "Profile editor interface",
            },
            {
              src: macro_editor,
              alt: "Macro editor",
              caption:
                "Macro editor interface showing a mouse rapid fire macro",
            },
            {
              src: macro_templates,
              alt: "Macro templates",
              fit: "contain",
              caption:
                "Macro templates make it easy to make common but complex macros, such as rapid fire",
            },
            {
              src: associations,
              alt: "Association index",
              fit: "contain",
              caption:
                "Association index interface showing all associations in the system",
            },
            {
              src: association_editor,
              alt: "Association editor",
              caption: "Association editor interface",
            },
            {
              src: update_firmware,
              alt: "Firmware update process",
              caption: "Firmware updates are made easy and migrate user data",
            },
            {
              src: guide,
              alt: "Guide page",
              caption:
                "Cardboard is unique compared to similar devices, so it comes with a built-in guide to make learning about it easy",
            },
          ]}
        />
      </Section>
    </ProjectLayout>
  );
}
