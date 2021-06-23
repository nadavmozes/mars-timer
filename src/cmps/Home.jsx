import React from 'react'
import Hero from '../assets/hero.png'
import Rocket from '../assets/rocket.png'

const Home = () => {
    return (
        <div className="home">
            <img src={Rocket} alt="rocket" className="rocket" />
            <div className="main-content">
                <div>
                    <h1>
                        Get your seat to Mars!
                    </h1>
                    <p>
                        Earth is doomed, but don't worry! The last rocket is leaving for marrs soon, so hurry up and book your flight!
                    </p>
                </div>
                <div>
                    <img src={Hero} alt="hero" className="hero" />
                </div>
            </div>
        </div>
    )
}
export default Home