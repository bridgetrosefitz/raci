import {API_HOST, AUTH_HEADERS} from './helper.js'


export const create = (userId, taskId) => {

  // Example object destructuring. 
  // If I pass an object {user_id: X, task_id: Y} as an argument when this function is called, 
  // I can put {user_id, task_id} in the parameters here, and I will end up with 
  // two variables with those key names + values already assigned
  // const {user_id, task_id} = body 

  return fetch(`${API_HOST}/flags`, {
    ...AUTH_HEADERS,
    method: 'POST',
    body: JSON.stringify({user_id: userId, task_id: taskId})
  })
}

export const destroy = (flagId) => {
  return fetch(`${API_HOST}/flags/${flagId}`, {
    ...AUTH_HEADERS,
    method: 'DELETE'
  })
}
