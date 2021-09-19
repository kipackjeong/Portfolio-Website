import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
      </Layout>
    </div>
  )
}

export default App
