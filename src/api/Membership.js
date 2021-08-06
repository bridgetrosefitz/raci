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
  .then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export const destroy = (membershipId) => {
  return fetch(`${API_HOST}/memberships/${membershipId}`, {
    ...AUTH_HEADERS,
    method: 'DELETE',
  })
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}