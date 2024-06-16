import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="mb-[2rem] mt-[1rem]">
      <div className="flex justify-between items-center">
        <div className="text-[2rem] font-extrabold">EduHub</div>
        <ul className="flex space-x-[1.5rem]">
          <li>
            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/eventslist" className="hover:text-gray-300">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-gray-300">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-300">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2">
          {isLoggedIn ? (
            // LOGIN
            <div className="flex items-center space-x-[1rem]">
              <NavLink
                to="/dashboard"
                className="flex items-center space-x-[1rem]"
              >
                <span>My Dashboard</span>
                {/* <img
                  src="images/dashboard.jpg"
                  alt="Dashboard Icon"
                  className="h-[3rem] w-[3rem] rounded-full"
                /> */}
              </NavLink>
              <button
                onClick={handleLogout}
                className="py-[0.6rem] px-4 bg-white border border-black rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]"
              >
                Logout
              </button>
            </div>
          ) : (
            // NOT LOGIN
            <>
              <NavLink to="/signin">
                <button className="py-[0.6rem] px-4 bg-white border border-black rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="py-[0.6rem] px-4 text-[#CDFE05] bg-[#000000] rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

// import { NavLink } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className='mb-[2rem] mt-[1rem]'>
//       <div className='flex justify-between items-center'>
//         <div className='text-[2rem] font-extrabold'>EduHub</div>
//         <ul className='flex space-x-[1.5rem]'>
//           <li>
//             <a
//               href='#'
//               className='hover:text-gray-300'>
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='hover:text-gray-300'>
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='hover:text-gray-300'>
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='hover:text-gray-300'>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <div className='flex gap-2'>
//           {/* NOT LOGIN */}
//           <NavLink to='/signin'>
//             <button className='py-[0.6rem] px-4 bg-white border border-black rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]'>
//               Sign In
//             </button>
//           </NavLink>
//           <NavLink to='/signup'>
//             <button className='py-[0.6rem] px-4 text-[#CDFE05] bg-[#000000] rounded-xl text-[16px] font-semibold sm:max-sm w-[8rem]'>
//               Sign Up
//             </button>
//           </NavLink>

//           {/* LOGIN */}
//           {/* <a
//             href='#'
//             className='flex justify-center items-center space-x-[1rem]'>
//             <span>My Dashboard</span>
//             <img
//               src='images/dashboard.jpg'
//               alt='Dashboard Icon'
//               className='h-[3rem] w-[3rem] rounded-full'
//             />
//           </a> */}
//         </div>
//       </div>
//     </nav>
//   );
// }
