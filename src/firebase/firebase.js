import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('There was an error fetching data', e);
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push(
//     {
//         description: 'Rent',
//         note: 'test',
//         amount: 1234,
//         createdAt: 0
//     });

// database.ref('expenses').push(
//     {
//         description: 'Coffee',
//         note: '',
//         amount: 300,
//         createdAt: 0
//     });

// database.ref('expenses').push(
//     {
//         description: 'Gum',
//         note: '',
//         amount: 100,
//         createdAt: 0
//     });

            

// database.ref('notes').push(
//     {
//         title: 'Course topics',
//         body: 'React native'
//     });

// database.ref('notes/-L5uMFTjpTiwWGnsAjT6').update({
//     body: 'buy food'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Erick Noriega',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Cuernavaca',
//         country: 'Mexico'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     })
//     .then(() => {
//         console.log('Cambio');
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('There was an error and issingle wasnt removed', e);
//     });

