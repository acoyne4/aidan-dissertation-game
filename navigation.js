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

function gameRef(){
  console.log("name: ", name);
  console.log("typeof(name)", typeof(name));
  console.log("isempty(): ", isEmpty(name));
  console.log("isBlank(): ", isBlank(name));
  console.log("name.isempty(): ", name.isEmpty());
  console.log("str.replace", name.replace(/\s/g,"") == "");
  console.log("********* CHANGE ***************");
  name="Leon"
  console.log("name: ", name);
  console.log("typeof(name)", typeof(name));
  console.log("isempty(): ", isEmpty(name));
  console.log("isBlank(): ", isBlank(name));
  console.log("name.isempty(): ", name.isEmpty());
  console.log("str.replace", name.replace(/\s/g,"") == "")
    if (name){
      console.log("unknown");
        // window.location.href = "login.html";
    }
       
   else
   console.log("else")
      //  window.location.href = "game.html";
}

function isEmpty(str) {
  return (!str || str.length === 0 );
}

function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}

String.prototype.isEmpty = String.prototype.isEmpty || function() {
  return !(!!this.trim().length);
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