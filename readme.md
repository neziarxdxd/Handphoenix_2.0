# HANDY PHOENIX APPLICATION 

is a publication web app 

```
window.onload = function (){
var title_stories = "";
var content_stories = "".split(/\s+/).slice(0,7).join(" ");
var date_publish= ";"


  var doc =  `  <div class="card mb-3" style="max-width: 50rem;">
  <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/handyphoenix-623fa.appspot.com/o/folder_name%2Feinstein.jpg?alt=media&token=2052dd45-3c90-4a96-8c8e-e3e9f7451f19" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title_stories}</h5>
    <p class="card-text"></p>
    <p class="card-text"><small class="text-muted">Published : ${date_publish} </small></p>
  </div>
</div>  `

  $("#table_body").append();
}

```



```
<div class="card mb-3" style="max-width: 50rem;">
        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/handyphoenix-623fa.appspot.com/o/folder_name%2Feinstein.jpg?alt=media&token=2052dd45-3c90-4a96-8c8e-e3e9f7451f19" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
```