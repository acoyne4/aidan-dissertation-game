var name = getCookie("SMDCookie");

function submitForm(){
    console.log("SUBMIT FORM")
    const name = document.getElementById("usernamex").value;
    setCookie("SMDCookie",name,7);
    window.location.href = "game.html";
}

function closeForm() {
    console.log("CLOSE FORM")
    const name = "anonymous";
    setCookie("SMDCookie",name,7);
    window.location.href = "game.html";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// var input = document.getElementById("usernamex");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   console.log("EVENT")
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     console.log("Click 13")
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("formbutton").click();
//   }
// });

function gameRef(){
  console.log("str.replace", name.replace(/\s/g,"") == "");
    if (isEmpty(name) || name=="anonymous"){
        console.log("No name saved")
        window.location.href = "login.html";
    }
   else{
       console.log("Name saved")
       window.location.href = "game.html";
    }

}

function isEmpty(str) {
  return (!str || str.length === 0 );
}
 
 function setCookie(name,value,days) {
     if (days) {
         var date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+"; path=/";
 }

 function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
      }
     }
   return "";
 }