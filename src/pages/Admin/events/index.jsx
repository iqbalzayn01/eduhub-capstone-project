import { useEffect, useState } from 'react';

import SButton from '../../../components/Admin/Button';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar/Topbar';
import EventModal from './eventModal';
import { deleteEvent, getAllEvents } from '../../../utils/firestore';
import { formatDate } from '../../../utils/date';

export default function AdminEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const fetchedEvents = await getAllEvents();
    setEvents(fetchedEvents);
  };

  const handleCreateEvent = () => {
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleEditEvent = (eventId) => {
    setSelectedEvent(eventId);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = async (eventId) => {
    const isDelete = confirm('Are you sure you want to delete this event?');
    if (!isDelete) return;
    await deleteEvent(eventId);
    await fetchEvents();
  };

  return (
    <div>
      <Sidebar />
      <main className='ms-64'>
        <Topbar />
        <div className='mx-auto w-full p-5'>
          <div className='flex items-center justify-between mb-5'>
            <h1 className='font-bold text-2xl'>Daftar Event</h1>
            <SButton
              action={handleCreateEvent}
              className='bg-blue-500 hover:bg-blue-600 font-medium text-white text-lg px-4 py-2 rounded-xl'>
              Add Event
            </SButton>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {events.map((event) => (
              <div
                className='card border border-slate-400 p-10 rounded-lg'
                key={event.id}>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>Judul Kegiatan</h2>
                  <p>{event.title}</p>
                  <hr />
                  <p className='font-semibold'>Nama Pembicara</p>
                  <p>{event.id_talent}</p>
                  <p className='font-semibold'>Link Zoom</p>
                  <span>
                    <a
                      href={event.link}
                      className='underline'
                      target='_blank'>
                      {event.link}
                    </a>
                  </span>
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Jadwal:</p>
                    <p>Start: {`${formatDate(event.time_start.toDate())}`}</p>
                    <p>
                      End:{' '}
                      {`${formatDate(event.time_end !== undefined && event.time_end.toDate())}`}
                    </p>
                  </div>
                  <div className='flex items-start justify-between'>
                    <div className='flex flex-col gap-2'>
                      <p className='font-semibold'>Status Kegiatan:</p>
                      {event.time_end.toDate() < Date.now() ? (
                        <p className='bg-gray-500 text-white text-center font-medium uppercase py-1 rounded-lg'>
                          FINISHED
                        </p>
                      ) : (
                        <p className='bg-emerald-500 text-white text-center font-medium uppercase py-1 rounded-lg'>
                          ACTIVE
                        </p>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='font-semibold'>Harga:</p>
                      <p className='text-xl'>{event.price}</p>
                    </div>
                  </div>
                  <hr className='bg-slate-400 mt-4' />
                  <div className='flex items-center gap-2'>
                    <button
                      className='bg-blue-500 text-white px-2 py-1 rounded'
                      onClick={() => handleEditEvent(event.id)}>
                      Edit
                    </button>
                    <button
                      className='bg-red-500 text-white px-2 py-1 rounded'
                      onClick={() => {
                        handleDeleteEvent(event.id);
                      }}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {isModalOpen && (
        <EventModal
          onClose={async () => {
            const newEvents = await getAllEvents();
            setEvents(newEvents);
            setIsModalOpen(false);
          }}
          eventId={selectedEvent}
        />
      )}
    </div>
  );
}
