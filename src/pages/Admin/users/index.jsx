import { useEffect, useState } from 'react';
// import {
//   useSelector,
//   useDispatch
// } from 'react-redux';
// import {
//    Navigate,
//   useNavigate,
// } from 'react-router-dom';

import SButton from '../../../components/Admin/Button';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar/Topbar';
import UserModal from './userModal';

export default function AdminUser() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) return <Navigate to="/signin" replace={true} />;
    //dispath()
  }, []);

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Topbar />
        <div className="mx-auto w-full p-5">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl">Daftar User</h1>
            <SButton
              action={handleCreateUser}
              className="bg-blue-500 hover:bg-blue-600 font-medium text-white text-lg px-4 py-2 rounded-xl"
            >
              Add User
            </SButton>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">No</th>
                  <th className="text-left px-4 py-2">Nama</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Nomor Telepon</th>
                  <th className="text-left px-4 py-2">Role</th>
                  <th className="text-left px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Bambang</td>
                  <td className="px-4 py-2">bambang@gmail.com</td>
                  <td className="px-4 py-2">087654323456</td>
                  <td className="px-4 py-2">Peserta</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      // onClick={() => handleEdit(talent)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      // onClick={handlePopUpDelete}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          // isEdit={isEdit}
          userData={selectedUser}
        />
      )}
    </div>
  );
}
