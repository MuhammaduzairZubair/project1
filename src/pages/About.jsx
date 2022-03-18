import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

const About = ( {match} ) => {
  const {service} = useParams();
  return (
      <div>
          <Navbar />
        <h1>Hello { service } About</h1>   
      </div>
  )
}

export default About