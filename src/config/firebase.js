// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
 import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7LmxPz02Oc6l4uu2EM2rgYv7VLoCHKho",
//   authDomain: "movie-management-8de5f.firebaseapp.com",
//   projectId: "movie-management-8de5f",
//   storageBucket: "movie-management-8de5f.appspot.com",
//   messagingSenderId: "721490067903",
//   appId: "1:721490067903:web:caab17b542b04a9cf7610a",
//   measurementId: "G-FX2YDE0R0D",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const storage = getStorage(app);

// export { storage };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8CwOXI-p2ekrlK0rfbnp6lEyNtKtzG4U",
  authDomain: "aurora-auction-c79f2.firebaseapp.com",
  projectId: "aurora-auction-c79f2",
  storageBucket: "aurora-auction-c79f2.appspot.com",
  messagingSenderId: "588464827782",
  appId: "1:588464827782:web:62c8e1e2f7ac6610641007",
  measurementId: "G-06CXZ8XZS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };