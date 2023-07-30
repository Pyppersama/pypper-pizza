import React from 'react'
import { Link } from 'react-router-dom';
import BannerImg from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'
    style={{backgroundImage: `url(${BannerImg})`}}
    >
      <div className="headerContainer" >
        <h1>Pypper's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
        <button>
            Order now
        </button>        
        </Link>
      </div>
    </div>
  )
}

export default Home;
