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
                            <div>This is a website where users can create lists of their favorite horror movies and track their progress on their list. Users can sign up with Google, learn where to stream their favorite movies, and bookmark new movies for later. </div>
                            <a href={'https://github.com/brentdolan/spooky-list.git'}>Spooky List</a>
                    </div>
            </div>

            <div className={styles.grid}>
            <img className={styles.image} alt={'Photo of the website Matching Game'} src={'./matchinggame.png'}/>
                    <div>
                            <h2 className={styles.title} >Matching Game</h2>
                            <div>Inspired by the matching game Netlify offers during deployments, this is a memory game where users can attempt to find matching pairs among a deck of emoji cards.</div>
                            <a href={' https://luminous-alpaca-5fb3b7.netlify.app/'}>Matching Game</a>
                    </div>
            </div>

            <div className={styles.grid}>
            <img className={styles.image} alt={'Photo of the website that was made for short film Honeymoon Missouri'} src={'./honeymoon.png'}/>
                    <div>
                            <h2 className={styles.title} >Honeymoon Missouri</h2>
                            <div>This is the official website of the award-winning short film Honeymoon Missouri. In the course of this project, I worked directly with the film’s director to ensure that the website met his requirements.</div>
                            <a href={'https://honeymoonmissourifilm.com/'}>Honeymoon Missouri</a>
                    </div>
            </div>

                <div className={styles.grid}>
                        <img className={styles.image} alt={'Photo of the GitHub repository that holds Spooky List'} src={'./fans.png'}/>
                        <div>
                                <h2 className={styles.title} >Movie Fan Site</h2>
                                <div>This website was made for my Web Design class and the project was to create an HTML based site that was centered around a specific movie genre. This was the last site I made using only HTML and CSS and so it heavily showcases both. </div>
                                <a href={'https://unruffled-feynman-e3267a.netlify.app'}>Movie Fan Site</a>
                        </div>
                </div>

                <div className={styles.grid}>
                        <img className={styles.image} alt={'Photo of the GitHub repository that holds Spooky List'} src={'./tool.png'}/>
                        <div>
                                <h2 className={styles.title} >Brent's Tool Shed</h2>
                                <div>This website was made for my Web Design class and was the goal was to make an HTML site that could move between different pages. I was able to incorporate some basic CSS with this project as well.</div>
                        </div>
                </div>

                <div className={styles.grid}>
                        <img className={styles.image} alt={'Photo of the GitHub repository that holds Spooky List'} src={'./webster.png'}/>
                        <div>
                                <h2 className={styles.title} >Webster Single Page Application</h2>
                                <div>A website made for my Web Scripting class that was supposed to show a basic understanding of HTML on a single page application. This assignment allowed me to explore the structure needed to edit an HTML site. I was able to learn more about maintaining a website during this assignment. </div>
                        </div>
                </div>

        </div>
    )
}
