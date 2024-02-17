import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/images/bloglogo.webp"
            alt="lama blog"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>BlogRover</h1>
        </div>
        <p className={styles.desc}>
          Embark on a digital odyssey with our blog, where curiosity meets
          knowledge and inspiration sparks discovery. Explore diverse realms,
          from tech innovations to lifestyle hacks, as we curate engaging
          content to enrich your mind.
        </p>
        <div className={styles.icons}>
          <Image src="/images/facebook.png" alt="" width={18} height={18} />
          <Image src="/images/instagram.png" alt="" width={18} height={18} />
          <Image src="/images/twitter.png" alt="" width={18} height={18} />
          <Image src="/images/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
