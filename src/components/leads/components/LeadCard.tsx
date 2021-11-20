import React from "react";
import './LeadCard.scss';
import { isDesktop } from 'react-device-detect';
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";
import { elapsedDaysCalculator } from "../../../utils/timeCalculations";
interface Props {
  _id: string,
  FirstName: string,
  LastName: string,
  PhoneNumber: number,
  EmailAddress: string,
  CreatedOn: Date,
  ModifiedOn: Date,
  LeadStage: string
}
const LeadCard: React.FC<Props> = (props) => {
  const {
    FirstName,
    LastName,
    PhoneNumber,
    EmailAddress,
    CreatedOn,
    ModifiedOn,
    LeadStage
  } = props;
  const timeSinceCreation = elapsedDaysCalculator(new Date(CreatedOn));
  const timeSinceModification = elapsedDaysCalculator(new Date(ModifiedOn));
  return (
    <div className={isDesktop ? 'leadCardContainer desktopVersion' : 'leadCardContainer'}>
      <div className='leadCarLeftSide'>
      <img src={`https://avatars.dicebear.com/api/initials/:${props.FirstName} ${props.LastName}.svg`}
        className='leadAvatar'
        alt='lead avatar'
      />
      <div className='leadStage'>{LeadStage}</div>
      </div>
      <div className='leadDataContainer'>
        <div><FaIdBadge /> {FirstName} {LastName}</div>
        <div><FaPhone />{PhoneNumber}</div>
        <div><FaEnvelope /> {EmailAddress}</div>
        <div className='leadAgeContainer'>
          <div>Added {timeSinceCreation} d ago</div>
          <div>Modified {timeSinceModification} d ago</div>
        </div>
      </div>
    </div>
  )
}
export default LeadCard