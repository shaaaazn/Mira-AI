import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// REPLACE these placeholders with your actual Firebase project config keys from Google Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBJ3M_pM2BpHLunKh_AZh0rbYPivNkS1Y4",
  authDomain: "mira-ai-75e3d.firebaseapp.com",
  projectId: "mira-ai-75e3d",
  storageBucket: "mira-ai-75e3d.firebasestorage.app",
  messagingSenderId: "950132260310",
  appId: "1:950132260310:web:1d2e5922d2ecc4275ef877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication Service
export const auth = getAuth(app);

// Setup Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore Database
export const db = getFirestore(app);
