import { useHistory } from 'react-router';
import CompanyLogo from '../reusable/CompanyLogo/CompanyLogo';
import './Topbar.scss';
import TopbarEnd from './TopbarEnd';
const Topbar = () => {
  const history = useHistory();
  return (
    <div className='topbarContainer'>
      <div className='topbarStartContainer' onClick={() => history.push('/')}>
        <CompanyLogo />
      </div>
      <div className='topbarMiddleContainer'>
        <div>SmartView</div>
        <div onClick={() => history.push('/leads')}>Leads</div>
        <div>Activities</div>
        <div>Tasks</div>
      </div>
      <TopbarEnd />
    </div>
  )
}
export default Topbar;