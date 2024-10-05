export function setFSObserverToken () {
  let token = 'AqUA73xbg9ZveKkFztLrqPtkcCqveMtGlDrHjIi4G9LfwfEi2VhkDEkHeUZ5zCRZSKzflYZQsguhWeGyf0Ja0QUAAABVeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiRmlsZVN5c3RlbU9ic2VydmVyIiwiZXhwaXJ5IjoxNzQ3MTgwNzk5fQ=='
  const origin = window.location.origin
  if (origin.includes('https://rejax.fun')) {
    token = 'Akf6WaDP7bpHzTqUKpuGHFwh+MQrbVM3jDWw7wSQTzBlg4UjFfh1CeOPWoJW7wLnLaRPZS+UKNQHEU/MjuA8RwsAAABoeyJvcmlnaW4iOiJodHRwczovL3JlamF4LmZ1bjo0NDMiLCJmZWF0dXJlIjoiRmlsZVN5c3RlbU9ic2VydmVyIiwiZXhwaXJ5IjoxNzQ3MTgwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0='
  }
  const meta = document.createElement('meta')
  meta.httpEquiv = 'origin-trial'
  meta.content = token
  document.head.appendChild(meta)
}