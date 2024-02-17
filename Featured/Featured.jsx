import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        "Embark on a Journey of Insights and Inspiration – Welcome to <b><i>BlogRover</i></b>, where every page tells a story waiting to be explored."
        <h3 className={styles.author}>
          - Ayash Kumar Behera
        </h3>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/images/coding.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unlock the Digital Realm: Where Lines of Code Transform Ideas into Innovation!</h1>
          <p className={styles.postDesc}>
          Welcome to the digital frontier where logic meets creativity, and lines of code weave the tapestry of innovation. In this coding blog, we embark on a journey through the intricate world of programming, unraveling the mysteries of algorithms, debugging the complexities, and embracing the elegance of efficient code. Whether you're a seasoned developer seeking new perspectives or a coding enthusiast taking your first steps, join us as we explore the ever-evolving landscape of programming, sharing insights, tips, and inspiring stories that resonate with the heartbeat of the tech community. Let's dive deep into the binary sea and surf the waves of innovation together. Welcome to the coding adventure!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
