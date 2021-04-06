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

var highScores;

highScoreRefs.limit(4).get()
    .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("highScores: ", data[0])

        setCookie("HighScore",data[0],1);
    });


function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}