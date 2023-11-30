import {styles as appStyles} from './styles'

export const getTime = (sDate: string) => {
  let date: Date = new Date(sDate);
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();

  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  let amOrPm: string = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Add leading zeros to minutes if necessary
  const minutesStr: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${month}/${day}/${year} ${hours}:${minutesStr} ${amOrPm}`
}

export const getDate = (sDate: string) => {
  //console.log(sDate);
  
  let date: Date = new Date(sDate);
  //console.log(date.getDate());
  
  return date.getDate();
}

export const getMonth = (sDate: string) => {
  let date: Date = new Date(sDate);
  const aMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return aMonth[date.getMonth()];
}

export const totalAmountPaidForOtherUser = (transactions, paidByUserId, anotherUserId) => {
  const txnTotal = transactions.filter(txn => txn.paidBy === paidByUserId 
                            && txn.userTransactionDetails[paidByUserId]
                            && txn.userTransactionDetails[anotherUserId]
                            && txn.userTransactionDetails[anotherUserId].status === 'UNSETTLED')
        .reduce((partialSum, txn) => partialSum + txn.userTransactionDetails[anotherUserId].amount, 0)
  
  return txnTotal
}

export const getTextColor = (amount=0) => {
  if(amount < 0)   return appStyles.negativeTxt
  else if(amount > 0) return appStyles.positiveTxt
  else return appStyles.settledUpTxt
}
export const getText = (amount=0) => {
  if(amount < 0)   return 'you owe'
  else if(amount > 0) return 'you lent'
  else return 'settled up'
}
