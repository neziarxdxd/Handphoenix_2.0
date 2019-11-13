// global values
var admin_username,admin_password;
var download_link;
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






window.onload = function (){
    var uploader= document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');
    //List
    fileButton.addEventListener('change', function(e){
      var file = e.target.files[0];
      var storageRef=firebase.storage().ref('folder_name/' +file.name );

      var task =storageRef.put(file); 
      task.on('state_changed',
      function progress(snapshot){
          var percentage= (snapshot.bytesTransferred/snapshot.totalBytes) * 100;        
          uploader.value=percentage;
          },
          function error (err){
          },
          function complete(){
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        download_link=downloadURL

      });
      });
    });
}
var fb_tblAdmin=firebase.database().ref().child("tbl_Admin");
 /// LOG IN /////
fb_tblAdmin.on("value",snap =>{
  admin_username=snap.child("username").val();
  admin_password=snap.child("password").val();    
});

// LOGIN VERIFICATION //
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

var fb_tblArticle=firebase.database().ref().child("tbl_article");

function insertStory(){  
      var today = new Date();
      var TitleStories = document.getElementById("txt_Title").value;	
      var Comment = document.getElementById("txt_Comment").value;
      var Content = document.getElementById("txt_Content").value;
      var  date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // This is for storing data
      var PushStories = {
        title_story: TitleStories,
        content_story: Content,
        comment_story: Comment,
        publish_date: date,
        publish_time: time,
        image_link : download_link	
        } 

      fb_tblArticle.push(PushStories);
}


