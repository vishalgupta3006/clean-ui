import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../topbar/Topbar";
import { leadListError, leadListFetched, leadListLoading } from "./leadsAction";
import { StoreType } from '../../store/types';

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
      axios.get('http://localhost:8080/api/data/lead/all', requestOptions)
        .then(res => {
          dispath(leadListFetched(res.data));
        })
        .catch(err => {
          dispath(leadListError());
        })
    }
    fetchLeads();
  }, [dispath]);
  return (
    <div>
      <Topbar />
      {
        leadList && leadList.map((lead: any) => {
          return <div key={lead._id}>{lead.FirstName}</div>
        })
      }
    </div>
  )
}

export default Leads;