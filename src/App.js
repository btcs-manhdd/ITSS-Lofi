import { useContext } from "react";
import Audio from "./component/Audio";
import Background from "./component/Background";
import Navbar from "./component/Navbar";
import Menu from "./component/menu/Menu";
import ItemModal from "./component/modal/ItemModal";
import { ThemeContext } from "./context";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8usywzZ8wMjB4cHMLOAAyIe8dsZNdnpk",
  authDomain: "lofi-chill-fa0cb.firebaseapp.com",
  projectId: "lofi-chill-fa0cb",
  storageBucket: "lofi-chill-fa0cb.appspot.com",
  messagingSenderId: "598692623663",
  appId: "1:598692623663:web:312bd52fc4e8b153b95dda",
  measurementId: "G-4DJNG105N6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const { isRunning, currentTime } = useContext(ThemeContext);

  if (isRunning) {
    document.title = convertTime(currentTime);
  } else {
    document.title = "Lofi";
  }
  return (
    <div className="relative min-h-screen bg-transparent-b-80">
      <Navbar />
      <div className="absolute inset-0">
        <Background />
      </div>
      <Audio />
      <Menu />
      <ItemModal />
    </div>
  );
}

function convertTime(seconds) {
  var minus = Math.floor(seconds / 60);
  var second = seconds - minus * 60;
  return `${toStringTime(minus)}:${toStringTime(second)}`;
}

function toStringTime(number) {
  if (number < 10 && number >= 0) {
    return `0${number}`;
  } else if (number < 0) {
    return "00";
  } else return number.toString();
}

export default App;
