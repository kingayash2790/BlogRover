import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/sports.webp" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <div className={styles.date}>25.12.2023  -- </div>
          <div className={styles.category}> SPORTS</div>
        </div>
        <Link href="/" className={styles.title}>
          <h1>Game On: Navigating the World of Sports</h1>
        </Link>
        <p className={styles.desc}>
          Showcasing from the Thrilling Moments to Behind-the-Scenes
          Stories. Dive into the adrenaline-fueled realm of our sports blog,
          where every post is a front-row seat to the exhilarating world of
          athletics. From the thrill of victory to the heartbreak of defeat, we
          explore the dynamic landscapes of various sports, bringing you closer
          to the action and the stories that unfold both on and off the
          field.....
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
