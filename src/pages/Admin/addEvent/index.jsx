import { useState } from 'react';
import { addEvent } from '../../../utils/firestore';

export default function AdminAddEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    overview: '',
    opportunities: '',
    keyFeatures: '',
    talent: '',
    linkMeeting: '',
    location: '',
    // date: '',
    reg_start: '',
    reg_end: '',
    timeStart: '',
    timeEnd: '',
    eventType: 'webinar',
    price: '',
    tags: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await addEvent(formData);
  };

  return (
    <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center m-10"
        >
          <h2 className="text-center font-bold text-xl mb-1">Add New Event</h2>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="title">
              Title
            </label>
            <input
              className="rounded-md p-3"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="rounded-md p-2"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={{ resize: 'none', width: '400px', height: '150px' }}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="overview">
              Overview
            </label>
            <textarea
              className="rounded-md p-2"
              id="overview"
              name="overview"
              value={formData.overview}
              onChange={handleInputChange}
              style={{ resize: 'none', width: '400px', height: '80px' }}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="opportunities">
              Opportunities
            </label>
            <textarea
              className="rounded-md p-2"
              id="opportunities"
              name="opportunities"
              value={formData.opportunities}
              onChange={handleInputChange}
              style={{ resize: 'none', width: '400px', height: '80px' }}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="keyFeatures">
              Key Features
            </label>
            <textarea
              className="rounded-md p-2"
              id="keyFeatures"
              name="keyFeatures"
              value={formData.keyFeatures}
              onChange={handleInputChange}
              style={{ resize: 'none', width: '400px', height: '80px' }}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="tags">
              Tags
            </label>
            <input
              className="rounded-md p-3"
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Enter tags separated by commas"
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="talent">
              Talent
            </label>
            <select
              id="talent"
              name="talent"
              value={formData.talent}
              onChange={handleInputChange}
              className="rounded-md p-3"
              required
            >
              <option value="">Select a talent</option>
              <option value="talent-1">Talent 1</option>
              <option value="talent-2">Talent 2</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="linkMeeting">
              Link Meeting
            </label>
            <input
              className="rounded-md p-3"
              type="text"
              id="linkMeeting"
              name="linkMeeting"
              value={formData.linkMeeting}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="location">
              Location
            </label>
            <input
              className="rounded-md p-3"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="date">
              Date
            </label>
            <input
              className="rounded-md p-3"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div> */}
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="reg_start">
              Registration Start
            </label>
            <input
              className="rounded-md p-3"
              type="datetime-local"
              id="reg_start"
              name="reg_start"
              value={formData.reg_start}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="reg_end">
              Registration End
            </label>
            <input
              className="rounded-md p-3"
              type="datetime-local"
              id="reg_end"
              name="reg_end"
              value={formData.reg_end}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="time-start">
              Time Start
            </label>
            <input
              className="rounded-md p-3"
              type="datetime-local"
              id="timeStart"
              name="timeStart"
              value={formData.time_start}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="time-end">
              Time End
            </label>
            <input
              className="rounded-md p-3"
              type="datetime-local"
              id="timeEnd"
              name="timeEnd"
              value={formData.time_end}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="eventType">
              Event Type
            </label>
            <select
              className="rounded-md p-3"
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              required
            >
              <option value="webinar">Webinar</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            <label className="font-bold pb-2" htmlFor="price">
              Price
            </label>
            <input
              className="rounded-md p-3"
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 my-6">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
