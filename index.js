
// API CALLS LIST

const BASE_URL = "http://localhost:3000";
const todoPath = "todos";

const getDataTodos = async () => {
  const todosUrlPath = `${BASE_URL}/${todoPath}`;
  return fetch(todosUrlPath).then(res => {
    // console.log("data",res)
    return res.json()
  }).then (data => {
    console.log("data", data)
  })
}

console.log("getDataTodos=",getDataTodos())
console.log("test")
