import React from "react";
import { BiTask } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlinePageview } from "react-icons/md";
import { useHistory } from "react-router";
import './NavigationMenu.scss';
interface Props{
  isMobileVersion?: boolean
}
const NavigationMenu: React.FC<Props> = ({isMobileVersion}) => {
  const history = useHistory();
  return (
    <div className={isMobileVersion?'topbarNavigation mobile':'topbarNavigation'}>
      <div><MdOutlinePageview />SmartView</div>
      <div onClick={() => history.push('/leads')}><HiOutlineUsers />Leads</div>
      <div><FiActivity />Activities</div>
      <div><BiTask />Tasks</div>
    </div>
  )
}
export default NavigationMenu;