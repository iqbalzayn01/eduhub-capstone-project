// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { db } from '../../utils/firebase';

import Navbar from '../../components/User/Navbar';
import Footer from '../../components/User/Footer';

export default function DashboardUser() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="container mx-auto px-5">
      <Navbar />
      <main className="grid grid-cols-3 gap-10 mb-10">
        {/* Grid col 1 */}
        <div className="col-span-1 p-5 border border-gray-400 rounded-xl">
          <div className="flex flex-col items-center mb-10">
            <img
              src="/images/person3.png"
              alt="Profile"
              className="w-[200px] h-[200px] object-cover bg-gray-500 mb-5 rounded-full"
            />
            <p className="font-semibold text-3xl">
              {userData.firstName} {userData.lastName}
            </p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-gray-400 pb-5">Role</p>
            <p className="font-medium text-xl">{userData.role}</p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-gray-400 pb-5">About</p>
            <p className="font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              laborum tempore tempora provident corrupti veniam, cum eius libero
              cupiditate dolorum ut ratione commodi natus, dolorem odit
              consectetur corporis reiciendis unde.
            </p>
          </div>
        </div>
        {/* Grid col 2 */}
        <div className="col-span-2">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium">Events</h1>
            {userData.joinedEvents &&
              userData.joinedEvents.map((event) => (
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
                        event.isComplete ? 'bg-[#A3A5AA]' : 'bg-[#CDFE05]'
                      }`}
                    >
                      {event.isComplete ? 'Completed' : 'Already registered'}
                    </p>
                    <div className="flex flex-col gap-5">
                      <h5 className="font-semibold text-[#CDFE05] text-3xl">
                        {event.title}
                      </h5>
                      <p className="text-white">{event.date}</p>
                      {/* <p className="text-white text-xl">{event.description}</p> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// import { useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { onAuthStateChanged, getAuth } from 'firebase/auth';
// import { db } from '../../utils/firebase';

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userEmail = user.email;

//         try {
//           const q = query(
//             collection(db, 'users'),
//             where('email', '==', userEmail),
//           );
//           const querySnapshot = await getDocs(q);

//           if (!querySnapshot.empty) {
//             const userData = querySnapshot.docs[0].data();
//             setUserData(userData);
//           }
//         } catch (error) {
//           console.error('Error fetching user data: ', error);
//         }
//       } else {
//         console.log('No user is logged in');
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe(); // Unsubscribe when component unmounts
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!userData) {
//     return <div>No user data found.</div>;
//   }

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <p>Email: {userData.email}</p>
//       <p>First Name: {userData.firstName}</p>
//       <p>Last Name: {userData.lastName}</p>
//       <p>Role: {userData.role}</p>
//       <p>Event: </p>
//       <ul>
//         {userData.joinedEvents &&
//           userData.joinedEvents.map((event) => (
//             <li key={event.id}>
//               <p>Event ID: {event.id}</p>
//               <p>
//                 Status Selesai:{' '}
//                 {event.isComplete ? 'Completed' : 'Already Registered'}
//               </p>
//               <p>Title: {event.title}</p>
//               <p>Date: {event.date}</p>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
