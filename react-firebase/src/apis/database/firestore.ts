import {firebaseConfig} from "../config"
import firebase from "firebase";

firebase.initializeApp(firebaseConfig); //firebase 초기화

const db = firebase.firestore()

const settings = { timestampsInSnapshots: true } as firebase.firestore.Settings;
db.settings(settings);

export default db;
