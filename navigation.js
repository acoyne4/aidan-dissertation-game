var namex = getCookie("SMDCookie");

function submitForm(){
    console.log("SUBMIT FORM")
    namex = document.getElementById("usernamex").value;
    setCookie("SMDCookie",namex,7);
    window.location.href = "game.html";
}

function closeForm() {
    console.log("CLOSE FORM")
    namex = "anonymous";
    setCookie("SMDCookie",namex,7);
    window.location.href = "game.html";
}

// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

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
  console.log("str.replace", namex.replace(/\s/g,"") == "");
    if (isEmpty(namex) || namex=="anonymous"){
        console.log("No name saved", namex)
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