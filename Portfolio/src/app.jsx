import React from 'react'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Skills from './skills/skills.jsx'
import Services from './services/services.jsx'
import './assets/app.css'

export default function App(){
    return(
        <div className='app'>
            <Home />
            <About />
            <Skills />
            <Services />
        </div>
    )
}