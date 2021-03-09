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

Office.initialize = allStorage;

Office.onReady(info => {
    if (info.host === Office.HostType.Outlook) {
        document.getElementById("removeThis").onclick = removeInList;
        document.getElementById("addToLib").onclick  = addToLib;
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
        localStorage.setItem(newSignature.title, JSON.stringify(newSignature.message)) // NEW LF

}


function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        if (keys[i].includes("loglevel:webpack-dev-server" || "Office API client")) {
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
    showLibrary : showLibrary ,
    removeInList : removeInList,
    addToLib : addToLib,
}

// reference code: https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm, https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
