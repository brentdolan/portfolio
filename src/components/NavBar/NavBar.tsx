import React from 'react'
import styles from './NavBar.module.scss'

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <h1>Brantfunk Dolan</h1>
      <button>Contact Me</button>
    </div>
  )
}
