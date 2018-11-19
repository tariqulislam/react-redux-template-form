import * as Actions from '../actions/people.action'

export const fetchPeoples = () => dispatch => {
  debugger
   dispatch(Actions.requestFetchPeople());
   fetch('https://swapi.co/api/people/')
   .then(response => response.json())
   .then(data => {
     debugger
       dispatch(Actions.receiveFetchPeople(data))
   })
   .catch(exp => console.error(exp))
}