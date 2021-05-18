import {API_HOST, AUTH_HEADERS} from './helper'

export const create = (text, projectId) => {
  return fetch(`${API_HOST}/tasks`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify({
      text: text,
      project_id: projectId
    })
  })
  .then(res => res.json())
}