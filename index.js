  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBMz6LR0EmzolVp83wHQ35HHAnbw3iAuJ8",
    authDomain: "gym-management-system-97baa.firebaseapp.com",
    projectId: "gym-management-system-97baa",
    storageBucket: "gym-management-system-97baa.appspot.com",
    messagingSenderId: "569666864319",
    appId: "1:569666864319:web:2a1fa1f77e6d2f60bbf20a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services
const db= getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'user/' = document.getElementById("username").value),
    {
        username: document.getElementById("username").value
        email: document.getElementById("email").value
        PhoneNumber: document.getElementById("phone").value
    })
      alert
})