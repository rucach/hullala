const firebaseConfig = {
    apiKey: "AIzaSyD5dChbmXiXSMdQ18TzHHFwFC_bERDd-XE",
    authDomain: "data-41efa.firebaseapp.com",
    databaseURL: "https://data-41efa-default-rtdb.firebaseio.com",
    projectId: "data-41efa",
    storageBucket: "data-41efa.appspot.com",
    messagingSenderId: "932781995741",
    appId: "1:932781995741:web:cf0a3d1a836a09501dcd34"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});}

//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}