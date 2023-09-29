import React from 'react'
import styles from './Projects.module.scss'

export const Projects: React.FC = () => {
    return (
        <div className={styles.projects}>
            <h1>Projects</h1>

            <div className={styles.grid}>
            <img className={styles.image} alt={'Photo of the GitHub repository that holds Spooky List'} src={'./spookylist.png'}/>
                    <div>
                            <h2 className={styles.title} >Spooky List</h2>
                            <div>This is a website where users can create lists of their favorite horror movies and track their progress as they make their way through the list. Users can sign up with Google, learn where to stream their favorite movies and discover/bookmark new movies for later. This website will be launched soon and the Figma for the website is pictured</div>
                            <a href={'https://github.com/brentdolan/spooky-list.git'}>Spooky List</a>
                    </div>
            </div>

            <div className={styles.grid}>
            <img className={styles.image} alt={'Photo of the website Matching Game'} src={'./matchinggame.png'}/>
                    <div>
                            <h2 className={styles.title} >Matching Game</h2>
                            <div>Inspired by the matching game Netlify offers during deployments, this is a memory game where users can attempt to find matching pairs among a deck of emoji cards</div>
                            <a href={' https://luminous-alpaca-5fb3b7.netlify.app/'}>Matching Game</a>
                    </div>
            </div>

            <div className={styles.grid}>
            <img className={styles.image} alt={'Photo of the website that was made for short film Honeymoon Missouri'} src={'./honeymoon.png'}/>
                    <div>
                            <h2 className={styles.title} >Honeymoon Missouri</h2>
                            <div>This is the official website of the award-winning short film Honeymoon Missouri. In the course of this project, I worked directly with the film’s director to ensure that the website met his requirements while aligning the design with the film’s aesthetic.</div>
                            <a href={'https://honeymoonmissourifilm.com/'}>Honeymoon Missouri</a>
                    </div>
            </div>
        </div>
    )
}
