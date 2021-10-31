export interface StoreType {
  authenticationReducer: {
    isLoggedIn: boolean,
    isLoaded: boolean
  },
  leadsReducer: {
    leadList: any,
    totalLeads: number,
    isLeadListLoading: boolean,
    isErrorInLeadList: boolean
  }
}