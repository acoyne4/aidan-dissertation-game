// import name from './globalVariables.js';

function submitForm(){
    console.log("SUBMIT FORM 2")
    // console.log(name)
    window.location.href = "game.html";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function gameRef(){
    if (name == "unknown"){
        window.location.href = "login.html";
        console.log("UNKNOWN")
    }
       
   else
       window.location.href = "game.html";
}