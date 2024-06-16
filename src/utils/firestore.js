import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
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

async function getEvent(eventId) {
  const docRef = doc(db, 'events', eventId);
  const event = await getDoc(docRef);
  console.log(event.data());
  return { id: event.id, ...event.data() };
}

async function addEvent(formData) {
  try {
    await addDoc(collection(db, 'events'), {
      title: formData.title,
      description: formData.description,
      overview: formData.overview,
      opportunities: formData.opportunities,
      features: formData.features,
      tags: formData.tags.split(','),
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

async function updateEvent(eventId, formData) {
  try {
    console.log(eventId);
    const docRef = doc(db, 'events', eventId);
    await updateDoc(docRef, {
      title: formData.title,
      description: formData.description,
      overview: formData.overview,
      opportunities: formData.opportunities,
      features: formData.features,
      tags: formData.tags.split(','),
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
    alert('Successfully updated event!');
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

export { getAllEvents, getEvent, addEvent, updateEvent, deleteEvent };
