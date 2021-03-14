import { firebaseConfig } from '/firebaseconfig.js'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit

function submitForm(e){

  e.preventDefault();
  //get values

  var name = getInputVal('name');
  var email = getInputVal('email');
  var details = getInputVal('details');
  //var type = getInputVal('type');
  //var position = getInputVal('position');

  //save message
  saveMessage(name,email,details);
//saveMessage(name,email,details,type,position);

  //show response
  console.log('Your message has been sent.');
  $('#alert').removeClass('is-hidden');

  setTimeout(function(){
  $('#alert').addClass('is-hidden');
  },3000);

  //clear form
  document.getElementById('contactform').reset();
}
document.getElementById('contactform').addEventListener('submit',submitForm);


// FUNCTIONS

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// save message to firebasejs
function saveMessage(name,email,details){
  var newMesssageRef = messagesRef.push();
  newMesssageRef.set({
    name: name,
    email: email,
    details: details,
    //type: type,
    //position:position
  });
}
