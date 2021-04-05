var character = document.getElementById("character");
var block = document.getElementById("block");
var first = document.getElementById("first");
var counter=0;
var name = "unknown";

var notBlock = true;

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
        console.log("data:",data);
        console.log("data[0][2]:",data[0][2]);
        first.innerHTML = data[0][2]['Name'];

    });


function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}



function toggle_visibility(id) {
    document.getElementById("score").style.visibility = "hidden"
}

function restart(){
    counter=0;
    location.reload()
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(notBlock) {
            if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            console.log("counter"+counter)
            docRef.update({
            "1": {"Name":"Leon",
                "Value":Math.floor(counter/100)}
        })
            highScore(counter);
            toggle_visibility();
            document.getElementById("game-over").innerHTML = "Game Over | " +
                "Score: " + Math.floor(counter/100) + "<br />"
                + "High Score: " + Math.floor(window.localStorage.getItem('highScore')/100) +
                "<br />" + "Click screen to restart";
            notBlock=false;
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }
}, 10);

function highScore(counter) {
    highScore = window.localStorage.getItem('highScore')


    if (highScore == null){
        window.localStorage.setItem('highScore','' + 0)
        return;
    }
    if (highScore < counter)
    {
        window.localStorage.setItem('highScore',''+ counter)    }
   return;
}



