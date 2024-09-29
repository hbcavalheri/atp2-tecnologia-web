// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsrsyqfgkJp7h6NlFYgYEURlb0Vb4LW1U",
  authDomain: "atp2-d772b.firebaseapp.com",
  projectId: "atp2-d772b",
  storageBucket: "atp2-d772b.appspot.com",
  messagingSenderId: "590054298592",
  appId: "1:590054298592:web:58c5f9dd0f65b355fa9185",
  measurementId: "G-9CPFSC6SWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);