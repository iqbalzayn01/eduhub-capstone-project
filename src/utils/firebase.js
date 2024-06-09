import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVx5Wz4pArIgaAEtUfHikeJWvc8hjiUu8',
  authDomain: 'eduhub-94cb4.firebaseapp.com',
  projectId: 'eduhub-94cb4',
  storageBucket: 'eduhub-94cb4.appspot.com',
  messagingSenderId: '1070582410632',
  appId: '1:1070582410632:web:4806275a2506a08f30de3d',
  measurementId: 'G-LZDQ7V473N',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
