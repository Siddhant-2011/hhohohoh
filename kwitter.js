function addUser(){
var saved_data=document.getElementById("user_name").value;
localStorage.setItem("user_name",saved_data);
window.location="kwitter_room.html"
}