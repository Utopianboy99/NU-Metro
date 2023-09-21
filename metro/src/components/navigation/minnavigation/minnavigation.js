import React from "react"
import '../minnavigation/minnavigation.css'

function Minnavigation() {
    return (
        <div>
            <div className='background'>
                <div className='sub-logo'>
                    <img src='./nu_metro_logo_orange.png' alt='Logo' />
                </div>
                <div className='right'>
                    <a href='https://numetro.co.za/#'> <ins>Home</ins> </a>
                    <a href='https://numetro.co.za/#'>Now Booking</a>
                    <a href='https://numetro.co.za/#'>Showing Soon</a>
                    <a href='https://numetro.co.za/#'>Cineplexes</a>
                    <a href='https://numetro.co.za/#'>Prices</a>
                    <a href='https://numetro.co.za/#'>About</a>
                </div>
            </div>
        </div>
    )
}
export default Minnavigation;
