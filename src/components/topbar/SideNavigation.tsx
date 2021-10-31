import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './SideNavigation.scss';
const SideNavigation: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='sideNavigation'>
      <div className='menuIcon' onClick={() => setIsMenuVisible(true)}>
        <FaBars />
      </div>
      <div className={isMenuVisible ? 'sideMenuContainer active' : 'sideMenuContainer'}>
        <div className='sideMenuBody' >
          <div className='menuCloseIcon' onClick={() => setIsMenuVisible(false)}><FaTimes /></div>
          <div>SmartView</div>
          <div >Leads</div>
          <div>Activities</div>
          <div>Tasks</div>
        </div>
      </div>
    </div>
  )
}
export default SideNavigation;