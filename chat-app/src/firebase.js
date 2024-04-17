// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7w4BpH43qickUrjd19EeIcQj2EI1O8es",
  authDomain: "mychatapp-79307.firebaseapp.com",
  projectId: "mychatapp-79307",
  storageBucket: "mychatapp-79307.appspot.com",
  messagingSenderId: "940971514082",
  appId: "1:940971514082:web:af2d6257910a3940b4a6bb",
  measurementId: "G-D8XN0RQCCW"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "mychatapp-79307.firebaseapp.com",
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_SENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// auth.useDeviceLanguage();
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();