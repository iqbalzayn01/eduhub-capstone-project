import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import CardEvent from '../../components/User/CardEvent';
import Navbar from '../../components/User/Navbar';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter events based on search term and where isComplate is false
  const filteredEvents = events.filter((event) => {
    return (
      !event.isComplate &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
      <Navbar />
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Event List</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 text-center">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <CardEvent key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventsList;
