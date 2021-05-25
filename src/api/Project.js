import {API_HOST, AUTH_HEADERS} from './helper.js'

export const index = () => {
  const fetchPromise = fetch(`${API_HOST}/projects`, AUTH_HEADERS)
  const parsedFetchPromise = fetchPromise.then(res => res.json())
  return parsedFetchPromise;
}

export const show = (projectId) => {
  return fetch(`${API_HOST}/projects/${projectId}`, AUTH_HEADERS).then(res => res.json());
}

export const create = (body) => {
  return fetch(`${API_HOST}/projects`, {
    ...AUTH_HEADERS, 
    method: 'POST',
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const destroy = (projectId) => {
  return fetch(`${API_HOST}/projects/${projectId}`, {
    method: 'DELETE',
    ...AUTH_HEADERS
  })
}

export const update = (projectId, projectName, projectStartDate) => {
  return fetch(`${API_HOST}/projects/${projectId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: projectName,
      // start_date: projectStartDate
    }),
    ...AUTH_HEADERS
  }).then(res => res.json())
}

// export const AUTH_HEADERS = 
// {
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.token}`
//   }
// };
