import React from 'react'
import Explore from '../comp/Explore'
import Header from '../comp/Header'
import Slides from '../comp/Slides'

const Home = () => {
    return (
        <div>
            <Header />
            <Slides />
            <Explore title="Explore" />
            <Explore title="Best Daily Sales" />
        </div>
    )
}

export default Home
