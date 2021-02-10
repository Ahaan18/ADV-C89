function get(){
    x = localStorage.getItem("It was clicked");
document.getElementById("score").innerHTML = "Score: "+x;
}
function goback(){
    window.location = "index.html";
}