// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwx3I0gb6UTACYawsaMvYvK0AOCEYgzs",
  authDomain: "booking-3878a.firebaseapp.com",
  databaseURL: "https://booking-3878a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "booking-3878a",
  storageBucket: "booking-3878a.firebasestorage.app",
  messagingSenderId: "611114717520",
  appId: "1:611114717520:web:4768cb8a7b8465f99fdc55"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
