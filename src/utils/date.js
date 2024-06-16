import { Timestamp } from 'firebase/firestore';

const formatDate = (date) => {
  return Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
};

const dateStringToTimestamp = (dateString) => {
  return Timestamp.fromDate(new Date(Date.parse(dateString)));
};

const TimestampToDateString = (timestamp) => {
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export { formatDate, dateStringToTimestamp, TimestampToDateString };
