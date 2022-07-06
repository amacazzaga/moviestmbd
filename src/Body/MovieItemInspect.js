import React from 'react'
import { useParams } from "react-router-dom";

const MovieItemInspect = () => {
    const {id}= useParams();
  return (
    <div>{id}</div>
  )
}

export default MovieItemInspect