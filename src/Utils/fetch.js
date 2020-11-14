const apiUrl = "https://database-7e0f7.firebaseio.com"

const GET = () => fetch(`${apiUrl}/.json`)

const POST = (body) =>
  fetch(`${apiUrl}/.json`, {
    body: JSON.stringify(body),
    method: "POST",
  })

const DELETE = (id) =>
  fetch(`${apiUrl}/${id}/.json`, {
    method: "DELETE",
  })

const PATCH = (id, body) =>
  fetch(`${apiUrl}/${id}/.json`, {
    body: JSON.stringify(body),
    method: "PATCH",
  })

export { GET, POST, DELETE, PATCH }
