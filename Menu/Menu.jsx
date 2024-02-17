import React from 'react'
import styles from './Menu.module.css'
import Link from "next/link"
import Image from "next/image"
import MenuPosts from '../MenuPosts/MenuPosts'
import MenuCategories from '../MenuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>"What's trending!!!"</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discover By Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      
      <h2 className={styles.subtitle}>Chosen by the Editor</h2>
      <h1 className={styles.title}>Editors' Choice</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu
