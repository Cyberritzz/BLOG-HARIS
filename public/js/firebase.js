let firebaseConfig = {
    apiKey: "AIzaSyBXiryM8a_U4adJ85eQCOiGXMEFX2ZAdsE",
    authDomain: "haris-de7dc.firebaseapp.com",
    projectId: "haris-de7dc",
    storageBucket: "haris-de7dc.appspot.com",
    messagingSenderId: "988820975778",
    appId: "1:988820975778:web:16d63a8ba62568fccda7fb"
  };

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}