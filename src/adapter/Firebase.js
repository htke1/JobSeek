import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: "AIzaSyAoYTEgKgn4xd7JJnxIDH_l1Q5tVb4S4Zo",
    authDomain: "intern-job-project.firebaseapp.com",
    projectId: "intern-job-project",
    storageBucket: "intern-job-project.appspot.com",
    messagingSenderId: "269510451520",
    appId: "1:269510451520:web:886f1f11d53f2341589aa5",
    measurementId: "G-Y0NVFNQ759"
  };
firebase.initializeApp(firebaseConfig);
var storage= firebase.storage();
export const auth = firebase.auth();
export default storage;