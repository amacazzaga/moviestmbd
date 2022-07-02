import React from 'react'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
   <button className='d-none d-md-block'>logo</button>
   </Link>
  )
}

export default Logo