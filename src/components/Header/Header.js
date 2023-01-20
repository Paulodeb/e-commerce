import React from 'react'
import Download from './Download'

import './Header.css'
import Navbar from './Navbar'
import Search from './Search'
import Signup from './Signup'

const Header = () => {
  return (
    <>  
        <div className="header">  
            
        <Navbar/>
        <Search />
        <Download/>
        <Signup />
            
         </div>
    </>
  )
}

export default Header