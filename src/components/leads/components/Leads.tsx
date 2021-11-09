import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../topbar/Topbar";
import { leadListError, leadListFetched, leadListLoading } from "../leadsAction";
import { StoreType } from '../../../store/types';
import LeadCard from "./LeadCard";
import './Leads.scss';

const Leads: React.FC = () => {
  const dispath = useDispatch();
  const { leadList } = useSelector((state: StoreType) => state.leadsReducer)
  useEffect(() => {
    const fetchLeads = () => {
      dispath(leadListLoading());
      const requestOptions = {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      }
      axios.get('https://clean-crm.herokuapp.com/api/data/lead/all', requestOptions)
        .then(res => {
          dispath(leadListFetched(res.data));
        })
        .catch(err => {
          dispath(leadListError());
          console.log(err);
        })
    }
    fetchLeads();
  }, [dispath]);
  return (
    <div>
      <Topbar />
      <div className='leadsPageContainer mobile'>
        <div className='leadListContainer'>
          {
            leadList && leadList.map((lead: any) => {
              return <LeadCard key={lead._id} {...lead} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Leads;