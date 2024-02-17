import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from "next/link";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        BlogRover
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        {/* <Link href="/">Login</Link> */}
        <div className={styles.toggle}>
          <ThemeToggle />
        </div>
        <AuthLinks />
      </div>
      {/* <div className={styles.toggle}>
          <ThemeToggle />
      </div> */}
      <div className={styles.social}>
        <Image src="/images/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/images/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/images/twitter.png" alt="twitter" width={24} height={24} />
        <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
      </div>
    </div>
  )
}

export default Navbar
