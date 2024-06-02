import React from 'react'
import Projects_show from '../components/projects_show/Projects_show'
import Contacts from '../components/contacts/Contacts'
import Footer from '../components/footer/Footer'
import Partners from '../components/partners/Partners'
import Projects_carusul from '../components/projects_carusel/Projects_carusul'
import Descriptions from '../components/descriptions/Descriptions'

const ProjectsShow = () => {
    return (
        <>
            <Projects_show />
            <Descriptions />
            <Projects_carusul />
            <Partners />
            <Contacts />
        </>
    )
}

export default ProjectsShow