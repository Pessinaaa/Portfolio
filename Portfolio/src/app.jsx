import React from 'react'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Skills from './skills/skills.jsx'
import Services from './services/services.jsx'
import Portfolio from './portfolio/portfolio.jsx'
import Contato from './contact/contact.jsx'
import Footer from './footer/footer.jsx'
import './assets/app.css'

export default function App(){
    return(
        <div className='app'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Contato />
            <Footer />
        </div>
    )
}