import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db, auth } from '../../utils/firebase';

import Title from '../../components/User/Title';
import Content from '../../components/User/Content';
import Navbar from '../../components/User/Navbar';
import Footer from '../../components/User/Footer';

const DetailEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, 'events', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEvent({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('No such document!');
        }
      } catch (e) {
        setError('Error getting document: ' + e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  useEffect(() => {
    const checkIfJoined = async () => {
      const user = auth.currentUser;
      if (user) {
        setCurrentUser(user);
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const joinedEvents = userData.joinedEvents || [];
          const eventJoined = joinedEvents.some((event) => event.id === id);
          setHasJoined(eventJoined);
        }
      }
    };

    checkIfJoined();
  }, [id]);

  const handleJoinEvent = async () => {
    if (!currentUser) {
      console.log('No user logged in');
      return;
    }

    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        joinedEvents: arrayUnion({
          id: id,
          title: event.title,
          isComplate: event.isComplate,
          date: formatDate(event.time_start),
        }),
      });
      console.log('Successfully updated user document with joined event.');
      console.log(`User joined event with id ${id}`);
      setHasJoined(true);
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  const handleCancelJoinEvent = async () => {
    if (!currentUser) {
      console.log('No user logged in');
      return;
    }

    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        joinedEvents: arrayRemove({
          id: id,
          title: event.title,
          isComplate: event.isComplate,
          date: formatDate(event.time_start),
        }),
      });
      console.log('Successfully updated user document to cancel joined event.');
      console.log(`User canceled joining event with id ${id}`);
      setHasJoined(false);
    } catch (error) {
      console.error('Error canceling joined event:', error);
    }
  };

  const formatDateAndTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString();
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
      <Navbar />
      <Title
        title={event.title}
        start={formatDateAndTime(event.reg_start)}
        end={formatDateAndTime(event.reg_end)}
        ButtonClick={hasJoined ? handleCancelJoinEvent : handleJoinEvent}
        hasJoined={hasJoined}
      />

      <Content
        date={formatDate(event.time_start)}
        time={`${formatTime(event.time_start)} - ${formatTime(event.time_end)}`}
        place={event.location}
        start={event.description}
        overview={event.overview}
        netOp={event.opportunities}
        keyFeatures={event.key_features}
      />
      <Footer />
    </div>
  );
};

export default DetailEvent;

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { db, auth } from '../../utils/firebase';

// import Title from '../../components/User/Title';
// import Content from '../../components/User/Content';
// import Navbar from '../../components/User/Navbar';
// import Footer from '../../components/User/Footer';

// const DetailEvent = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchEventAndUser = async () => {
//       try {
//         // Fetch event details
//         const docRef = doc(db, 'events', id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setEvent({ id: docSnap.id, ...docSnap.data() });
//         } else {
//           throw new Error('No such document!');
//         }

//         // Get current user
//         const user = auth.currentUser;
//         if (user) {
//           setCurrentUser(user);
//         }
//       } catch (e) {
//         setError('Error getting document: ' + e.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEventAndUser();
//   }, [id]);

//   const handleJoinEvent = async () => {
//     if (!currentUser) {
//       console.log('No user logged in');
//       return;
//     }

//     try {
//       const userRef = doc(db, 'users', currentUser.uid);
//       await updateDoc(userRef, {
//         joinedEvents: arrayUnion({
//           id: id,
//           title: event.title,
//           isComplate: event.isComplate,
//           date: formatDate(event.time_start),
//         }),
//       });
//       console.log(`User joined event with id ${id}`);
//     } catch (error) {
//       console.error('Error joining event:', error);
//     }
//   };

//   const formatDateAndTime = (timestamp) => {
//     const date = new Date(timestamp.seconds * 1000);
//     return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp.seconds * 1000);
//     return date.toLocaleDateString();
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp.seconds * 1000);
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
//       <Navbar />
//       <Title
//         title={event.title}
//         start={formatDateAndTime(event.reg_start)}
//         end={formatDateAndTime(event.reg_end)}
//         ButtonClick={handleJoinEvent}
//       />
//       <Content
//         date={formatDate(event.time_start)}
//         time={`${formatTime(event.time_start)} - ${formatTime(event.time_end)}`}
//         place={event.location}
//         start={event.description}
//         overview={event.overview}
//         netOp={event.opportunities}
//         keyFeatures={event.key_features}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default DetailEvent;
