import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vero.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src={"/p1.jpeg"}
                                alt=''
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={"/p1.jpeg"}
                        alt=''
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}></div>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum placeat dicta aut distinctio? Voluptates tempore obcaecati facilis maxime totam 
                        labore ipsum nulla fuga quia rerum, ullam facere voluptate quos asperiores eos nisi
                         necessitatibus. Dignissimos a corrupti incidunt cum fugit vel.
                    </p>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum placeat dicta aut distinctio? Voluptates tempore obcaecati facilis maxime totam 
                        labore ipsum nulla fuga quia rerum, ullam facere voluptate quos asperiores eos nisi
                         necessitatibus. Dignissimos a corrupti incidunt cum fugit vel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
