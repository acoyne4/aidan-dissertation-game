var namex = getCookie("SMDCookie");
var time = getCookie("TimeCookie");
var id = getCookie("IdCookie");
console.log('This functions');

console.log('id ' + id);

var firebaseConfig = {
    apiKey: "AIzaSyAx149e4_U8sWHNoe8al65EepCD5wiPQ1c",
    authDomain: "aidan-dissertation.firebaseapp.com",
    projectId: "aidan-dissertation",
    storageBucket: "aidan-dissertation.appspot.com",
    messagingSenderId: "135016153618",
    appId: "1:135016153618:web:853ef8b1f458f3f5e24ecb",
    measurementId: "G-PDK9P9W750"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();
const docRefTime = firestore.collection("highScore").doc("time");

function submitForm() {
    namex = document.getElementById("usernamex").value;
    setCookie("SMDCookie", namex, 14);
    window.location.href = "game.html";
}

function closeForm() {
    namex = "anonymous";
    setCookie("SMDCookie", namex, 14);
    window.location.href = "game.html";
}


function gameRef() {
    if (isEmpty(namex) || namex == "anonymous") {
        window.location.href = "login.html";
    } else {
        window.location.href = "game.html";
    }

}

function isEmpty(str) {
    return (!str || str.length === 0);
}

function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() *
 charactersLength)));
   }
   return result.join('');
}
function reset_counter(seconds) {
    var value = (parseInt(getCookie("TimeCookie")) + seconds);
    console.log('id: ' + id);
    setCookie("TimeCookie", value, 14);
}

if (!id){
    setCookie("IdCookie", makeid(10), 14);
}
if (time) {
    var time = setInterval(function () {
        var counter = 0;
        counter++;
        console.log('id before reset_counter' + id);
        reset_counter(counter, id);
        docRefTime.set({[getCookie("IdCookie")] : parseInt(getCookie("TimeCookie"))});
        }, 1000);

} else {
    setCookie("TimeCookie", 0, 14);
}