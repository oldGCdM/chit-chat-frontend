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

export default class API {

  // static publicFetch = (url, options) => {
  //   return fetch(url, options)
  //   .then( resp => resp.json() )
  // }

  // static privateFetch = (url, options) => {
  //   options['headers']['Authorization'] = localStorage.getItem('token')

  //   return fetch(url, options)
  //   .then( resp => resp.json() )
  // }

  // static validate = () => {
  //   return this.privateFetch(baseUrl + "/validate", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  // }
  
  static login = (userInfo) => {
    const url = baseUrl + '/login'
    const options = optionsBuilder('POST', userInfo)

    return fetch(url, options)
    .then( resp => resp.json() )
  }

  static signup = (newUserInfo) => {
    const url = baseUrl + '/register'
    const options = optionsBuilder('POST', newUserInfo)

    return fetch(url, options)
    .then( resp => resp.json() )
  }
}