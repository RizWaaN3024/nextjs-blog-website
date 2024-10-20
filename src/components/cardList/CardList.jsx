import React from 'react'
import Pagination from '../pagination/Pagination'
import styles from "./cardList.module.css"
import Card from '../card/Card'

const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json();
}

const CardList = async ({ page, cat }) => {

    const { posts, count } = await getData(page, cat);

    const POSTS_PER_PAGE = 2;

    const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
    const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList
