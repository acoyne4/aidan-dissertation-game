var namex = getCookie("SMDCookie");
var time = getCookie("TimeCookie");
function submitForm() {
    namex = document.getElementById("usernamex").value;
    setCookie("SMDCookie", namex, 7);
    window.location.href = "game.html";
}

function closeForm() {
    namex = "anonymous";
    setCookie("SMDCookie", namex, 7);
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

function reset_counter(seconds) {
    var value = (parseInt(getCookie("TimeCookie")) + seconds);
    setCookie("TimeCookie", value, 7);
}

if (time) {
    var time = setInterval(function () {
        var counter = 0;
        counter++;
        reset_counter(counter);
    }, 1000);

} else {
    setCookie("TimeCookie", 0, 7);
}