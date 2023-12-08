import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HamburgerMenu = ({setToggle,toggle}) => {
  return (
    <div className="absolute top-7 right-8 md:hidden">
        <button onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon
            icon={!toggle ? faBars : faClose}
            className="text-secondary"
            size="3x"
          />
        </button>
      </div>
  )
}

export default HamburgerMenu