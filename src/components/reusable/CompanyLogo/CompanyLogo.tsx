import React from 'react';
import { useHistory } from 'react-router';
import './CompanyLogo.scss';

const CompanyLogo:React.FC = () => {
  const history = useHistory();
  return (
    <span className='companyLogo' onClick={() => history.push('/')} >
      Clean
    </span>
  )
}
export default CompanyLogo;