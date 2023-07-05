// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcszwsyG0TBnQR0rrVmSDbH5ifcRLcyew',
  authDomain: 'bms-bup-dev.firebaseapp.com',
  projectId: 'bms-bup-dev',
  storageBucket: 'bms-bup-dev.appspot.com',
  messagingSenderId: '965184613088',
  appId: '1:965184613088:web:50c33f10fe7de8ebfabe85',
  measurementId: 'G-TXMD66SQXH',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export default firebaseApp;
