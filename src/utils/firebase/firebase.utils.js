// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVuXIrlcNLkHK1qKhmBOpSXvbLcbhHSXE",
  authDomain: "clothing-db-7f271.firebaseapp.com",
  projectId: "clothing-db-7f271",
  storageBucket: "clothing-db-7f271.appspot.com",
  messagingSenderId: "1010106630296",
  appId: "1:1010106630296:web:bfbb9b5bf4c7eda4ea90ed"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserdocumentfromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("1", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("2", userSnapshot);
  console.log("2", userSnapshot.exists());
  //if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //if userdata doesnot exixts
  return userDocRef;

  //else
};
