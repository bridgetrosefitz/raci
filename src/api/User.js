import {API_HOST, AUTH_HEADERS} from './helper.js'

export const index = () => {
  return fetch(`${API_HOST}/users/`, AUTH_HEADERS)
    .then(res => res.json())
}

export const login = ({email, password}) => {
  return fetch(`${API_HOST}/login`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
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

export const signup = ({first_name, last_name, email, password}) => {
  return fetch(`${API_HOST}/signup`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
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

export const profile = () => {
  return fetch(`${API_HOST}/profile`, AUTH_HEADERS)
  .then(res => res.json())
}

  