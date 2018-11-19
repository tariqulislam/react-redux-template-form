export const REQUEST_FETCH_PEOPLE = 'REQUEST_FETCH_PEOPLE'
export const RECEIVE_FETCH_PEOPLE = 'RECEIVE_FETCH_PEOPLE'

export function requestFetchPeople () {
  return {
    type: REQUEST_FETCH_PEOPLE,
    payload: {}
  }
}

export function receiveFetchPeople (data) {
  return {
    type: RECEIVE_FETCH_PEOPLE,
    payload: data
  }
}