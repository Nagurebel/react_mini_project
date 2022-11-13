import React from 'react'
import web from '../src/Images/meeting.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name='Welcome to Home page' web={web} visit='/service' btnName='Get Started' />
        </>
    )
}

export default Home