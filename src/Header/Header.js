import React from 'react'
import ButtonHeader from './ButtonHeader'

const Header = () => {
  return (
   <header>
       <ButtonHeader text ={"Genre"}/>
       <ButtonHeader text ={"Movies"}/>
       <ButtonHeader text ={"On TV"}/>
       <ButtonHeader text ={"Search"}/>
   </header>
  )
}

export default Header