const baseUrl = "http://localhost:3001"

const optionsBuilder = (method, payload, headers = {}) => {
  return {
    method,
    credentials: 'include',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    },
  }
}

const parseJson = resp => resp.json()

export default class API {
  
  static login = (userInfo) => {
    return fetch(baseUrl + '/login', optionsBuilder('POST', userInfo))
    .then( parseJson )
  }

  static signup = (newUserInfo) => {
    return fetch(baseUrl + '/register', optionsBuilder('POST', newUserInfo))
    .then( parseJson )
  }

  static validate = () => {
    return fetch(baseUrl + '/validate', optionsBuilder('GET', undefined))
    .then( parseJson )
  }
}