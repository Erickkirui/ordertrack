import React from 'react'
import '../Styles/Landingpage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='home-buttons'>
      <Link>
        <button className='add-orders'>
          Add Order 
        </button>
      </Link>
        
      <Link to="/orders">
        <button className='view-orders'>
          View  Orders
        </button>
      </Link>

    </div>
  )
}

export default LandingPage