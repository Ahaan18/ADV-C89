score = 0;
function update(){
    score++;
    document.getElementById("score").innerHTML = "Score: "+score;
}
function save(){
    localStorage.setItem("It was clicked", score);
}
function next(){
    window.location = "activity2.html";
}