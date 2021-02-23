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

		if(newSignature.message == null || newSignature.message == ""){
			alert ("The signature can't be blank.");
		}
		else if(newSignature.message.length < 3 || newSignature.message.length > 46 ){
		       alert("");
				}
				else {

				signatureList.push(newSignature);
				
		}  
	
	var node = document.createElement("Li");
	var text = document.getElementById("title_input").value; 
	var textnode=document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("dropList").appendChild(node);
}
