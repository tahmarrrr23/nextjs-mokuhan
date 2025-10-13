import Image from "next/image";
import { Card } from "@/components/ui/card";
import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Next.js Ignition</h1>
      <Image
        src="/top.png"
        alt="Next.js Logo"
        width={500}
        height={500}
        className={styles.logo}
      />

      <Card>
        <h2>About Ignition</h2>
        <p>
          The term "ignition" originates from the Latin word "ignitio," meaning
          "setting on fire." Historically, ignition has been associated with the
          process of initiating combustion, such as in engines or fire-starting
          techniques. In the context of technology, ignition symbolizes the
          starting point or catalyst for action, innovation, or progress.
        </p>
        <p>
          Over time, the concept of ignition has been metaphorically applied to
          various fields, including software development. It represents the
          spark that drives creativity and the foundation for building
          groundbreaking solutions. In modern frameworks like Next.js, ignition
          embodies the idea of kickstarting projects with efficiency and
          purpose.
        </p>
      </Card>
    </div>
  );
};
