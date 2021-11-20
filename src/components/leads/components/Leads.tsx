import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../topbar/Topbar";
import { leadListError, leadListFetched, leadListLoading } from "../leadsAction";
import { StoreType } from '../../../store/types';
import LeadCard from "./LeadCard";
import { isDesktop } from "react-device-detect";
import './Leads.scss';
import { axiosApi } from "../../../utils/axiosAPI";
import apiData from "../../../api/apiData";

const Leads: React.FC = () => {
  const dispath = useDispatch();
  const { leadList } = useSelector((state: StoreType) => state.leadsReducer)
  useEffect(() => {
    const fetchLeads = () => {
      dispath(leadListLoading());
      axiosApi(apiData.allLeads)
        .then(res => dispath(leadListFetched(res.data)))
        .catch(err => dispath(leadListError()));
    }
    fetchLeads();
  }, [dispath]);
  return (
    <div>
      <Topbar />
      <div className={isDesktop ? 'leadsPageContainer' : 'leadsPageContainer mobile'}>
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