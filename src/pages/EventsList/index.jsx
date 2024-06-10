import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import CardEvent from '../../components/CardEvent';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        const event = { id: doc.id, ...doc.data() };
        eventsArray.push(event);
      });
      setEvents(eventsArray);
      setLoading(false);
    } catch (e) {
      setError('Error getting events: ' + e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Event List</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event) => (
          <CardEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;

// import { useState, useEffect } from 'react';
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../utils/firebase';
// import { Link } from 'react-router-dom';

// const EventsList = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getAllEvents = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'events'));
//       const eventsArray = [];
//       querySnapshot.forEach((doc) => {
//         const event = { id: doc.id, ...doc.data() };
//         eventsArray.push(event);
//       });
//       setEvents(eventsArray);
//       setLoading(false);
//     } catch (e) {
//       setError('Error getting events: ' + e.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Event List</h1>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <h2>{event.title}</h2>
//             <p>{event.description}</p>
//             <p>
//               <strong>Date:</strong>{' '}
//               {new Date(event.date.seconds * 1000).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>Time:</strong> {event.time_start} - {event.time_end}
//             </p>
//             <p>
//               <strong>Location:</strong> {event.location}
//             </p>
//             <Link to={`/event/${event.id}`}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                 Detail
//               </button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventsList;
