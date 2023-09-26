import React from 'react'
import styles from './page.module.css'
import {HeroSection} from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
        <img alt={'Figma test image'} src={'/realFigma.png'}/>
    </main>
  )
}
