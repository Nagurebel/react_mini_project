import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className='w-100 bg-light text-center'>
                <footer>@ {year} mini project . All Right Reserved | Term and Conditions</footer>
            </div>
        </>
    )
}

export default Footer