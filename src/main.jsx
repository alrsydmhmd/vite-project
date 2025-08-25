import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Menu from './components/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Header />
      <About />
      <Navbar />
      <Menu />
      <Contact />
      <Footer />
    </div>
  </StrictMode>,
)
