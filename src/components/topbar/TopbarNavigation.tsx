import React from "react";
import { useHistory } from "react-router";
import './TopbarNavigation.scss';

const TopbarNavigation: React.FC = () => {
  const history = useHistory();
  return (
    <div className='topbarNavigation'>
      <div>SmartView</div>
      <div onClick={() => history.push('/leads')}>Leads</div>
      <div>Activities</div>
      <div>Tasks</div>
    </div>
  )
}
export default TopbarNavigation;