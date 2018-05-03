const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.fcmSend = functions.database.ref('/items').onCreate(event => {


  const message = event.data.val()
  const userId  = event.params.userId

  const payload = {
        notification: {
          title: items.title,
          body: items.description,
          icon: "https://placeimg.com/250/250/people"
        }
      };


   admin.database()
        .ref(`/fcmTokens/${userId}`)
        .once('value')
        .then(token => token.val() )
        .then(userFcmToken => {
          return admin.messaging().sendToDevice(userFcmToken, payload)
        })
        .then(res => {
          console.log("Sent Successfully", res);
          return fcmSend
        })
        .catch(err => {
          console.log(err);
        });

});