import React from 'react'
import styles from './NavBar.module.scss'

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.name}>Brent Dolan</h1>
        <a href={'mailto:brentsdolan@gmail.com'}>
            <button>Contact Me</button>
        </a>

    </div>
  )
}
