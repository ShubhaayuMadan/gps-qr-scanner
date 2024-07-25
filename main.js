const firebaseConfig = {
    apiKey: "AIzaSyBob0yrBT5xgxYrBzmxOt1ofHmkFOREpvg",
    authDomain: "qr-code-d740a.firebaseapp.com",
    databaseURL: "https://qr-code-d740a-default-rtdb.firebaseio.com",
    projectId: "qr-code-d740a",
    storageBucket: "qr-code-d740a.appspot.com",
    messagingSenderId: "291183783942",
    appId: "1:291183783942:web:17abe20670dfd281559387"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("qr-code").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('username');
    var latitudevalue = getElementVal('latitude');
    var longitudevalue = getElementVal('longitude');

    const Geolocation(name, latitude, longitude);

    
  }

  const saveGeolocation = (name, latitude, longitude) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        latitude : latitude,
        longitude : longitude,
    });


  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };
  
