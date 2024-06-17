import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addUser, getUser, updateUser } from '../../../utils/firestore';

export default function UserModal({ userId, onClose }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    is_admin: '',
  });

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser(userId);
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        is_admin: user.is_admin ? 'admin' : 'user',
      });
    }

    if (userId) fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setError('Semua data harus diisi');

      return;
    }

    if (userId) {
      await updateUser(userId, formData);
    } else {
      await addUser(formData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 className="text-xl mb-4">
          {userId ? 'Edit User' : 'Tambah User Baru'}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Nama User</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Nomor Telepon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="is_admin" className="block mb-1">
              Pilih role
            </label>
            <select
              name="is_admin"
              id="is_admin"
              className="w-full p-2 border rounded"
              value={formData.is_admin}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

UserModal.propTypes = {
  userId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
