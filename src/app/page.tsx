import React from 'react'
import styles from './page.module.css'
import {HeroSection} from "@/components/HeroSection/HeroSection";
import {About} from "@/components/About/About";
import {Projects} from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSection/>
        <Projects/>
        <About/>
    </main>
  )
}
