import {API_HOST, AUTH_HEADERS} from './helper.js'

export const index = () => {
  return fetch(`${API_HOST}/users/`, AUTH_HEADERS)
    .then(res => res.json())
}