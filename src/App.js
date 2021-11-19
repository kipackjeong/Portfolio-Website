import React, { Suspense } from 'react'

import Layout from './components/Layout/Layout'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import styles from './App.module.css'

const Work = React.lazy(() => import('./components/Work/Work'))

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <Nav></Nav>
        <main className="main">
          <Header />
          <About />
          <Skills />
          <Suspense fallback={<div>loading</div>}>
            <Work />
          </Suspense>

          <Contact />
        </main>
      </Layout>
    </div>
  )
}

export default App
