import {API_HOST, AUTH_HEADERS} from './helper.js'

export const create = (userTask) => {
  return fetch(`${API_HOST}/user_tasks`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify(userTask)
  })
}