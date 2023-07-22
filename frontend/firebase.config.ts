import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import { getAuth,Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAsfyl_YbWUnfF3Htvn-huOnJ_wcu5TIps",
    authDomain: "mern-typescript-edu.firebaseapp.com",
    projectId: "mern-typescript-edu",
    storageBucket: "mern-typescript-edu.appspot.com",
    messagingSenderId: "645675834719",
    appId: "1:645675834719:web:85339423c9f30c1a372aea",
    measurementId: "G-7JZ3ZLS3N1"
};
let analytics; let firestore;let auth:Auth;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  auth = getAuth(app);

  // Access Firebase services using shorthand notation

  firestore = getFirestore(app);
}

export {analytics, firestore,auth};
