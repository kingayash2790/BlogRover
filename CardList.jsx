import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../Pagination/Pagination'
import Image from "next/image"
import Card from '../Card/Card'

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({page}) => {

  const data = await getData(page)
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Blogs</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList
