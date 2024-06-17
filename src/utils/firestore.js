import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  getCountFromServer,
} from 'firebase/firestore';
import { db } from './firebase';
import { signUp } from './auth';

async function getTotalDocuments(collectionName) {
  const coll = collection(db, collectionName);
  const snapshot = await getCountFromServer(coll);
  return snapshot.data().count;
}
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
      isComplate: false,
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
      id_talent: formData.id_talent,
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
      isComplate: false,
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
      id_talent: formData.id_talent,
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
    await addDoc(collection(db, 'users'), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      is_admin: formData.is_admin === 'admin' ? true : false,
    });
    await signUp(formData.email, formData.password);
    return alert('Successfully added user!');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function updateUser(userId, formData) {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      is_admin: formData.is_admin === 'admin' ? true : false,
    });
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

async function getAllTalents() {
  try {
    const querySnapshot = await getDocs(collection(db, 'talents'));
    const talents = [];
    querySnapshot.forEach((doc) => {
      const talent = { id: doc.id, ...doc.data() };
      talents.push(talent);
    });
    return talents;
  } catch (e) {
    console.error('Error getting talents: ' + e.message);
  }
}

async function getTalent(talentId) {
  const docRef = doc(db, 'talents', talentId);
  const talent = await getDoc(docRef);

  return { id: talent.id, ...talent.data() };
}

async function addTalent(formData) {
  try {
    await addDoc(collection(db, 'talents'), {
      name: formData.name,
      email: formData.email,
      job: formData.job,
      phone: formData.phone,
    });
    return alert('Successfully added talent!');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function updateTalent(talentId, formData) {
  try {
    const docRef = doc(db, 'talents', talentId);
    await updateDoc(docRef, {
      name: formData.name,
      email: formData.email,
      job: formData.job,
      phone: formData.phone,
    });
    alert('Successfully updated talent!');
  } catch (e) {
    console.error('Error updating talent: ', e.message);
  }
}

async function deleteTalent(talentId) {
  try {
    await deleteDoc(doc(db, 'talents', talentId));
    console.log('Deleted talent: ', talentId);
  } catch (e) {
    console.error('Error deleting talent: ' + talentId.message);
  }
}

export {
  getTotalDocuments,
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
  getAllTalents,
  getTalent,
  addTalent,
  updateTalent,
  deleteTalent,
};
