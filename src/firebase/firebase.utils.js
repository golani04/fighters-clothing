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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error(`Failed to create a user. Error: ${error.message}`);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google sin-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
