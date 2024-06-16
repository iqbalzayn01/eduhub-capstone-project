import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import { fetchCreateEvent, fetchUpdateEvent } from '../../redux/events/actions';

export default function UserModal({ onClose, isEdit, userData }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    no_telp: '',
  });
  // const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit && userData) {
      setFormData({
        ...userData,
      });
    }
  }, [isEdit, userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, no_telp } = formData;

    if (!name || !email || !no_telp) {
      setError('Semua data harus diisi');
      return;
    }

    if (userData) {
      // dispatch(fetchUpdateEvent(userData._id, formData));
      console.log('update data:', userData._id, formData);
    } else {
      // dispatch(fetchCreateEvent(formData));
      console.log('create user:', userData._id, formData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 className="text-xl mb-4">
          {isEdit ? 'Edit Event' : 'Tambah Event Baru'}
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
              name="no_telp"
              value={formData.no_telp}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
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
  onClose: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  userData: PropTypes.object,
};
