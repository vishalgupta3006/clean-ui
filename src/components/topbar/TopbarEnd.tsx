import { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaCog, FaRegUserCircle, FaSignOutAlt, FaUser } from 'react-icons/fa';
import './TopbarEnd.scss';

const TopbarEnd = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className='topbarEndContainer' onMouseOver={() => setIsDropdownOpen(true)} onMouseOut={() => setIsDropdownOpen(false)}>
      <div className='userDiv' >
        <FaRegUserCircle />
        <div className='caretDownIcon'>
          {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>
      <div className={isDropdownOpen?'userOptions active':'userOptions'}>
        <div><FaUser />Hello, <span className='userName'>Vishal Gupta</span></div>
        <div><FaCog />Settings</div>
        <div><FaSignOutAlt/> Logout</div>
      </div>
    </div>
  )
}
export default TopbarEnd;