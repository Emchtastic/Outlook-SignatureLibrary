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

function addToLib() {
	var newSignature = {title : document.getElementById("title_input").value, 
        message : document.getElementById("message_input").value
        }

        signatureList.push(newSignature)
	
	var node = document.createElement("Li");
	var text = document.getElementById("title_input").value; 
	var textnode=document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("dropList").appendChild(node);
}

function showLibrary() {
	// Need method for window to pop up with signatureList elements
	document.getElementById("Library").innerHTML = JSON.stringify(signatureList)
}

function myFunction() {
	document.getElementById("dropList").classList.toggle("show");
}

function removeLastInList() {
	// Removes the last element in the dropList
	var x = document.getElementById("dropList");
	x.removeChild(x.lastElementChild);
}

function createCookie(title, signature, date) {
    let expiration = new Date(date).toUTCString();
    console.log(expiration);
    let cookie = escape(key) + "=" + escape(signature) + ";expires=" + expiration + ";";
    document.cookie = cookie;
}

function readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    createCookie(name, "", -1);
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


