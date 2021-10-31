import React from 'react';
import './CompanyLogo.scss';
interface Props{
  onClick?: any
}
const CompanyLogo:React.FC<Props> = (props) => {
  return (
    <span className='companyLogo' onClick = {props.onClick && props.onClick}>
      Clean
    </span>
  )
}
export default CompanyLogo;