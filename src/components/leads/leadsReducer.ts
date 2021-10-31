import { leadsActions } from "./leadsAction";
const initialState = {
  leadList: [],
  totalLeads: 0,
  isLeadListLoading: false,
  isErrorInLeadList: false
}
const leadsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case leadsActions.LEAD_LIST_LOADING:
      return{
        ...state,
        isLeadListLoading: true
    }
    case leadsActions.LEAD_LIST_FETCHED:
      return{
        ...state,
        isLeadListLoading: false,
        totalLeads: action.leadList.length,
        leadList: action.leadList
    }
    case leadsActions.LEAD_LIST_ERROR:
      return{
        ...state,
        isErrorInLeadList: true,
        isLeadListLoading: false
      }
    default:
      return state;
  }
};

export default leadsReducer;