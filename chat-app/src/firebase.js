// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { API_KEY, AppId, PROJECT_ID, SENDERID } from "./firebaseData";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "mychatapp-79307.firebaseapp.com",
  projectId: PROJECT_ID,
  storageBucket: "mychatapp-79307.appspot.com",
  messagingSenderId: SENDERID,
  appId: AppId,
  measurementId: "G-D8XN0RQCCW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// auth.useDeviceLanguage();
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();