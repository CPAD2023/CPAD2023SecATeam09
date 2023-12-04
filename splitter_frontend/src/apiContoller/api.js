// const BASE_URL = '<URL>/api/v1';
const LOCAL_BASE_URL = 'http://localhost:8080/api/v1'


export const signup = async user => {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  console.log(response);
  return response;
}

export const login = async userCreds => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userCreds)
  })
  console.log(response);
  return response;
}

export const searchUser = async searchQuery => {
  const response = await fetch(`${BASE_URL}/users/search?q=${searchQuery}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  return response;
}

export const sendConnectionRequest = async connection => {
  const response = await fetch(`${BASE_URL}/connections`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(connection)
  })
  return response;
}

export const updateConnection = async (connectionId, status) => {
  const response = await fetch(`${BASE_URL}/connections/${connectionId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({status})
  })
  return response;
}


export const getUserConnections = async userId => {
  const response = await fetch(`${BASE_URL}/users/${userId}/connections`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  return response;
}

export const createTransaction = async transaction => {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction)
  })
  return response;
}
export const updateTransaction = async transaction => {
  const response = await fetch(`${LOCAL_BASE_URL}/transactions/${transaction.transactionId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction)
  })
  console.log(await response.json());
  return response;
}

export const getUserTransactions = async userId => {
  const response = await fetch(`${BASE_URL}/users/${userId}/transactions`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  return response;
}


export const getTransactionUsers = async userIdList => {
  const response = await fetch(`${BASE_URL}/users/transactionUsers`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userIdList)
  })
  return response;
}
