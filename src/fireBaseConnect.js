 import * as firebase from 'firebase';
// Tạo dât config
 const firebaseConfig = {
  apiKey: "AIzaSyDg1LLrxNQ6J6HVPfVR6n316g27VXzkTSM",
  authDomain: "webfilm-aaac3.firebaseapp.com",
  databaseURL: "https://webfilm-aaac3.firebaseio.com",
  projectId: "webfilm-aaac3",
  storageBucket: "webfilm-aaac3.appspot.com",
  messagingSenderId: "294861936390",
  appId: "1:294861936390:web:d3be0044b9e9293f9eb087"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('DataNote/')






// var data = firebase.database().ref('DataNote/note2');
// data.set({
//   id: 3,
//   noteContent: 'No dung note 3',
//   title: 'Tieu de 3'
// })

// // once() 1 khi lấy đc dữ liệu thì in ra function
// data.once('value').then(function(snapshot) {
//   console.log(snapshot.val());
  
// })