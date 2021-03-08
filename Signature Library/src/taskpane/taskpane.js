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
	message : "“It’s not wise to upset a Wookiee.”\n ---Han Solo"
}]

createCookie("Yoda", "“The greatest teacher, failure is.”\n ---Yoda");
createCookie("Vader", "“All that I sense,\n is fear and dead men.”\n ---Darth Vader");
createCookie("Han Solo", "“It’s not wise to upset a Wookiee.”\n ---Han Solo")


Office.onReady(info => {
	if (info.host === Office.HostType.Outlook) {
		document.getElementById("removeThis").onclick = removeInList;
		document.getElementById("addToLib").onclick  = addToLib;
		document.getElementById("showLib").onclick  = showLibrary;
		document.getElementById("applySignatureButton").onclick  = applySignature;
		document.getElementById("imFeelingLucky").onclick  = applyRandomSignature;

  
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
		createCookie(newSignature.title, newSignature.message);

}

function showLibrary() {
	// Need method for window to pop up with signatureList elements
	var libraryList = ""
	
	for (let signature of signatureList){
		libraryList = libraryList + signature.title + "&emsp;" + signature.message + "<BR/>" 
	}

	document.getElementById("Library").innerHTML = libraryList;
}

function removeInList() {
	// Removes the chosen element in the dropList
	var title = document.querySelector('#signature').value;
	var y = document.getElementById("signatures");
	deleteCookie(title);

	var i;
	
	for (i = 0; i < signatureList.length; i++){
		if (signatureList[i].title == title) {
			signatureList.splice(i, 1)
			y.children[i].remove()
		}

	}
	showLibrary();
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

function createCookie(title, signature) {
    var date = new Date();
    date.setTime(date.getMonth() + 1200);
    var expires = "expires=" + date.toGMTString();
    document.cookie = title + "=" + signature + ";" + expires + ";path=/";
}

//function readCookie(name) {
    //var key = name + "=";
    //var cookies = document.cookie.split(';');
    //for (var i = 0; i < cookies.length; i++) {
       //var cookie = cookies[i];
        //while (cookie.charAt(0) == ' ') {
            //cookie = cookie.substring(1, cookie.length);
        //}
        //if (cookie.indexOf(key) == 0) {
            //return cookie.substring(key.length, cookie.length);
        //}
    //}
    //return null;
//}

var getCookies = function(){
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i=0; i<pairs.length; i++){
	  var pair = pairs[i].split("=");
	  cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
	}
	return cookies;
  }

function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getMonth() - 1);
    var expires = "expires=" + date.toGMTString();
    document.cookie = title + "=" + signature + ";" + expires + ";path=/";
}
// Cookie methods were helped with https://www.codexworld.com/store-data-in-cookies-with-javascript/ & https://stackoverflow.com/questions/252665/i-need-to-get-all-the-cookies-from-the-browser 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
module.exports = {
	getRandom : getRandom ,
	applyRandomSignature : applyRandomSignature,
	applySignature : applySignature,
	showLibrary : showLibrary ,
	removeInList : removeInList,
	addToLib : addToLib,
}