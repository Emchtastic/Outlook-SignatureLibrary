/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

var signatureList = ["HI"]


Office.onReady(info => {
	if (info.host === Office.HostType.Outlook) {
		document.getElementById("dropButton").onclick = myFunction;
		document.getElementById("removeLast").onclick = removeLastInList;
		document.getElementById("addToLib").onclick  = addToLib;
		document.getElementById("showLib").onclick  = showLibrary;

  
	}
});

function addToLib() {
	var newSignature = {title : document.getElementById("title_input").value, 
        message : document.getElementById("message_input").value
        }

        signatureList.push(newSignature)
}

function showLibrary() {
	// Need method for window to pop up with signatureList elements
	document.getElementById("Library").innerHTML = "cat"
}

function removeLastInList() {
	// Removes the last element in the dropList
	var x = document.getElementById("signature");
	x.removeChild(x.lastElementChild);
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


