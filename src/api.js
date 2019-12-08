

export const addTodo = async (data) => {
  const URL = "https://78tw5n1d1j.execute-api.us-east-1.amazonaws.com/dev/"
  
  let result = await _apiCall(URL,'POST', data)
  if (result.code === 201) return result.data
}


export const populateData = async () => {
  const URL = "https://78tw5n1d1j.execute-api.us-east-1.amazonaws.com/dev/"
  
  let result = await _apiCall(URL,'GET')
  if (result.code === 200) return result.data
}

const _apiCall = async (url ='',method='POST', data ={}) => {
  
  let param = {
    method: method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  }
  
  if (method !== 'GET') param.body = JSON.stringify(data)
  
  const result = await fetch(url, param)

  return await result.json()
}