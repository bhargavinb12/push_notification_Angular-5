import { Injectable, APP_ID, ContentChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Token } from '@angular/compiler';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} 
from 'angularfire2/firestore';
import { tokenKey } from '@angular/core/src/view';
import { by } from 'protractor';
import { ECHILD } from 'constants';

@Injectable()
export class MessagingService {

 messaging = firebase.messaging()
 currentMessage = new BehaviorSubject(null)

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
  // this.getPermission();
   }


  updateToken(token) {
   this.afAuth.authState.take(1).subscribe(user => {
      if (!user) return;
     const data = { [user.uid]:token }
     this.db.object('fcmTokens/').update(data)
    })
  }

  getPermission() {
          this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.',this.messaging.getToken());
        return this.messaging.getToken()
      })
      .then(token => {
              console.log(token)
              var appid = token
             // console.log(appid)
       this.updateToken(token)
      
       ///Save tokens as objects
       //this.db.object('/Tokens').set({
       //token : token,
       // uid : firebase.auth().currentUser.uid,
      // })
        
       })
      .catch((err) => {
       console.log('Unable to get permission to notify.', err);
      });
    }
    
      
        
    
    removesubscription(){
     this.messaging.getToken()   
     
     .then((token) => {
       this.messaging.deleteToken(token)
      //  console.log(this.db.list('fcmTokens/'+localStorage.getItem("userUid")).remove())
      })
      .then(()=> this.db.list('fcmTokens/'+localStorage.getItem("userUid")).remove() )
      console.log('hffff')
      return this.messaging.getToken()
      }
      
   receiveMessage() {
       this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.currentMessage.next(payload)
    });

   }
}