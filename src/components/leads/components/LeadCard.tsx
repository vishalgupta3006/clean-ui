import React from "react";
import './LeadCard.scss';
interface Props{
  _id: string,
  FirstName: string,
  LastName: string,
  PhoneNumber: number,
  EmailAddress: string
}
const LeadCard: React.FC<Props> = (props) => {

  return(
    <div className='leadCardContainer'>
      {props.FirstName}{props.LastName}{props.PhoneNumber}{props.EmailAddress}
    </div>
  )
}
export default LeadCard