/**
 * Make Ajax calls using .fetch()
 *
 * A polyfill is included for older Browsers via FX
 * Do not set headers, as they change simple GET requests to preflights
 *
 * @param  string url      Ajax url
 * @param  object options  Ajax options
 * @return promise         Allows to call promise methods on the returned obj
 */

export default function (url, options) {
  // Check status
  const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  // Get json
  const json = (response) => {
    return response.json()
  }
  // Fetch
  return fetch(url, options)
    .then(status)
    .then(json)
}
