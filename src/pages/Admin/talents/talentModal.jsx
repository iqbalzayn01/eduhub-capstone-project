import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addTalent, getTalent, updateTalent } from '../../../utils/firestore';

export default function TalentModal({ talentId, onClose }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    job: '',
  });

  useEffect(() => {
    async function fetchTalent() {
      const talent = await getTalent(talentId);
      setFormData({
        name: talent.name,
        email: talent.email,
        phone: talent.phone,
        job: talent.job,
      });
    }

    if (talentId) fetchTalent();
  }, [talentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, job } = formData;

    if (!name || !email || !phone || !job) {
      setError('Semua data harus diisi');

      return;
    }

    if (talentId) {
      await updateTalent(talentId, formData);
    } else {
      await addTalent(formData);
    }

    onClose();
  };

  return (
    <div className='fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg shadow-md w-1/3'>
        <h2 className='text-xl mb-4'>{talentId ? 'Edit Talent' : 'Tambah Talent Baru'}</h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-1'>Nama Talent</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required></input>
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Nomor Telepon</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Pekerjaan</label>
            <input
              type='text'
              name='job'
              value={formData.job}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-500 text-white px-4 py-2 rounded mr-2'>
              Batal
            </button>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded'>
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

TalentModal.propTypes = {
  talentId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
