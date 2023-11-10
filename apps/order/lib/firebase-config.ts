import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'process.env.apiKey',
  authDomain: 'process.env.authDomain',
  projectId: 'process.env.projectId',
  storageBucket: 'process.env.storageBucket',
  messagingSenderId: 'process.env.messagingSenderId',
  appId: 'process.env.appId',
  measurementId: 'process.env.measurementId',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('!!!!!!!!!!!!');
console.log(auth);
console.log('!!!!!!!!!!!!');
const provider = new GoogleAuthProvider();
console.log('@@@@@@@@@@@@@@@@@@@@');
console.log(provider);
console.log('@@@@@@@@@@@@@@@@@@@');
export { auth, provider };
