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

  return { id: event.id, ...event.data() };
}

async function addEvent(formData) {
  try {
    await addDoc(collection(db, 'events'), {
      title: formData.title,
      description: formData.description,
      overview: formData.overview,
      opportunities: formData.opportunities,
      key_features: formData.key_features,
      tag: formData.tags.split(',').map((tag) => tag.trim()),
      time_start: Timestamp.fromDate(new Date(formData.time_start)),
      time_end: Timestamp.fromDate(new Date(formData.time_end)),
      reg_start: Timestamp.fromDate(new Date(formData.reg_start)),
      reg_end: Timestamp.fromDate(new Date(formData.reg_end)),
      location: formData.location,
      banner: 'banner.jpg',
      id_talent: 'talent_masih_dalam_pengembangan',
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
      key_features: formData.key_features,
      tag: formData.tags.split(',').map((tag) => tag.trim()),
      time_start: Timestamp.fromDate(new Date(formData.time_start)),
      time_end: Timestamp.fromDate(new Date(formData.time_end)),
      reg_start: Timestamp.fromDate(new Date(formData.reg_start)),
      reg_end: Timestamp.fromDate(new Date(formData.reg_end)),
      location: formData.location,
      banner: 'banner.jpg',
      id_talent: 'talent_masih_dalam_pengembangan',
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

async function getAllUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = [];
    querySnapshot.forEach((doc) => {
      const user = { id: doc.id, ...doc.data() };
      users.push(user);
    });
    return users;
  } catch (e) {
    console.error('Error getting users: ' + e.message);
  }
}

async function getUser(userId) {
  const docRef = doc(db, 'users', userId);
  const user = await getDoc(docRef);

  return { id: user.id, ...user.data() };
}

async function addUser(formData) {
  try {
    await addDoc(collection(db, 'users'), { formData });
    return alert('Successfully added user!');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function updateUser(userId, formData) {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, { formData });
    alert('Successfully updated user!');
  } catch (e) {
    console.error('Error updating user: ', e.message);
  }
}

async function deleteUser(userId) {
  try {
    await deleteDoc(doc(db, 'users', userId));
    console.log('Deleted user: ', userId);
  } catch (e) {
    console.error('Error deleting user: ' + userId.message);
  }
}

export {
  getAllEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
