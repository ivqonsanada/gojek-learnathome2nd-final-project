import React from 'react'
import styles from './RestaurantItem.module.css'
import StarRatings from 'react-star-ratings';

const priceTag = (priceRange) => {
    let price = ""
    for (let i = 0; i < priceRange; i++) price += "$"
    return price
}

const RestaurantItem = ({ data }) => {
    const { cuisines, name, picture, priceRange, rating } = data

    return (
        <div className={styles.card}>
            <img src={picture} alt="" className={styles.cardImage} />
            <div className={styles.cardBody}>
                <div className={styles.cardBodyLeftSide}>
                    <div className={styles.cardName}>
                        <span className={styles.ellipsies}>{name}</span>
                    </div>
                    <div className={styles.cardCuisines}>
                        <span className={styles.ellipsies}>{cuisines}</span>
                    </div>
                </div>
                <div className={styles.cardBodyRightSide}>
                    <div className={styles.cardPriceRange}>
                        <b>{priceTag(priceRange)}</b>
                    </div>
                    <div className={styles.cardRating}>
                        <StarRatings
                            rating={Number(rating)}
                            starDimension="16px"
                            starRatedColor="red"
                            starSpacing="0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default RestaurantItem;