import cover from "../../assets/halo-timer/mcc1.png";
import mcc2 from "../../assets/halo-timer/mcc2.png";
import mcc3 from "../../assets/halo-timer/mcc3.png";
import mcc4 from "../../assets/halo-timer/mcc4.png";
import mcc6 from "../../assets/halo-timer/mcc6.png";
import mcc7 from "../../assets/halo-timer/mcc7.png";
import mcc8 from "../../assets/halo-timer/mcc8.png";
import { ImageCard } from "../../components/blocks/ImageCard";
import { ImageGrid } from "../../components/blocks/ImageGrid.tsx";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import { Section } from "../../components/blocks/Section";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "halo-timer",
  title: "Halo CE Timer",
  tagline: "Timer utility for the video game Halo: Combat Evolved",
  year: 2020,
  tech: ["C#", "WinForms"],
  cover,
};

export default function HaloTimer() {
  return (
    <ProjectLayout>
      <ImageCard
        src={cover}
        alt="Main timer window"
        frame="shadow"
        noUpscale={true}
        caption="Halo MCC Timer is designed to run in the background, or on a spare monitor. Text-to-speech alerts allow the user to focus on the game, not the timer. Note the application contains a precursor to Pingometer built-in because the game does not display your ping."
      />
      <Prose size="lead">
        <p>
          Halo CE Timer is a program I created to give an advantage when playing
          multiplayer in the video game Halo: Combat Evolved. All on-map weapons
          and power-ups spawn at specific intervals unique to each map and game
          type combination, making tracking power-ups difficult.
        </p>
      </Prose>
      <Section eyebrow="Overview" heading="Timing made easy">
        <Prose>
          <p>
            Halo CE Timer makes timing easy by allowing the user to select the
            current map and game type during the loading screen with hotkeys.
            The user can then start the timer using another hotkey when the game
            starts. To allow the user to stay focused on the game and not have
            to continuously glance at the timer application, Halo CE timer also
            includes an optional text-to-speech announcer to announce when items
            are about to spawn, and again when they spawn. All of these
            announcements are configurable, allowing the user to blacklist
            certain weapons or power-ups they are not concerned with.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          images={[
            {
              src: mcc2,
              alt: "Timer window showing power-up spawn countdowns",
              caption:
                "Halo CE MCC Timer shows the user exactly when in game power-ups are about to spawn, and how long since they last spawned",
            },
            {
              src: mcc3,
              alt: "Timer window with alternate running-state background color",
              caption:
                "Alternate background color makes it immediately apparent when the timer is running",
            },
          ]}
        />
        <Prose>
          <p>
            One design problem that I had to overcome was getting keyboard input
            to the timer application. Like many games, Halo: Combat Evolved
            consumes all keyboard and mouse input, which makes receiving
            keyboard input through ordinary means impossible. Halo CE Timer
            solves this by hooking low level raw keyboard input, which cannot be
            consumed by the game.
          </p>
        </Prose>
        <ImageGrid
          columns={2}
          images={[
            {
              src: mcc7,
              alt: "Abstraction",
              caption:
                "Halo CE MCC Timer contains layers of abstraction on almost all functionality to separate it from specific implementations",
            },
            {
              src: mcc6,
              alt: "Tick code",
              fit: "contain",
              caption:
                "Accidentally picked the wrong map, or was the loading screen too quick to select the correct map? It's okay, just start the timer when the game starts and pick the map when you get a chance. Timers use modular arithmetic and are evaluated based on how much time has passed since the start of the game, allowing you to freely change maps and game types while the timer is running.",
            },
            {
              src: mcc4,
              alt: "Editor",
              caption:
                "Editor included in case a game update changes weapon times, or to add timers for fan-made maps",
            },
          ]}
        />
      </Section>
      <Section
        eyebrow="Notifications"
        heading="Getting notified when an item spawns"
      >
        <ImageCard
          src={mcc8}
          alt="Notification code"
          caption="Notification system allows great flexibility for adding custom
            events."
        />
        <Prose>
          <p>
            The notification system features a priority-based queue so only one
            text-to-speech notification plays at a time. This also eliminates
            cases where a future notification invalidates a previous
            notification that is still in queue. For example, let's say a
            power-up is 5 seconds from spawning and generates a 5 second warning
            notification, but the notification cannot be played for 5 seconds
            because other notifications are currently playing. When that
            power-up spawns and a spawn notification is generated for that
            power-up, it will replace the 5 second warning notification in the
            queue, eliminating the outdated notification. No one wants to hear a
            5 second notification warning for a power-up that has already
            spawned, only to be followed by the more important spawn
            notification.
          </p>
        </Prose>
      </Section>
    </ProjectLayout>
  );
}
