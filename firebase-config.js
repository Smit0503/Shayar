 // Firebase Imports
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } 
      from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
    import { getFirestore, collection, addDoc, getDocs, query, where } 
      from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    // Your Firebase Config
    const firebaseConfig = {
      apiKey: "AIzaSyAitTeXucaql6jlp5K8OWFqioDc7v2wi48",
      authDomain: "notes-f5ef8.firebaseapp.com",
      projectId: "notes-f5ef8",
      storageBucket: "notes-f5ef8.appspot.com",
      messagingSenderId: "89059717516",
      appId: "1:89059717516:web:9687b741abc3a65816a6a9",
      measurementId: "G-9RYE98FCN5"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
