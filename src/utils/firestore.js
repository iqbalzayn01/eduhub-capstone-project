import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';
import { dateStringToTimestamp } from './date';

async function getAllEvents() {
  try {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const events = [];
    querySnapshot.forEach((doc) => {
      const event = { id: doc.id, ...doc.data() };
      events.push(event);
    });
    return events;
  } catch (e) {
    console.error('Error getting events: ' + e.message);
  }
}

async function addEvent(formData) {
  try {
    await addDoc(collection(db, 'events'), {
      title: formData.title,
      description: formData.description,
      overview: formData.overview,
      opportunities: formData.opportunities,
      features: formData.features,
      tag: 'tes',
      date_start: dateStringToTimestamp(formData.date_start),
      date_end: dateStringToTimestamp(formData.date_end),
      reg_start: dateStringToTimestamp(formData.reg_start),
      reg_end: dateStringToTimestamp(formData.reg_end),
      id_talent: '',
      link: formData.link,
      price: formData.price,
      type: formData.type,
      created_at: Timestamp.fromDate(new Date()),
    });
    return alert('Successfully added event!');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function updateEvent(eventId, updatedEvent) {
  try {
    const docRef = doc(db, 'events', eventId);
    await updateDoc(docRef, updatedEvent);
    console.log('Document updated with ID: ', docRef.id);
  } catch (e) {
    console.error('Error updating event: ', e.message);
  }
}

async function deleteEvent(eventId) {
  try {
    await deleteDoc(doc(db, 'events', eventId));
    console.log('Deleted event: ', eventId);
  } catch (e) {
    console.error('Error deleting event: ' + eventId.message);
  }
}

export { getAllEvents, addEvent, updateEvent, deleteEvent };
