import firebase from "firebase/compat/app";

var firebaseConfig = {
  apiKey: "AIzaSyDGZcYG80BV-HfhIAOQeWLClZ5g3EXr9ac",
  authDomain: "nuxttodoapp-f722c.firebaseapp.com",
  projectId: "nuxttodoapp-f722c",
  storageBucket: "nuxttodoapp-f722c.appspot.com",
  messagingSenderId: "472212496694",
  appId: "1:472212496694:web:18723e1210aba833875397",
  measurementId: "G-71ZZHJXQHS",
};

var app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
