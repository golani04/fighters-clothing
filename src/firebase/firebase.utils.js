import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// this API is a public, we'll handle security inside a firebase
const config = {
	apiKey: 'AIzaSyBoDtf6zcuPPQJ3rJ9JU4DZ5c2LD-WBnYk',
	authDomain: 'fighter-clothing-react.firebaseapp.com',
	databaseURL: 'https://fighter-clothing-react.firebaseio.com',
	projectId: 'fighter-clothing-react',
	storageBucket: 'fighter-clothing-react.appspot.com',
	messagingSenderId: '747338116404',
	appId: '1:747338116404:web:eba92eb301a5b262088961',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google sin-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
