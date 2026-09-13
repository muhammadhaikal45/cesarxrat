// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set, push, onDisconnect, serverTimestamp, remove, get, child, update }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUi4Mln618DzeMWC6AU0VRUAVE65TXWiY",
    authDomain: "cesarxrat-1f53c.firebaseapp.com",
    databaseURL: "https://cesarxrat-1f53c-default-rtdb.firebaseio.com",
    projectId: "cesarxrat-1f53c",
    storageBucket: "cesarxrat-1f53c.firebasestorage.app",
    messagingSenderId: "199773283777",
    appId: "1:199773283777:web:9169150be954756898fb40"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
    db, auth,
    ref, onValue, set, push, onDisconnect, serverTimestamp, remove, get, child, update,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile
};
