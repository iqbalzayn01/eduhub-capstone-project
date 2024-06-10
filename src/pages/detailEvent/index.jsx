import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

import Title from '../../components/Title';
import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DetailEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getEvent = async () => {
    try {
      const docRef = doc(db, 'events', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvent({ id: docSnap.id, ...docSnap.data() });
      } else {
        setError('No such document!');
      }
      setLoading(false);
    } catch (e) {
      setError('Error getting document: ' + e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {event && (
        <div>
          <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
            <Navbar />
            <Title
              title={event.title}
              start={event.time_start}
              end={event.time_end}
            />

            <Content
              date={new Date(event.date.seconds * 1000).toLocaleDateString()}
              time={`${event.time_start} - ${event.time_end}`}
              place={event.location}
              start={event.description}
              overview={event.overview}
              netOp={event.opportunities}
              keyFeatures={event.key_features}
            ></Content>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailEvent;

// import Title from '../../components/Title';
// import Content from '../../components/Content';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// export default function DetailEvent() {
//   return (
//     <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
//       <Navbar />
//       <Title
//         start={event.time_start}
//         end={event.time_end}
//       />

//       <Content
//         date={new Date(event.date.seconds * 1000).toLocaleDateString()}
//         time={'9:00 AM - 2:00 PM'}
//         place={event.location}
//         start={event.description}
//         overview={event.overview}
//         netOp={event.opportunities}
//         keyFeatures={event.key_features}
//       ></Content>
//       <Footer />
//     </div>
//   );
// }
