
function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


console.log(getCurrentDateTime());  // Output: e.g., "2024-09-07 15:45:30"




2. 
function calculateDaysBetweenDates(date1, date2) {

  const time1 = new Date(date1).getTime();
  const time2 = new Date(date2).getTime();

  const diffTime = Math.abs(time2 - time1);

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

const date1 = '2024-09-01';
const date2 = '2024-09-07';
console.log(calculateDaysBetweenDates(date1, date2));  // Output: 6




3. 

function getDayOfWeek(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const givenDate = new Date(date);
  

  const dayIndex = givenDate.getDay();
  return daysOfWeek[dayIndex];
}


const date = '2024-09-07';
console.log(getDayOfWeek(date)); 