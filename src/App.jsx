import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Team } from './components/Team/Team'
import { Citation } from './components/Citation/Citation'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="container m-auto">
        <Hero />
        <Skills />
        <Portfolio />
        <Team />
        <Citation />
      </main>
      <Footer />
    </>
  )
}

export default App
