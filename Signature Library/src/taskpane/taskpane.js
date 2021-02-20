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

function myFunction() {
	document.getElementById("dropList").classList.toggle("show");
}

function removeLastInList() {
	// Removes the last element in the dropList
	var x = document.getElementById("dropList");
	x.removeChild(x.lastElementChild);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


