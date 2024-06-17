import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './utils/firebase';

import SignUp from './pages/signup';
import SignIn from './pages/signin';
import HomePage from './pages/User/HomePage';
import DetailEvent from './pages/User/DetailEvent';
import EventsList from './pages/User/EventsList';
import Dashboard from './pages/User/Dashboard';

import AdminDashboard from './pages/Admin/dashboard';
import AdminEvents from './pages/Admin/events';
import AdminUser from './pages/Admin/users';
import AdminAddEvent from './pages/Admin/addEvent';

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoginStatus(true);

        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.is_admin);
        } else {
          console.log('User document not found.');
          setIsAdmin(null);
        }
      } else {
        setLoginStatus(false);
        setIsAdmin(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(`Login status: ${loginStatus}`);
  console.log(`Admin status: ${isAdmin}`);
  return (
    // <>
    //   {isAdmin ? (
    //     <Routes>
    //       {/* Rute-rute yang diakses oleh pengguna */}
    //       <Route path="/homepage" element={<HomePage />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/event/:id" element={<DetailEvent />} />
    //       <Route path="/eventslist" element={<EventsList />} />
    //       <Route path="/dashboard" element={<Dashboard />} />

    //       {/* Rute-rute yang hanya dapat diakses oleh admin */}
    //       <Route path="/*" element={<AdminDashboard />} />
    //       <Route path="/admin-allevent" element={<AdminEvents />} />
    //       <Route path="/admin-alluser" element={<AdminUser />} />
    //       <Route path="/admin-addevent" element={<AdminAddEvent />} />
    //     </Routes>
    //   ) : (
    //     <Routes>
    //       {/* Rute-rute yang diakses oleh pengguna */}
    //       <Route path="/*" element={<HomePage />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/event/:id" element={<DetailEvent />} />
    //       <Route path="/eventslist" element={<EventsList />} />
    //     </Routes>
    //   )}
    // </>

    <Routes>
      {isAdmin ? (
        loginStatus ? (
          <>
            <Route path="/*" element={<AdminDashboard />} />
            <Route path="/admin-allevent" element={<AdminEvents />} />
            <Route path="/admin-alluser" element={<AdminUser />} />
            <Route path="/admin-addevent" element={<AdminAddEvent />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </>
        )
      ) : loginStatus ? (
        <>
          <Route path="/*" element={<HomePage />} />
          <Route path="/event/:id" element={<DetailEvent />} />
          <Route path="/eventslist" element={<EventsList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/event/:id" element={<DetailEvent />} />
          <Route path="/eventslist" element={<EventsList />} />
        </>
      )}
    </Routes>
  );
}
