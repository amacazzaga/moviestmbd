import React from 'react'

const MovieItem = ({title,overview}) => {
  return (
    <div>
    <h2>{title}</h2>
   <p>{overview}</p>
    </div>
  )
}

export default MovieItem