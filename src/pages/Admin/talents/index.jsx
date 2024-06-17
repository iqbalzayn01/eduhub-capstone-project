import { useEffect, useState } from 'react';

import SButton from '../../../components/Admin/Button';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar/Topbar';
import TalentModal from './talentModal';
import { deleteTalent, getAllTalents } from '../../../utils/firestore';

export default function AdminTalents() {
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetchTalents();
  }, []);

  async function fetchTalents() {
    const fetchedTalents = await getAllTalents();
    setTalents(fetchedTalents);
  }

  const handleCreateTalent = () => {
    setSelectedTalent(null);
    setIsModalOpen(true);
  };

  const handleEditTalent = (talentId) => {
    setSelectedTalent(talentId);
    setIsModalOpen(true);
  };

  const handleDeleteTalent = async (talentId) => {
    const isDelete = confirm('Are you sure you want to delete this talent?');
    if (!isDelete) return;
    await deleteTalent(talentId);
    await fetchTalents();
  };

  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 ms-64'>
        <Topbar />
        <div className='mx-auto w-full p-5'>
          <div className='flex items-center justify-between mb-5'>
            <h1 className='font-bold text-2xl'>Daftar Talents</h1>
            <SButton
              action={handleCreateTalent}
              className='bg-blue-500 hover:bg-blue-600 font-medium text-white text-lg px-4 py-2 rounded-xl'>
              Add Talent
            </SButton>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full bg-white'>
              <thead>
                <tr>
                  <th className='text-left px-4 py-2'>No</th>
                  <th className='text-left px-4 py-2'>Nama</th>
                  <th className='text-left px-4 py-2'>Email</th>
                  <th className='text-left px-4 py-2'>Nomor Telepon</th>
                  <th className='text-left px-4 py-2'>Job</th>
                  <th className='text-left px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {talents.map((talent, index) => (
                  <tr
                    className='border-t'
                    key={talent.id}>
                    <td className='px-4 py-2'>{index + 1}</td>
                    <td className='px-4 py-2'>{talent.name}</td>
                    <td className='px-4 py-2'>{talent.email}</td>
                    <td className='px-4 py-2'>{talent.phone}</td>
                    <td className='px-4 py-2'>{talent.job}</td>
                    <td className='px-4 py-2'>
                      <button
                        className='bg-blue-500 text-white px-2 py-1 rounded mr-2'
                        onClick={() => handleEditTalent(talent.id)}>
                        Edit
                      </button>
                      <button
                        className='bg-red-500 text-white px-2 py-1 rounded'
                        onClick={() => {
                          handleDeleteTalent(talent.id);
                        }}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <TalentModal
          talentId={selectedTalent}
          onClose={async () => {
            setIsModalOpen(false);
            fetchTalents();
          }}
        />
      )}
    </div>
  );
}
