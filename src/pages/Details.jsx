import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({match}) => {
    const {title,Desc } = useParams();
  return (
    <h1>Hello { title } {Desc} Details</h1>
  )
}

export default Details