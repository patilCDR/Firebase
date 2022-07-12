import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBE0kZp8AY5I-lXSd69QRWnC2KEtW5Wzc8",
  authDomain: "dashboard-61c00.firebaseapp.com",
  projectId: "dashboard-61c00",
  storageBucket: "dashboard-61c00.appspot.com",
  messagingSenderId: "827186855932",
  appId: "1:827186855932:web:09a6e208b3b1c9b943fc79",
  measurementId: "G-FBWV1WY8LF",
  databaseURL:
    "https://console.firebase.google.com/project/dashboard-61c00/database/dashboard-61c00-default-rtdb/data/~2F",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseConfig);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
