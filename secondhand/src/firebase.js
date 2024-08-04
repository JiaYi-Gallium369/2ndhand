import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA40pjXgpLwA1MpV_KjFPmwIVxLJWPwIfw",
    authDomain: "second-hand-2e043.firebaseapp.com",
    projectId: "second-hand-2e043",
    storageBucket: "second-hand-2e043.appspot.com",
    messagingSenderId: "410457117028",
    appId: "1:410457117028:web:1476abc302694c6a7cea71",
    measurementId: "G-L8B84SCMGM"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

