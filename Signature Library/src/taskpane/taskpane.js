/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

var signatureList = [{
	title : "Default",
	message : "I've got nothing"
}]


Office.onReady(info => {
	if (info.host === Office.HostType.Outlook) {
		document.getElementById("removeLast").onclick = removeLastInList;
		document.getElementById("addToLib").onclick  = addToLib;
		document.getElementById("showLib").onclick  = showLibrary;
		document.getElementById("applySignatureButton").onclick  = applySignature;

  
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

}

function showLibrary() {
	// Need method for window to pop up with signatureList elements
	var libraryList = ""
	
	for (let signature of signatureList){
		libraryList = libraryList + signature.title + "&emsp;" + signature.message + "<BR/>" 
	}

	document.getElementById("Library").innerHTML = libraryList;
}

function removeLastInList() {
	// Removes the last element in the dropList
	var x = signatureList
	var y = document.getElementById("signatures");
	x.pop();
	y.removeChild(y.lastChild)

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


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


