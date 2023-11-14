export const Transactions: Transaction[] = [
  {
    
    "transactionId": "6547df352afa48345a2bb992",
    "paidBy": "6547d449b51c515e9e34c728",
    "description": "Food",
    "totalAmount": 100.0,
    "timestamp": "2023-11-06T00:00:13.507",
    "transactionDetails": {
      "6547d449b51c515e9e34c728": {
        "amount": 50.0,
        "status": "SETTLED"
      },
      "6547d49bb51c515e9e34c72a": {
        "amount": 50.0,
        "status": "UNSETTLED"
      }
    }
},
{
"transactionId": "6547e2c34607f04186f74195",
"paidBy": "6547d449b51c515e9e34c728",
"description": "Food",
"totalAmount": 100.0,
"timestamp": "2023-11-06T00:15:23.149",
"transactionDetails": {
"6547d449b51c515e9e34c728": {
  "amount": 50.0,
  "status": "SETTLED" // Changed the status to "SETTLED"
},
"6547d49bb51c515e9e34c72a": {
  "amount": 50.0,
  "status": "SETTLED" // Changed the status to "SETTLED"
}
}
},
{
  "transactionId": "6549179c0025e75eec9a3b63",
  "paidBy": "6547d449b51c515e9e34c728",
  "description": "Food",
  "totalAmount": 100.0,
  "timestamp": "2023-11-06T00:00:13.507",
  "transactionDetails": {
    "6547d449b51c515e9e34c728":{
          "amount": 50.0,
          "status": "SETTLED"
      },
      "6547d49bb51c515e9e34c72a":{
          "amount": 50.0,
          "status": "UNSETTLED"
      }
    }
},
{
  "transactionId": "65491e2b3569110b1088318f",
  "paidBy": "6547d49bb51c515e9e34c72a",
  "description": "Food",
  "totalAmount": 100.0,
  "timestamp": "2023-11-06T22:41:07.56",
  "transactionDetails": {
      "6547d449b51c515e9e34c728": {
          "amount": 50.0,
          "status": "UNSETTLED"
      },
      "6547d49bb51c515e9e34c72a": {
          "amount": 50.0,
          "status": "UNSETTLED"
      }
    }
},
]