import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD2VCUFyCES_khOJdP338q2heQtFUv_pwE',
	authDomain: 'crwn-db-8975e.firebaseapp.com',
	projectId: 'crwn-db-8975e',
	storageBucket: 'crwn-db-8975e.appspot.com',
	messagingSenderId: '201955869717',
	appId: '1:201955869717:web:b91f7b2e8302caff0f7a1c',
	measurementId: 'G-FSVKV0X5B8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
