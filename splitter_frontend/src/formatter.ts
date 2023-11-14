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