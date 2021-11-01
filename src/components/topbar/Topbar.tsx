import { isDesktop } from 'react-device-detect';
import CompanyLogo from '../reusable/CompanyLogo/CompanyLogo';
import SideNavigation from './SideNavigation';
import './Topbar.scss';
import TopbarEnd from './TopbarEnd';
import NavigationMenu from './NavigationMenu';
const Topbar = () => {
  if (isDesktop)
    return (
      <div className='topbarContainer'>
        <CompanyLogo />
        <div className='topbarNavigationMenu'><NavigationMenu /></div>
        <TopbarEnd />
      </div>
    )
  else
    return (
      <div className='topbarContainer mobile'>
        <SideNavigation />
        <CompanyLogo />
        <TopbarEnd />
      </div>
    )
}
export default Topbar;