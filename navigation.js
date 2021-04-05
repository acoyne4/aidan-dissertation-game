function submitForm(){
    console.log("SUBMIT FORM 2")
    
    const name = document.getElementById("usernamex").value;
    setCookie("SMDCookie",name,7);
    console.log("Name: ", name);
    console.log("COOKIE: ", getCookie("SMDCookie"));
    const tempX = getCookie("SMDCookie");
    console.log("COOKIE2: "+ tempX);
    console.log(document.cookie);
    // console.log(window.myGlobal)
    window.location.href = "game.html";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function gameRef(){
    if (name =="unknown"){
        window.location.href = "login.html";
        console.log("UNKNOWN")
    }
       
   else
       window.location.href = "game.html";
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