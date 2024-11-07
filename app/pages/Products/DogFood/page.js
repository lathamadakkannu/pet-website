import React from 'react'
import styles from './DogFood.module.scss'
const DogFood = () => {
  return (
    <div className={styles.petsFood}>
<div className={styles.petsFoodContainer}>
    <div className={styles.petsFoodHero}>
        <img src="/image/dogfood.webp" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam repudiandae qui obcaecati, dolor quidem perferendis recusandae. Autem doloribus doloremque ea.</p>
    </div>
    <div className={styles.petsFoodContent}>
        <div className={styles.petsFoodCard}>
            <img src="/image/dogfood-1.webp" alt="" />
            <div className={styles.animalsCardText}>
                <h2>Henlo Chicken </h2>
                <p className={styles.price}>₹2,179</p>
                <p>Henlo Chicken & Vegetable Baked Dry Food for Adult Dogs | 100% human grade ingredients</p>
              </div>
        </div>
        <div className={styles.petsFoodCard}>
            <img src="/image/dogfood2.webp" alt="" />
            <div className={styles.animalsCardText}>
                <h2>Henlo Chicken </h2>
                <p className={styles.price}>₹2,179</p>
                <p>Henlo Chicken & Vegetable Baked Dry Food for Adult Dogs | 100% human grade ingredients</p>
              </div>
        </div>
        <div className={styles.petsFoodCard}>
            <img src="/image/dogfood-3.webp" alt="" />
            <div className={styles.animalsCardText}>
                <h2>Henlo Chicken </h2>
                <p className={styles.price}>₹2,179</p>
                <p>Henlo Chicken & Vegetable Baked Dry Food for Adult Dogs | 100% human grade ingredients</p>
              </div>
        </div>
        <div className={styles.petsFoodCard}>
            <img src="/image/dogfood-4.webp" alt="" />
            <div className={styles.animalsCardText}>
                <h2>Henlo Chicken </h2>
                <p className={styles.price}>₹2,179</p>
                <p>Henlo Chicken & Vegetable Baked Dry Food for Adult Dogs | 100% human grade ingredients</p>
              </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default DogFood