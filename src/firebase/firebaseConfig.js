// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGyV5_RDCWQ50gjSdOuCL6E_voSIKcQAY",
  authDomain: "fir-c976b.firebaseapp.com",
  projectId: "fir-c976b",
  storageBucket: "fir-c976b.appspot.com",
  messagingSenderId: "124489210989",
  appId: "1:124489210989:web:322a17b84f7e3e4480f364",
  measurementId: "G-Q2WHZY7YX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app