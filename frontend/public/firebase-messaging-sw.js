// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyCcszwsyG0TBnQR0rrVmSDbH5ifcRLcyew',
  authDomain: 'bms-bup-dev.firebaseapp.com',
  projectId: 'bms-bup-dev',
  storageBucket: 'bms-bup-dev.appspot.com',
  messagingSenderId: '965184613088',
  appId: '1:965184613088:web:50c33f10fe7de8ebfabe85',
  measurementId: 'G-TXMD66SQXH',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
