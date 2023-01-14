

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getDatabase,ref, onValue,set,push, remove } from "firebase/database";
// const {initializeApp} = require('firebase/app');
const {initializeAppCheck, ReCaptchaV3Provider} = require('firebase/app-check');

// const app = initializeApp({
  // Your firebase configuration object
// });

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(app, {
  // provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  // isTokenAutoRefreshEnabled: true,
// });
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// import {ref, onValue, push, update, remove} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM7Pa8u84TjaAzwSW0_egNMNLQM7dNWt0",
  authDomain: "adriancodes-9892d.firebaseapp.com",
  projectId: "adriancodes-9892d",
  storageBucket: "adriancodes-9892d.appspot.com",
  messagingSenderId: "384122168880",
  appId: "1:384122168880:web:274f6a2a0da70d4a5daff5",
  measurementId: "G-LDHRZBD42Y",
  databaseURL: "https://adriancodes-9892d-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LexG_YjAAAAADYr-4ztoZg6Az-b_qaHoNFlXn7o'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// read data with onValue
// const starCountRef = ref(db, 'users/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });


// write with  set()
export default function sendMessage(message) {
  console.log('Sendmessage message', message);
  const timestamp = getTimeStamp();
      const userId = `${message.firstName}-${message.lastName}-${timestamp}`;
      console.log('userId Send()', timestamp);
  console.log('userId', userId)
  // const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    first_name: message.firstName,
    last_name: message.lastName,
    email: message.email,
    company: message.company,
    phone_number: message.phoneNumber,
    hiring_goal: message.hiringGoal,
    position_details: message.positionDetails,
    project_type: message.projectType,
    budget: message.budget,
    message: message.message,
    city: message.city,
    state: message.state,
    messageTime: timestamp
  })
    .then(() => {
      // Data saved successfully!
      alert('data updated!');
    })
    .catch((error) => {
      // The write failed...
      alert(error);
    });;
}
function getTimeStamp() {
  //  Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"
  var today = new Date(),
    timestamp =
      today.getHours() +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds() +
      ':' +
      today.getMilliseconds() +
      '-';
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log('today getimestamp()', today)
  return timestamp;
}

export function Send(message){
  const timestamp = getTimeStamp();

  console.log('Send(message) mess', message);
    const userId = `${message.firstName}-${message.lastName}-${timestamp}`;
    console.log('userId Send()', timestamp);
  push(ref(db, '/messages'), {
    firstName: message.firstName,
    lastName: message.lastName,
    email: message.email,
    company: message.company,
    phoneNumber: message.phoneNumber,
    hiringGoal: message.hiringGoal,
    positionDetails: message.positionDetails,
    projectType: message.projectType,
    budget: message.budget,
    message: message.message,
    city: message.city,
    state: message.state,
    timestamp: timestamp
  });
}
// export function clearTodos() {
  // remove(ref(db, '/todos'));
// }
function update () {
    update(ref(db, 'users/' + username), {          
      username: username,
      email: email  
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');    
  })  
      .catch((error) => {
          // The write failed...
          alert(error);
      });
  };

const updateMessage = (message) => {
  // setDone(isChecked);
  update(ref(db, '/todos'), {
    [id]: {
      title,
      done: !doneState,
    },
  });
};
// const onCheck = (isChecked) => {
//   setDone(isChecked);
//   update(ref(db, '/todos'), {
//     [id]: {
//       title,
//       done: !doneState,
//     },
//   });
// };

// useEffect(() => {
//   return onValue(ref(db, '/todos'), (querySnapShot) => {
//     let data = querySnapShot.val() || {};
//     let todoItems = {...data};
//     setTodos(todoItems);
//   });
// }, []);


// {
//   "users": {
//     "alovelace": {
//       "name": "Ada Lovelace",
//       "contacts": { "ghopper": true },
//     },
//     "ghopper": { ... },
//     "eclarke": { ... }
//   }
// }


// // {
// //   // Chats contains only meta info about each conversation
// //   // stored under the chats's unique ID
//   "chats": {
//     "one": {
//       "title": "Historical Tech Pioneers",
//       "lastMessage": "ghopper: Relay malfunction found. Cause: moth.",
//       "timestamp": 1459361875666
//     },
//     "two": { ... },
//     "three": { ... }
//   },

// //   // Conversation members are easily accessible
// //   // and stored by chat conversation ID
//   "members": {
//     // we'll talk about indices like this below
//     "one": {
//       "ghopper": true,
//       "alovelace": true,
//       "eclarke": true
//     },
//     "two": { ... },
//     "three": { ... }
//   },

// //   // Messages are separate from data we may want to iterate quickly
// //   // but still easily paginated and queried, and organized by chat
//   // conversation ID
  
//   "messages": {
//     "one": {
//       "m1": {
//         "name": "eclarke",
//         "message": "The relay seems to be malfunctioning.",
//         "timestamp": 1459361875337
//       },
//       "m2": { ... },
//       "m3": { ... }
//     },
//     "two": { ... },
//     "three": { ... }
//   }
// // }



// // // An index to track Ada's memberships
// {
//   "users": {
//     "alovelace": {
//       "name": "Ada Lovelace",
//       // Index Ada's groups in her profile
//       "groups": {
//          // the value here doesn't matter, just that the key exists
//          "techpioneers": true,
//          "womentechmakers": true
//       }
//     },
//     ...
//   },
//   "groups": {
//     "techpioneers": {
//       "name": "Historical Tech Pioneers",
//       "members": {
//         "alovelace": true,
//         "ghopper": true,
//         "eclarke": true
//       }
//     },
//     ...
//   }
// }