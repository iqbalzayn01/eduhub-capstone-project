import Topbar from '../../../components/Admin/Topbar/Topbar';
import Sidebar from '../../../components/Admin/Sidebar';
import { Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaStar, FaHistory } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getTotalDocuments } from '../../../utils/firestore';

export default function AdminDashboard() {
  const [allCounts, setAllCounts] = useState({
    users: '...',
    talents: '...',
    events: '...',
  });

  useEffect(() => {
    async function getAllCounts() {
      const totalUser = await getTotalDocuments('users');
      const totalTalent = await getTotalDocuments('talents');
      const totalEvent = await getTotalDocuments('events');
      setAllCounts({
        users: totalUser,
        talents: totalTalent,
        events: totalEvent,
      });
    }

    getAllCounts();
  });

  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 ms-64'>
        <Topbar />
        <h1 className='ml-8 mt-16 text-5xl font-bold'>Dashboard</h1>
        <div className='grid grid-cols-2 gap-8 p-8'>
          <Link
            to='/'
            className='flex items-center justify-center text-5xl font-semibold p-11 m-8 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300'>
            <FaUsers className='text-9xl mr-4' />
            <div className='flex flex-col items-center'>
              <span className='text-8xl font-bold'>{allCounts.users}</span>
              <span>User</span>
            </div>
          </Link>
          <Link
            to='/'
            className='flex items-center justify-center text-5xl font-semibold p-11 m-8 border rounded-lg shadow-lg hover:bg-green-100 transition duration-300'>
            <FaCalendarAlt className='text-9xl mr-4' />
            <div className='flex flex-col items-center'>
              <span className='text-8xl font-bold'>{allCounts.events}</span>
              <span>Event</span>
            </div>
          </Link>
          <Link
            to='/'
            className='flex items-center justify-center text-5xl font-semibold p-11 m-8 border rounded-lg shadow-lg hover:bg-yellow-100 transition duration-300'>
            <FaStar className='text-9xl mr-4' />
            <div className='flex flex-col items-center'>
              <span className='text-8xl font-bold'>{allCounts.talents}</span>
              <span>Talent</span>
            </div>
          </Link>
          <Link
            to='/'
            className='flex items-center justify-center text-5xl font-semibold p-11 m-8 border rounded-lg shadow-lg hover:bg-red-100 transition duration-300'>
            <FaHistory className='text-9xl mr-4' />
            <div className='flex flex-col items-center'>
              <span>Payment</span>
              <span>History</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
