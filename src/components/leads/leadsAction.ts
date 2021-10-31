export const leadsActions = {
  LEAD_LIST_LOADING: 'leadListLoading',
  LEAD_LIST_FETCHED: 'leadListFetched',
  LEAD_LIST_ERROR: 'leadListError'
}
export const leadListLoading = () => {
  return {
    type: leadsActions.LEAD_LIST_LOADING
  }
}
export const leadListFetched = (leadList:any) => {
  return {
    type: leadsActions.LEAD_LIST_FETCHED,
    leadList
  }
}
export const leadListError = () => {
  return {
    type: leadsActions.LEAD_LIST_ERROR
  }
}