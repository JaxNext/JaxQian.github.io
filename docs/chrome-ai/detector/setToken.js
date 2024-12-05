export function setLangDetectorToken () {
  let token = 'AlvnQOgXEaDkm1KTvW3ZasTnP5EAdLCnhbhfTzwAE2D5V1t2jyJ3+jjnQWgXOtgO40FeJ2rt7V69DIsxHW/7uA4AAABXeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiTGFuZ3VhZ2VEZXRlY3Rpb25BUEkiLCJleHBpcnkiOjE3NDk1OTk5OTl9'
  const origin = window.location.origin
  if (origin.includes('https://rejax.fun')) {
    token = 'AgQETDBFy3jRaJQ7O+r2pMEr+3Ra8s999kVtREwou6A6FjmP9ZT+7+yeJBwlg8YOAOAr9WEiOHl56l8tcEXiygAAAABqeyJvcmlnaW4iOiJodHRwczovL3JlamF4LmZ1bjo0NDMiLCJmZWF0dXJlIjoiTGFuZ3VhZ2VEZXRlY3Rpb25BUEkiLCJleHBpcnkiOjE3NDk1OTk5OTksImlzU3ViZG9tYWluIjp0cnVlfQ=='
  }
  const meta = document.createElement('meta')
  meta.httpEquiv = 'origin-trial'
  meta.content = token
  document.head.appendChild(meta)
}