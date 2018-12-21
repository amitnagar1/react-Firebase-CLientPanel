import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhFWyxZlXP-alMBLc6Yz83lMk_E-RVXIw",
  authDomain: "reactclientpanel-db2ef.firebaseapp.com",
  databaseURL: "https://reactclientpanel-db2ef.firebaseio.com",
  projectId: "reactclientpanel-db2ef",
  storageBucket: "reactclientpanel-db2ef.appspot.com",
  messagingSenderId: "1039990760858"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

//Initialize firebase instance

firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//Create initial state
const initialState = {};

// Create store

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
