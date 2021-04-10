/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
//import "../../assets/icon-16.png";
//import "../../assets/icon-32.png";
//import "../../assets/icon-80.png";
var signatureList = [{
  title : "Yoda",
  message : "“The greatest teacher, failure is.”\n ---Yoda"
},
{
  title : "Vader",
  message : "“All that I sense,\n is fear and dead men.”\n ---Darth Vader"
},
{
  title : "Han Solo",
  message : "“It’s not wise to upset a Wookie.”\n ---Han Solo"
}]

Office.initialize = allStorage; 

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
      document.getElementById("removeThis").onclick = removeInList;
      document.getElementById("addToLib").onclick  = addToLib;
      document.getElementById("applySignatureButton").onclick  = applySignature;
      document.getElementById("imFeelingLucky").onclick  = applyRandomSignature;
      document.getElementById("mySearch").onclick = searchForSig;
      document.getElementById("myMenu").onclick = showChoice; 
  }
});


function addToLib() {
  // A function that creates a new object with title and message then adds it to the signature array
  var newSignature = {title : document.getElementById("title_input").value, 
      message : document.getElementById("message_input").value
      }

      signatureList.push(newSignature);
      
      var updatedDropdown = document.getElementById("signatures");
      var option = document.createElement("option");
      option.value = newSignature.title;
      updatedDropdown.appendChild(option);
      localStorage.setItem(newSignature.title, newSignature.message) // NEW LF

  document.getElementById("title_input").value = ""
      document.getElementById("message_input").value = ""

}


function searchForSig() {
var input, filter, ul, li, a, i;
input = document.getElementById("mySearch");
filter = input.value.toUpperCase();
ul = document.getElementById("myMenu");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}
}


function showChoice(){
var ul = document.getElementById('myMenu');
ul.addEventListener('click', function(e) {
  document.getElementById("Sig_title").value = e.target.innerHTML
})

}


function syncLibrary(){
//Sync menuItems with titles from signatureList
var menuItems = [
];

for (i = 0; i < signatureList.length; i++){
  var signatureTitle = {
    href: '#',
    text : signatureList[i].title
  }

  menuItems.push(signatureTitle)
}

// A few variables for use later
var menuElem = document.getElementById("left"),
  menuList = document.getElementById("myMenu"), 
  menuItem, menuLink;

menuElem.appendChild(menuList);

// Cycle over each nav item
for (var i = 0; i < menuItems.length; i++) {
  // Create a fresh list item, and anchor
  menuItem = document.createElement("li");
  menuLink = document.createElement("a");
  
  // Set properties on anchor
  menuLink.href = menuItems[i].href;
  menuLink.innerHTML = menuItems[i].text;
  
  // Add anchor to list item, and list item to list
  menuItem.appendChild(menuLink);
  menuList.appendChild(menuItem);
}

// Set first list item as current
menuList.children[0].className = "current";

// Add list to body (or anywhere else)
window.onload = function addTab() {
  document.body.appendChild(menuElem);
}

}
function newTab(){

/*var menu = document.getElementById("myMenu");
var ulMenu = document.createElement("ul");
ulMenu.value =
"<ul id='tabs'>"
 "<li><a href=''>New Tab</a></li> "
"</ul>";

menu.appendChild( ulMenu );

var x = document.createElement('<li><a href="#">New tab</a></li>');

var menu = document.getElementById("myMenu");
menu.append(x);*/

//$("#myMenu").append('<li><a href="#">New tab</a></li>');
/*$(document).ready(function(){
  $("addTab").click(function(){
      $("#myMenu").append('<li><a href="#">New tab</a></li>');
  });
});*/
//searchForSig;

  
}



function allStorage() {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
  while ( i-- ) {
      if (keys[i].includes("77") || keys[i].includes("loglevel:webpack-dev-server") || keys[i].includes("Office API client")) {
          i--
      }
      else {
          var signature = {
              title : keys[i],
              message : localStorage.getItem(keys[i]),
          }
          values.push(signature);
          signatureList.push(signature);
  
          var updatedDropdown = document.getElementById("signatures");
          var option = document.createElement("option");
          option.value = signature.title;
          updatedDropdown.appendChild(option);
      }
}
syncLibrary();
}

function removeInList() {
  // Removes the chosen element in the dropList
  var title = document.querySelector('#signature').value;
  var y = document.getElementById("signatures");
  
  var i;
  
  for (i = 0; i < signatureList.length; i++){
      if (signatureList[i].title == title) {
          signatureList.splice(i, 1)
          y.children[i].remove()
      }

  }
  localStorage.removeItem(title)
}

function applySignature(){
  var title = document.querySelector('#signature').value;
  var emailMessage = null

  var i;
  for (i = 0; i < signatureList.length; i++){
      if (signatureList[i].title == title) {
          emailMessage = signatureList[i].message
      }
  }

  Office.context.mailbox.item.body.setSelectedDataAsync(emailMessage)
  

}

function getRandom() {
  return Math.floor(Math.random()* (signatureList.length)+1)
}

function applyRandomSignature(){
  var chosenSignature = signatureList[getRandom()-1];
  var message = chosenSignature.message

  Office.context.mailbox.item.body.setSelectedDataAsync(message)
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
module.exports = {
  getRandom : getRandom ,
  applyRandomSignature : applyRandomSignature,
  applySignature : applySignature,
  removeInList : removeInList,
  addToLib : addToLib,
  signatureList: signatureList
  
}

// reference code: https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm, https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
