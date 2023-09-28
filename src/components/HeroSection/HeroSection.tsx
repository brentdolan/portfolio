import React from 'react'
import styles from './HeroSection.module.scss'

export const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <div className={styles.text}>Hi, my name is</div>
        <div className={styles.headerName}>Brent Dolan</div>
          <div className={styles.text}>Site Currently Under Construction</div>
      </div>
      <img className={styles.image} alt={'Brent Dolan with Pluto mascot at Disney'} src={'/pluto.jpeg'}/>
    </div>
  )
}
