import React, { useState } from 'react'


const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")

    } else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
}

  return (
    <div className=''>
        <div className='menu'>
            <h1>Shopio</h1>
            <div className='burger-menu' onClick={updateMenu}>
            <span className={burger_class}></span>
            <span className={burger_class}></span>
            <span className={burger_class}></span>
            </div>

            <div className={menu_class}>
              <div className='content'>
                <div className='menu-items'></div>
              </div>
            </div>
        </div>
        
        

    </div>
  )
}

export default Navbar