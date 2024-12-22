// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyBkgKSRjIGSQ8oPaRFWHtUSlK0omo9Yw5I",
//   authDomain: "assignment11-8e4d7.firebaseapp.com",
//   projectId: "assignment11-8e4d7",
//   storageBucket: "assignment11-8e4d7.firebasestorage.app",
//   messagingSenderId: "845710862544",
//   appId: "1:845710862544:web:567fa537c5194afc7dd6d5"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
