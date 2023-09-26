import React from 'react'
import styles from './NavBar.module.scss'

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <h1>Brent Dolan</h1>
      <button>Contact Me</button>
    </div>
  )
}
