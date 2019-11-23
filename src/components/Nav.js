import React, { useState, useEffect } from 'react';

import './styles/Nav.scss';

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return(
    <nav className="navbar">
      <div className="navbar__title">
        <span className="navbar__title--firstname">M</span>
        <span className="navbar__title--lastname">R</span>
      </div>

      {/*  Desktop menu */}
      <ol className="navbar__list">
        <li className={ scroll >= 0 && scroll < 875 ? "navbar__item active" : "navbar__item"}>About</li>
        <li className={ scroll >= 1750 && scroll < 2625 ? "navbar__item active" : "navbar__item"}>Portfolio</li>
        <li className={ scroll >= 2625 ? "navbar__item active" : "navbar__item"}>Contact</li>
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
  );
};

export default Nav;