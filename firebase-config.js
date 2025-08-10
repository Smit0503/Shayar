// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase Config (restricted key)
const firebaseConfig = {
  apiKey: "AIzaSyAitTeXucaql6jlp5K8OWFqioDc7v2wi48",
  authDomain: "notes-f5ef8.firebaseapp.com",
  projectId: "notes-f5ef8",
  storageBucket: "notes-f5ef8.appspot.com",
  messagingSenderId: "89059717516",
  appId: "1:89059717516:web:9687b741abc3a65816a6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
