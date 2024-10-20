import React from 'react'
import Pagination from '../pagination/Pagination'
import styles from "./cardList.module.css"
import Card from '../card/Card'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json();
}

const CardList = async() => {

    const data = getData();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
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
