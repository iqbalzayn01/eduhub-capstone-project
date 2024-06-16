import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../utils/firebase';

export const SidebarNavItem = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin'); // Redirect to sign-in page after successful sign-out
      localStorage.clear();
      console.log('logout completed');
    } catch (error) {
      console.error('Error signing out:', error); // Log any errors during sign-out
    }
  };

  return (
    <ul className="space-y-2">
      <li className="hover:bg-gray-700 p-4">
        <Link className="text-white" to="/admin-dashboard">
          Dashboard
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link className="text-white" to="/admin-allevent">
          Daftar Event
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link className="text-white" to="/admin-alluser">
          Daftar User
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link className="text-white" to="/admin-talents">
          Daftar Talents
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link className="text-white" to="/admin-historypayments">
          History Pembayaran
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <button onClick={handleSignOut} className=" text-red-500">
          Sign Out
        </button>
      </li>
    </ul>
  );
};
