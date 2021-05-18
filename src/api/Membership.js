import {API_HOST, AUTH_HEADERS} from './helper'

export const create = (memberId, projectId) => {
  return fetch(`${API_HOST}/memberships`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify({
      user_id: memberId,
      project_id: projectId
    })
  })
  .then(res => res.json())
}