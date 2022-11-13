import React from 'react'
import Common from './Common';
import web from '../src/Images/colleagues.jpg';

const About = () => {
    return (
        <>
            <Common name='Welcome to About page' web={web} visit='/contact' btnName='Contact Now' />
        </>
    )
}

export default About