
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIBKKSBQ1TQIO8NcRJT2b7rjSiA6OG-j8",
  authDomain: "vishal-a4816.firebaseapp.com",
  projectId: "vishal-a4816",
  storageBucket: "vishal-a4816.firebasestorage.app",
  messagingSenderId: "544586087052",
  appId: "1:544586087052:web:7475d6dd5cabcaedded9a9",
  measurementId: "G-2KDZMFE46C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
