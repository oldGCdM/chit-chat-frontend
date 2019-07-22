const baseUrl = "http://localhost:3001"

export default class API {

  static publicFetch = (url, options) => {
    return fetch(url, options)
    .then( resp => resp.json() )
  }

  static privateFetch = (url, options) => {
    options['headers']['Authorization'] = localStorage.getItem('token')

    return fetch(url, options)
    .then( resp => resp.json() )
  }

  static validate = () => {
    return this.privateFetch(baseUrl + "/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}