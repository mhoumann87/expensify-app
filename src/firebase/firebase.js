import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAGhsUI45xBEgBM2Alhwksb0t7VTTxnnt4",
  authDomain: "expensify-249f6.firebaseapp.com",
  databaseURL: "https://expensify-249f6.firebaseio.com",
  projectId: "expensify-249f6",
  storageBucket: "expensify-249f6.appspot.com",
  messagingSenderId: "35207720975"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "Michael Houmann",
  age: 50,
  isSingle: true,
  location: {
    city: "Herlufmagle",
    contry: "Denmark",
    street: "Birkevaenget"
},

});

// database.ref().set("This is my data");

database.ref("age").set({
  age: 49
});

database.ref("location/city").set("Copenhagen");

database.ref("attributes").set({
  height: 182,
  weight: 90
})