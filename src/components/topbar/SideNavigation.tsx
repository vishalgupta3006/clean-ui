import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CompanyLogo from "../reusable/CompanyLogo/CompanyLogo";
import './SideNavigation.scss';
import NavigationMenu from "./NavigationMenu";
const SideNavigation: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='sideNavigation'>
      <div className='menuIcon' onClick={() => setIsMenuVisible(true)}>
        <FaBars />
      </div>
      <div className={isMenuVisible ? 'sideMenuContainer active' : 'sideMenuContainer'}>
        <div className='sideMenuBody' >
          <div className='sideMenuHeaderSection'>
            <CompanyLogo/>
            <div className='menuCloseIcon' onClick={() => setIsMenuVisible(false)}><FaTimes /></div>
          </div>
          <NavigationMenu isMobileVersion />
        </div>
      </div>
    </div>
  )
}
export default SideNavigation;