import firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
   
  };
  firebase.initializeApp(config);
  const database=firebase.database();

  export { firebase, database as default} ;

// //   child_removed
// //    database.ref('Expenses').on('child_removed', (snapshot)=>[
// //        console.log(snapshot.key, snapshot.val())
// //    ])


// // child_changed
// //    database.ref('Expenses').on('child_changed', (snapshot)=>[s
// //        console.log(snapshot.key, snapshot.val())
// //    ])
// // child_added
//    database.ref('Expenses').on('child_added', (snapshot)=>[
//        console.log(snapshot.key, snapshot.val())
//    ])


//   //   database.ref('Expenses').once('value').then((snapshot)=>{
// //       const expenses=[];
// //       snapshot.forEach((childSnapshot)=>{
// //          expenses.push({
// //              id: childSnapshot.key,
// //              ...childSnapshot.val()
// //          })
// //       })
// //       console.log(expenses)
// //   }).catch((e)=>{
// //       console.log("something went wrong",e)
// //   })


// // database.ref('Expenses').on('value', (snapshot)=>{
// //     const expenses=[];
// //     snapshot.forEach((childSnapshot)=>{
// //        expenses.push({
// //            id: childSnapshot.key,
// //            ...childSnapshot.val()
// //        })
// //     })
// //     console.log(expenses)
// // })

//   // database.ref('Expenses').push({
// //     description: 'Grocerries',
// //     amount:1600,
// //     note: 'Should buy today',
// //     createdAt: 2200
// // })


//   //   database.ref('notes').push({
// //       title: 'TCourse topics',
// //       body: 'angular, python, javascript'
// //   })


//   //   const firebaseNotes={
// //       notes:{
// //           fndskjfew8r847:{
// //             title: 'This is a note',
// //             body: 'This is my note'
// //           },
// //           fdjfhwj3482734932:{
// //             title: 'This is 2nd note',
// //             body: 'This is my note'
// //           }
// //       }
// //   }

// // const notes = [{
// //    id: 5453,
// //    title: 'This is a note',
// //    body: 'This is my note'
// // },{
// //     id: 3453532,
//     // title: 'This is 2nd note',
//     // body: 'This is my note'
// // }];
// // database.ref('notes').set(notes);  



//   // const onValueChange = database.ref().on('value', (snapshot)=>{
// //     console.log(snapshot.val())
// // })

// // setTimeout(()=>{
// //     database.ref('age').set(21);
// // }, 4000);



// // database.ref().update({
// //     height: 185,
// //     class: 'S'
// // })

//   // database.ref().once('value').then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e)=>{
// //       console.log("failed to fetch data", e);
// // })




// //   database.ref().set({
// //       name: 'Andrew NG',
// //       age: 34,
// //       isSingle: true,
// //       location:{
// //           city: 'Massachusetts',
// //           state: 'USA'
// //       }
// //   }).then(()=>{
// //       console.log("Data is saved")
// //   }).catch((e)=>{
// //       console.log("Something went wrong wtf!",e)
// //   })

// // database.ref('isSingle').remove().then(()=>{
// //     console.log("data is removed successfully")
// // }).catch((error)=>{
// //     console.log("Something went wrong!", error)
// // })

// // database.ref().update({
// //     name: 'Andrew MIKE',
// //     age: 57,
// //     job: 'deep learner',
// //     isSingle: null
// // })

// // database.ref().update({
// //     'location/city': 'New York'
// // })

