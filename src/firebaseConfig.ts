import { initializeFirebase,FirebaseAuth } from 'refine-firebase';
import { getAuth } from 'firebase/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyAi74QdT8kMmW_m5zBEbWzAAoXyYaw-9Xc',
  authDomain: 'refine-hack.firebaseapp.com',
  projectId: 'refine-hack',
  storageBucket: 'refine-hack.appspot.com',
  messagingSenderId: '202244375135',
  appId: '1:202244375135:web:3051de610d3c3ae79651ea',
  measurementId: 'G-TLTFTETBQ5',
};

export const firebaseApp = initializeFirebase(firebaseConfig);
export const authentication = getAuth(firebaseApp);
export const firebaseAuth = new FirebaseAuth();
