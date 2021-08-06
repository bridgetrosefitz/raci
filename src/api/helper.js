// export const API_HOST = `http://localhost:3001/api/v1`;
export const API_HOST = `https://enigmatic-fortress-89780.herokuapp.com/api/v1`;

export const REQUEST_HEADERS = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export const AUTH_HEADERS = { 
  headers: { 
    ...REQUEST_HEADERS.headers, 
    'Authorization': `Bearer ${localStorage.token}` 
  }
};