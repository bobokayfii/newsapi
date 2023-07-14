import React from 'react'
import FetchData from './FetchData'

const Home = () => {
  return (
    <div>

    <div className='container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center' style={{height:"50vh"}}>
      <h1>News App</h1>
      <h5>THE WEB SITE BUILD WITH NEWS API</h5>
    </div>
    <FetchData/>
    </div>
  )
}

export default Home