import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MenuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/images/robots.webp" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.robots}`}>
              A.I.
            </span>
            <h3 className={styles.postTitle}>A.I. is much superior than Nerds.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Elon Musk</span>
              <span className={styles.date}> - 31.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/images/finance.webp" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.finance}`}>
              Wealth
            </span>
            <h3 className={styles.postTitle}>Navigating Wealth's Financial Frontier.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ratan Tata</span>
              <span className={styles.date}> - 31.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/images/lifestyle.webp" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.lifestyle}`}>
              Lifestyle
            </span>
            <h3 className={styles.postTitle}>Living with Style Daily</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Elon Musk</span>
              <span className={styles.date}> - 31.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/images/business.webp" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.business}`}>
              Business
            </span>
            <h3 className={styles.postTitle}>Profitable Insights, Strategic Growth.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Peyush Bansal</span>
              <span className={styles.date}> - 31.12.2023</span>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default MenuPosts;
