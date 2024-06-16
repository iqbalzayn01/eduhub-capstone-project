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

export { formatDate, dateStringToTimestamp };
