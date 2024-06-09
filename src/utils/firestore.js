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

async function getAllEvents() {
  try {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const events = [];
    querySnapshot.forEach((doc) => {
      const event = { id: doc.id, ...doc.data() };
      events.push(event);
    });
    console.log(events);
  } catch (e) {
    console.error('Error getting events: ' + e.message);
  }
}

async function addEvent() {
  try {
    const docRef = await addDoc(collection(db, 'events'), {
      banner: 'whatisbanner?',
      tag: ['tag1', 'tag2', 'tag3'],
      title: 'this is title',
      date: Timestamp.fromDate(new Date()),
      id_talent: 'idtalent1',
      description: 'this is description',
      type: 'webinar',
      link: 'https://meet.google.com/',
      time_start: '15:00',
      time_end: '17:00',
      created_at: Timestamp.fromDate(new Date()),
    });
    console.log('Document written with ID: ', docRef.id);
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
