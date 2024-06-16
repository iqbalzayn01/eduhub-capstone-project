import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addEvent, getEvent, updateEvent } from '../../../utils/firestore';
import { TimestampToDateString } from '../../../utils/date';

export default function EventModal({ onClose, eventId }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    overview: '',
    opportunities: '',
    features: '',
    tags: '',
    date_start: '',
    date_end: '',
    reg_start: '',
    reg_end: '',
    link: '',
    price: '',
    type: '',
  });

  useEffect(() => {
    async function fetchEvent() {
      const event = await getEvent(eventId);
      setFormData({
        title: event.title,
        description: event.description,
        overview: event.overview,
        opportunities: event.opportunities,
        features: event.features,
        tags: event.tags.join(',') ?? '',
        date_start: TimestampToDateString(event.date_start),
        date_end: TimestampToDateString(event.date_end),
        reg_start: TimestampToDateString(event.reg_start),
        reg_end: TimestampToDateString(event.reg_end),
        link: event.link,
        price: event.price ?? '',
        type: event.type,
      });
    }

    if (eventId) fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      description,
      overview,
      opportunities,
      features,
      tags,
      date_start,
      date_end,
      reg_start,
      reg_end,
      link,
      price,
      type,
    } = formData;

    if (
      (!title ||
        !overview ||
        !opportunities ||
        !features ||
        !tags ||
        !description ||
        !date_start ||
        !date_end ||
        !reg_start ||
        !reg_end ||
        !link,
      !price,
      !type)
    ) {
      setError('Semua input harus diisi!');
      return;
    }

    if (eventId) {
      await updateEvent(eventId, formData);
    } else {
      await addEvent(formData);
    }

    onClose();
  };

  return (
    <div className='fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <form onSubmit={handleSubmit}>
        <div className='bg-white p-8 rounded-lg shadow-md '>
          <h2 className='text-xl mb-4 font-semibold'>
            {eventId !== null ? 'Edit Event' : 'Add New Event'}
          </h2>
          <div className='flex gap-8'>
            <div className='flex-1 w-72'>
              {error && <p className='text-red-500 mb-4'>{error}</p>}
              <div className='mb-4'>
                <label className='block mb-1'>Judul Event</label>
                <input
                  type='text'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Description</label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'></textarea>
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Overview</label>
                <textarea
                  name='overview'
                  value={formData.overview}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'></textarea>
              </div>
              <div className='mb-4'>
                <label className='block mb-1'> Opportunities</label>
                <textarea
                  name='opportunities'
                  value={formData.opportunities}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'></textarea>
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Key Features</label>
                <textarea
                  name='features'
                  value={formData.features}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'></textarea>
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Tags</label>
                <input
                  type='text'
                  name='tags'
                  value={formData.tags}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
            </div>
            <div className='flex-1 w-72'>
              <div className='mb-4'>
                <label className='block mb-1'>Registrasi Mulai</label>
                <input
                  type='datetime-local'
                  name='reg_start'
                  value={formData.reg_start}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-2'>
                <label className='block mb-1'>Registrasi Selesai</label>
                <input
                  type='datetime-local'
                  name='reg_end'
                  value={formData.reg_end}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Waktu Acara Mulai</label>
                <input
                  type='datetime-local'
                  name='date_start'
                  value={formData.date_start}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-2'>
                <label className='block mb-1'>Waktu Acara Selesai</label>
                <input
                  type='datetime-local'
                  name='date_end'
                  value={formData.date_end}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>

              <div className='mb-4'>
                <label className='block mb-1'>Link</label>
                <input
                  type='text'
                  name='link'
                  value={formData.link}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>Price</label>
                <input
                  type='text'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>

              <div className='mb-4'>
                <label className='block mb-1'>Type</label>
                <input
                  type='text'
                  name='type'
                  value={formData.type}
                  onChange={handleChange}
                  className='w-full p-2 border rounded'
                />
              </div>
            </div>
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
        </div>
      </form>
    </div>
  );
}

EventModal.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  eventData: PropTypes.object,
};
