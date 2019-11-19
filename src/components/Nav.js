import React, { useState } from 'react';

import './styles/Nav.scss';

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return(
    <nav className="navbar">
      <div className="navbar__title">
        Mathieu <span>Rios</span>
      </div>

      {/*  Desktop menu */}
      <ol className="navbar__list">
        <li className="navbar__item">Item 1</li>
        <li className="navbar__item">Item 2</li>
        <li className="navbar__item">Item 3</li>
      </ol>

      {/* Hamburger Menu */}
      <div className="burger__container">
        <div onClick={() => setBurgerActive(!burgerActive)} className={burgerActive ? "burger__bars active" : "burger__bars"}>
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
        </div>
        <div className={burgerActive ? "burger__items active" : "burger__items"}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </div> 
      </div>
    </nav>
  )
}

export default Nav;