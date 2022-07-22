const firebaseConfig = {
    apiKey: "AIzaSyBrSOQU-6V7JQs1zoKE0cOERyKw0l5tPcw",
    authDomain: "kwitter-de760.firebaseapp.com",
    databaseURL: "https://kwitter-de760-default-rtdb.firebaseio.com",
    projectId: "kwitter-de760",
    storageBucket: "kwitter-de760.appspot.com",
    messagingSenderId: "179093654538",
    appId: "1:179093654538:web:3a8a7b1244dffe1b4de3f3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Adding User"
    });

}