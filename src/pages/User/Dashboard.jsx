// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { db } from '../../utils/firebase';

import Navbar from '../../components/User/Navbar';
import Footer from '../../components/User/Footer';
import { Link } from 'react-router-dom';
// import { addEventToFirestore } from '../../components/faker';

export default function DashboardUser() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   addEventToFirestore();
  // }, []);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;

        try {
          const q = query(
            collection(db, 'users'),
            where('email', '==', userEmail),
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setUserData(userData);
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        }
      } else {
        console.log('No user is logged in');
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
      <Navbar />
      <main className="grid grid-cols-3 gap-10 mb-10">
        {/* Grid col 1 */}
        <div className="col-span-1 p-5 border border-gray-400 rounded-xl pt-14">
          <div className="flex flex-col items-center mb-10">
            <img
              src="/images/user.png"
              alt="Profile"
              className="w-[200px] h-[200px] object-cover bg-white mb-5 rounded-full"
              draggable="false"
            />
            <p className="font-semibold text-3xl">{userData.name}</p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-gray-400 pb-5">Role</p>
            <p className="font-medium text-xl">{userData.role}</p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-gray-400 pb-5">About</p>
            <p className="font-medium text-xl">-</p>
          </div>
        </div>
        {/* Grid col 2 */}
        <div className="col-span-2">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium">Events</h1>
            {!userData.joinedEvents || userData.joinedEvents.length === 0 ? (
              <p className="text-gray-500 text-center">Event kosong</p>
            ) : (
              [...userData.joinedEvents].reverse().map((event) => (
                <div
                  key={event.id}
                  className="card-event grid grid-cols-3 gap-5 bg-black rounded-xl"
                >
                  {/* <div
        className="col-span-1 rounded-s-xl"
        style={{
          backgroundImage: `url(${event.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      ></div> */}
                  <div className="col-span-2 pt-5 pb-5 pl-8">
                    <p
                      className={`w-fit h-fit font-semibold p-3 mb-5 rounded-xl ${
                        event.isComplate ? 'bg-[#A3A5AA]' : 'bg-[#CDFE05]'
                      }`}
                    >
                      {event.isComplate ? 'Completed' : 'Already registered'}
                    </p>
                    <div className="flex flex-col gap-5">
                      <h5 className="font-semibold text-[#CDFE05] text-3xl">
                        {event.title}
                      </h5>
                      <Link className="text-white" to={event.link}>
                        {event.link}
                      </Link>
                      {/* <p className="text-white text-xl">{event.link}</p> */}
                      <p className="text-white">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
