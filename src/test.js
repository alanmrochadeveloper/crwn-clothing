import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// firestore.collection('users').doc('sLyYl3n5ZkxXuZyfaLAi').collection('cartItems').doc('FnSiqrSolj113aVD93fZ');
// firestore.doc('/users/sLyYl3n5ZkxXuZyfaLAi/cartItems/FnSiqrSolj113aVD93fZ');
firestore.collection('/users/sLyYl3n5ZkxXuZyfaLAi/cartItems');
