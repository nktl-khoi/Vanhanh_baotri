import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDdrcz5My-ugI8V73RFizbIOXJnqLY2Dts',
  authDomain: 'lang-center.firebaseapp.com',
  projectId: 'lang-center',
  storageBucket: 'lang-center.appspot.com',
  messagingSenderId: '293752566191',
  appId: '1:293752566191:web:313f279c52406341287f5a',
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, analytics, app };
