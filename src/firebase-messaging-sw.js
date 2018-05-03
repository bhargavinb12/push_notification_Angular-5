importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-database.js');

firebase.initializeApp({
  'messagingSenderId': '378401206416'
});

const messaging = firebase.messaging();