import React from 'react'
import styles from './About.module.scss'

export const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1>About Me!</h1>
            <div>What I Know -- Typescript, React, NextJS, HTML, CSS</div>
            <br/>
            <div>What I Use -- Macbook Pro, MX Master Keys, MX Mouse</div>
            <br/>
            <br/>
            <div>Favorite Show -- One Piece</div>
            <br/>
            <div>Favorite Sports Teams -- Lakers, AZ Cardinals, STL Cardinals, Blues, City FC</div>
            <br/>
            <div>Favorite Place to Eat -- China 1 (Twin Oaks, MO)</div>
            <br/>
            <div>Favorite Movies -- Dark Knight, Space Jam, LaLa Land, Django Unchained, Scott Pilgrim v.s. the World</div>
                <br/>
                <br/>
        </div>

    )
}
