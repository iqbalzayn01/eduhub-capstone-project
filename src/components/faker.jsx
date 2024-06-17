import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Timestamp } from 'firebase/firestore';
import { faker } from '@faker-js/faker'; // Ensure correct import path based on actual package structure

const addEventToFirestore = async () => {
  try {
    // Generate dummy data using faker
    const formData = {
      title: faker.lorem.words(4), // Random title with 4 words
      description: faker.lorem.paragraph(), // Random description paragraph
      overview: faker.lorem.sentences(3), // Random overview with 3 sentences
      opportunities: faker.lorem.sentences(2), // Random opportunities with 2 sentences
      key_features: faker.lorem.words(6), // Random key features with 6 words
      tags: 'tag1, tag2, tag3', // Random tags with 3 words
      time_start: faker.date.future(), // Random future date for event start
      time_end: faker.date.future(), // Random future date for event end
      reg_start: faker.date.future(), // Random future date for registration start
      reg_end: faker.date.future(), // Random future date for registration end
      location: 'indonesia', // Random city for event location
      link: faker.internet.url(), // Random URL for event link
      price: faker.datatype.number({ min: 10000, max: 1000000 }), // Random number between 10 and 100 for price
      type: 'Workshop', // Random event type
    };

    // Save new document to 'events' collection
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
      banner: 'banner.jpg', // Assuming a static banner for now
      id_talent: 'talent_masih_dalam_pengembangan', // Assuming a static talent ID
      link: formData.link,
      price: formData.price,
      type: formData.type,
      created_at: Timestamp.fromDate(new Date()), // Current timestamp for creation
    });

    console.log('Event successfully added to Firestore!');
  } catch (error) {
    console.error('Error adding event to Firestore:', error);
  }
};

export { addEventToFirestore };
