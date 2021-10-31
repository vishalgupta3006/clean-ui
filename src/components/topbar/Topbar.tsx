import { isDesktop } from 'react-device-detect';
import { useHistory } from 'react-router';
import CompanyLogo from '../reusable/CompanyLogo/CompanyLogo';
import SideNavigation from './SideNavigation';
import './Topbar.scss';
import TopbarEnd from './TopbarEnd';
import TopbarNavigation from './TopbarNavigation';
const Topbar = () => {
  const history = useHistory();
  if (isDesktop)
    return (
      <div className='topbarContainer'>
        <CompanyLogo onClick={() => history.push('/')} />
        <TopbarNavigation />
        <TopbarEnd />
      </div>
    )
  else
    return (
      <div className='topbarContainer mobile'>
        <SideNavigation />
        <CompanyLogo onClick={() => history.push('/')} />
        <TopbarEnd />
      </div>
    )
}
export default Topbar;