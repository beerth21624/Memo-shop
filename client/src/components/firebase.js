import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD9NOpGTTFnvVLm7Q_aZaUxmC3RyZ6KRE4',
  authDomain: 'memo-shop-97711.firebaseapp.com',
  projectId: 'memo-shop-97711',
  storageBucket: 'memo-shop-97711.appspot.com',
  messagingSenderId: '559719904143',
  appId: '1:559719904143:web:c50dcd94279159a3e051fa',
};

const firebaseApp = initializeApp(firebaseConfig);
//กำหนดค่าเริ่มต้น

export const storage = getStorage(firebaseApp);
