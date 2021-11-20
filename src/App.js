import React, { useRef } from 'react'

import Layout from './components/Layout/Layout'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'

import styles from './App.module.css'
function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <Nav></Nav>
        <main className="main">
          <Header />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </Layout>
    </div>
  )
}

export default App
