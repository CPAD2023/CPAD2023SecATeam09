interface User {
  userId: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  upiId: string
};

interface Connection {
  connectionId: string,
  user1: User,
  user2: User,
  status: string
};

interface Transaction {
  transactionId: string;
  paidBy: string;
  description: string;
  totalAmount: number;
  timestamp: string; // Assuming you are receiving a string for timestamp, adjust as needed
  transactionDetails: { [userId: string]: TransactionDetails };
}

interface TransactionDetails {
  amount: number;
  status: string;
}