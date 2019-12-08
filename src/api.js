

export const addTodo = async (data) => {
  const URL = "https://78tw5n1d1j.execute-api.us-east-1.amazonaws.com/dev/"
  
  let result = await _apiCall(URL, data)
  if (result.code === 201) return result.data
}


const _apiCall = async (URL ='', data ={}) => {
  const result = await fetch(URL,{
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })

  return await result.json()
}