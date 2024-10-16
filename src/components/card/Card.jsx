import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="/p1.jpeg"
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto.</h1>
                </Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, atque nostrum reiciendis sunt at iure, odio illum obcaecati optio necessitatibus ex aliquam inventore similique rem. Exercitationem vero aliquam aut sint.</p>
                <Link href="/">Read More</Link>
            </div>
        </div>
    )
}

export default Card
