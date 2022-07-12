import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBg8JHYWyqqJRJ1RwzNZQn7kAEIWdWTjXw",
  authDomain: "admin-app-59dcc.firebaseapp.com",
  projectId: "admin-app-59dcc",
  storageBucket: "admin-app-59dcc.appspot.com",
  messagingSenderId: "208315591950",
  appId: "1:208315591950:web:d154f9db339c4efca2bb5f",
  databaseURL: "https://admin-app-59dcc-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
