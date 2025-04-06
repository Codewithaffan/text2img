import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCi1XIEV9_8kRL-xTHKcEkE258dizce6yE",
  authDomain: "text-to-image-babe6.firebaseapp.com",
  projectId: "text-to-image-babe6",
  storageBucket: "text-to-image-babe6.appspot.com",
  messagingSenderId: "120658471738",
  appId: "1:120658471738:web:32f63fc5fc2410acecbe03",
  measurementId: "G-FRDYEK06N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
