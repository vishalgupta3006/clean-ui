import React from "react";
import './LeadCard.scss';

interface Props {
  _id: string,
  FirstName: string,
  LastName: string,
  PhoneNumber: number,
  EmailAddress: string
}
const LeadCard: React.FC<Props> = (props) => {
  const {
    FirstName,
    LastName,
    PhoneNumber,
    EmailAddress
  } = props;
  return (
    <div className='leadCardContainer'>
      <img src={`https://avatars.dicebear.com/api/initials/:${props.FirstName} ${props.LastName}.svg`}
        className='leadAvatar'
        alt='lead avatar'
      />

      <div className='leadDataContainer'>
        <div>{FirstName} {LastName}</div>
        <div>{PhoneNumber}</div>
        <div>{EmailAddress}</div>
      </div>
    </div>
  )
}
export default LeadCard