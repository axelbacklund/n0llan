import React from 'react'

import './hamburger.css'

interface HamburgerProps {
  isOpen: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen }) => (
  <div className={isOpen ? 'hamburger open' : 'hamburger'}>
    <span className="hamburger__top-bun"></span>
    <span className="hamburger__bottom-bun"></span>
  </div>
)

export default Hamburger
