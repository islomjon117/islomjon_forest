import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import CanWe from '../components/canwe/CanWe'
import Projects from '../components/projects_in/Projects'
import Projects_carusul from '../components/projects_carusel/Projects_carusul'
import Partners from '../components/partners/Partners'
import Contacts from '../components/contacts/Contacts'

const HomePage = () => {
    return (
        <>
            <Header />
            <About />
            <CanWe />
            <Projects />
            <Projects_carusul />
            <Partners />
            <Contacts />
        </>
    )
}

export default HomePage