import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBG0owy0ym9WKLvwKtMZ791ELsuHVKQraU",
    authDomain: "thenextlawyer4.firebaseapp.com",
    databaseURL: "https://thenextlawyer4.firebaseio.com",
    projectId: "thenextlawyer4",
    storageBucket: "",
    messagingSenderId: "968732916677"
};

class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    // Sign-Up
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
    // Log-In
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    // Sign-Out
    doSignOut = () => this.auth.signOut();
    // Password-Reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    // Password-Forget
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
  
export default Firebase;