// Your web app's Firebase configuration
var admin_username,admin_password;
var firebaseConfig = {
    apiKey: "AIzaSyCTz9gyBF0SddLL5hCm1-3jS-R0nFwidZM",
    authDomain: "handyphoenix-623fa.firebaseapp.com",
    databaseURL: "https://handyphoenix-623fa.firebaseio.com",
    projectId: "handyphoenix-623fa",
    storageBucket: "handyphoenix-623fa.appspot.com",
    messagingSenderId: "229651722370",
    appId: "1:229651722370:web:daf1814ae10fe0995a449b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var fb_tblAdmin=firebase.database().ref().child("tbl_Admin");
  fb_tblAdmin.on("value",snap =>{
    admin_username=snap.child("username").val();
    admin_password=snap.child("password").val();    
    });

  function loginNow(){
      var username= document.getElementById("txtUsername").value;
      var password = document.getElementById("txtPassword").value;
      
      if (username==admin_username && password ==admin_password){
          console.log("SUCCESS");
      }
      else{
          console.log("ISA PA LORD");
          document.getElementById("txtUsername").value="ULET";
        }
  }

