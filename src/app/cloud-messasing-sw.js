importScripts('https://www.gstatic.com/firebase/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId':'481605045150'

});
const messaging = firebae.messaging();