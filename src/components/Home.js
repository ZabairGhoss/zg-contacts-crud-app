import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-end my-5'>
                <Link to={"/add"} className='btn btn-outline-dark fw-bold'>Add Contact</Link>
            </div>
            <div className='col-md-6 mx-auto'>
                <h1>Welcome to React Redux Contact App</h1>
            </div>
        </div>

    </div>
  )
}

export default Home