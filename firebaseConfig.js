// global values
var admin_username,admin_password;
// Your web app's Firebase configuration
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
  // FOR ADMIN
  var fb_tblAdmin=firebase.database().ref().child("tbl_Admin");
  fb_tblAdmin.on("value",snap =>{
    admin_username=snap.child("username").val();
    admin_password=snap.child("password").val();    
    });

  function loginNow(){
      var username= document.getElementById("inputEmail").value;
      var password = document.getElementById("inputPassword").value;
      
      if (username==admin_username && password ==admin_password){
          console.log("SUCCESS");
          location.href = "admin_main.html";
          $('#success.toast').toast('show');
      }
      else{
          console.log("ISA PA LORD");      
          $('#wrong.toast').toast('show');      
          }
}
// FOR 

