const BASE_URL = 'https://splitter.cfapps.us10-001.hana.ondemand.com/api/v1';
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





// const currentUser = {
//   fullName: "Arpan Mahato",
//   email: "test@abc.com",
//   phoneNumber: "8797021466",
//   upiId: "text@sbi.com"
// } 

// const connection = {
//   user1Id: '655c40704684586cf4add325',
//   user2Id: '655c40424684586cf4add324'
// }

// const transaction = {
//   "paidBy": "655c3feb4684586cf4add323",
//   "description": "Food",
//   "totalAmount": 100.0,
//   "userTransactionDetails": {
//     "655c3feb4684586cf4add323": {
//       "amount": 50.0,
//     },
//     "655c3feb4684586cf4add324": {
//       "amount": 50.0,
//     }
//   }
// }

// const updatedTransaction = {
//   transactionId: '656386d1e55d7210aaa6b9e6',
//   "paidBy": "655c3feb4684586cf4add323",
//   "description": "Food",
//   "totalAmount": 100.0,
//   "timestamp": '2023-11-26T23:26:33.7805073',
//   "userTransactionDetails": {
//     "655c3feb4684586cf4add323": {
//       "amount": 50.0,
//       "status": 'SETTLED'
//     },
//     "655c3feb4684586cf4add324": {
//       "amount": 50.0,
//       "status": "SETTLED"
//     }
//   }
// }


// updateTransaction(updatedTransaction)

