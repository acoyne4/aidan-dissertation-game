var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var name = getCookie("SMDCookie");
var highScores = getCookie("HighScore");
var time = getCookie("TimeCookie")

var notBlock = true;
if (time) {
    var update = setInterval(function () {
        document.getElementById("time").innerHTML = "<b>" + Math.floor(time / 3600) +
            "</b>" + " hours, <b>" + Math.floor(time % 3600 / 60) + "</b> minutes "
            + "and <b>" + Math.floor(time % 3600 % 60) + "</b> seconds";
        time = getCookie("TimeCookie")
    }, 1000);
}
if (highScores) {
    document.getElementById("firstName").innerHTML = highScores[1]['Name'];
    document.getElementById("secondName").innerHTML = highScores[2]['Name'];
    document.getElementById("thirdName").innerHTML = highScores[3]['Name'];
    document.getElementById("fourthName").innerHTML = highScores[4]['Name'];

    document.getElementById("firstValue").innerHTML = highScores[1]['Value'];
    document.getElementById("secondValue").innerHTML = highScores[2]['Value'];
    document.getElementById("thirdValue").innerHTML = highScores[3]['Value'];
    document.getElementById("fourthValue").innerHTML = highScores[4]['Value'];
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// firebase.analytics();

var firestore = firebase.firestore();

const docRef = firestore.collection("highScore").doc("HighScore");

const highScoreRefs = firebase.firestore().collection('highScore');
highScoreRefs.limit(4).get()
    .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        highScores = data[0];
        document.getElementById("firstName").innerHTML = highScores[1]['Name'];
        document.getElementById("secondName").innerHTML = highScores[2]['Name'];
        document.getElementById("thirdName").innerHTML = highScores[3]['Name'];
        document.getElementById("fourthName").innerHTML = highScores[4]['Name'];

        document.getElementById("firstValue").innerHTML = highScores[1]['Value'];
        document.getElementById("secondValue").innerHTML = highScores[2]['Value'];
        document.getElementById("thirdValue").innerHTML = highScores[3]['Value'];
        document.getElementById("fourthValue").innerHTML = highScores[4]['Value'];

        isPaused = false;
    });


function jump() {
    if (character.classList == "animate") {
        return
    }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}


function toggle_visibility(id) {
    document.getElementById("score").style.visibility = "hidden"
}

function restart() {
    counter = 0;
    location.reload()
}

var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (notBlock) {
        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
            notBlock = false;
            if (highScores) {
                const tempScore = Math.floor(counter / 100)
                if (tempScore > highScores[4]['Value']) {
                    var i = 4;
                    while (i > 1 && tempScore > highScores[i - 1]['Value']) {
                        i = i - 1;
                    }
                    for (var k = 4; k > i; k--) {
                        const tempValue = highScores[k - 1]['Value'];
                        const tempName = highScores[k - 1]['Name'];
                        highScores[k]['Value'] = tempValue;
                        highScores[k]['Name'] = tempName;
                    }
                    highScores[i]['Value'] = tempScore;
                    highScores[i]['Name'] = name;
                    docRef.update(
                        highScores)
                }
            }
            highScore(counter);
            toggle_visibility();
            document.getElementById("game-over").innerHTML = "Game Over | " +
                "Score: " + Math.floor(counter / 100) + "<br />"
                + "High Score: " + Math.floor(window.localStorage.getItem('highScore') / 100) +
                "<br />" + "Click screen to restart";
            setCookie("HighScore", highScores, 1);
        } else {
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
        }
    }
}, 10);

function highScore(counter) {
    highScore = window.localStorage.getItem('highScore')


    if (highScore == null) {
        window.localStorage.setItem('highScore', '' + 0)
        return;
    }
    if (highScore < counter) {
        window.localStorage.setItem('highScore', '' + counter)
    }
    return;
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


function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

