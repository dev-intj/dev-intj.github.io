var ready = () => {

    $('.tab').on('click', (e) => {
        var tabName = (e.currentTarget.attributes[0].nodeValue);
        removeActive();
      hideAll();
      console.log(tabName)
      $('#' + tabName).addClass('is-active');
      $('#' + tabName + '-content').removeClass('is-hidden');
    });

    var removeActive = () => {
      $('li').each(function() {
        $(this).removeClass('is-active');
      });
    }

    var hideAll = () => {
      $('#webdesign-webdevelopment-tab-content').addClass('is-hidden');
      $('#graphicdesign-tab-content').addClass('is-hidden');
      $('#gamedevelopment-tab-content').addClass('is-hidden');
      $('#daily-tab-content').addClass('is-hidden');
    }

}

$(document).ready(ready);
$(document).on("page:load", ready);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDr_8q2Wuzbp3h4MzB_MGOc2YCkbpKxMJw",
  authDomain: "personalwebsite-6935f.firebaseapp.com",
  databaseURL: "https://personalwebsite-6935f.firebaseio.com",
  projectId: "personalwebsite-6935f",
  storageBucket: "personalwebsite-6935f.appspot.com",
  messagingSenderId: "330896932366",
  appId: "1:330896932366:web:d5fe9e3445c6287b3dc65f",
  measurementId: "G-TSZPKPS981"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit
// TODO retrieve if from firebase
document.getElementById('contactform').addEventListener('submit',submitForm);
function submitForm(e){

  e.preventDefault();
  //get values

  var name = getInputVal('name');
  var email = getInputVal('email');
  var details = getInputVal('details');

  //save message
  saveMessage(name,email,details);


  //show response
  console.log('Your message has been sent.');
  $('#alert').removeClass('is-hidden');

  setTimeout(function(){
  $('#alert').addClass('is-hidden');
  },3000);

  //clear form
  document.getElementById('contactform').reset();
}


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
    details: details
  });
}
