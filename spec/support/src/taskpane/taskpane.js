/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

var signatureList = []


Office.onReady(info => {
	if (info.host === Office.HostType.Outlook) {
		document.getElementById("dropButton").onclick = myFunction;
		document.getElementById("removeLast").onclick = removeLastInList;
		document.getElementById("addToLib").onclick  = addToLib;
		document.getElementById("showLib").onclick  = showLibrary;

  
	}
});

/**
 * 
 */
function addToLib() {
	var newSignature = {title : document.getElementById("title_input").value, 
        message : document.getElementById("message_input").value
        }

		var result = false;
		if(newSignature == null || newSignature == ""){
			alert ("The signature can't be blank.");
			result = false;
		}
		else if(newSignature.length < 3 || newSignature.length > 46 ){
			alert("The signature minimum three characters, and the maximum is 45 characters.");
			result = false;
		}
		else {
			for(var i = 0 ; i < signatureList.length; i++){
				if (signatureList[i] == newSignature){
				 alert("The signature already exist.");
					result = false;
				}
				else {

				signatureList.push(newSignature);
				alert("The signature has been added successfully.");
				result = true;
				}
			}
		}  
	
	var node = document.createElement("Li");
	var text = document.getElementById("title_input").value; 
	var textnode=document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("dropList").appendChild(node);
}

/**
 * 
 */
function showLibrary() {
	// Need method for window to pop up with signatureList elements
	document.getElementById("Library").innerHTML = JSON.stringify(signatureList)
}

/**
 * 
 */
function myFunction() {
	document.getElementById("dropList").classList.toggle("show");
}

/**
 * 
 */
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


