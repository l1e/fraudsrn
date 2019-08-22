import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAFQhlKL-Cxa9d20VdSn7tmWG1O2RMtrUk",
    authDomain: "froudsolx.firebaseapp.com",
    databaseURL: "https://froudsolx.firebaseio.com",
    projectId: "froudsolx",
    storageBucket: "froudsolx.appspot.com",
    messagingSenderId: "1059780716760",
    appId: "1:1059780716760:web:995848c674d7aca6"
};

let app = Firebase.initializeApp(config);


export const db = app.database();