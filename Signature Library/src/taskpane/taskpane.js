
global.Office = () => ({});
global.Office.onReady = () => ({});

/**
 * @property {array} signatureList      - The list of signature objects
 * @property {string} signatureList[].title   - The given title of a specific signature
 * @property {string} signatureList[].message - The given text message of a specific signature
 */
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

  
    }
});

/**
 * This function creates a new object called newSignature that contains a title and message. 
 * The title and message of the new object are set to the current values within the title_input and message_input boxes.
 * After the newSignature elements are set, the method then adds it to the signature array and set the user input boxes to empty ("").
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 2.0.0
 * @todo Implement adding signatures to signature library window
 * @todo Implement adding signatures into signatureList from local storage using desktop app
*/
function addToLib() {
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

/**
 * This function is designed to populate the signatureList array and signatures dropdown list with any saved signature within local storage.
 * The "keys" variable is created that holds the items in local storage. 
 * The keys item is then iterated to add each signature as a new signature object into the array.
 * @author Logan Fry <lfry5@msudenver.edu>
 * @version 1.0.3
 * @yields {object} The signature objects that are located in local storage
 * @todo Implement getting signatures from local storage using desktop app
 */
function allStorage() {
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
            signatureList.push(signature);
    
            var updatedDropdown = document.getElementById("signatures");
            var option = document.createElement("option");
            option.value = signature.title;
            updatedDropdown.appendChild(option);
        }
	}
}

/**
 * Removes the chosen element in the dropList by getting the title of the signature to remove from the dropdown list via .querySelector.
 * The method then iterates through the array and removes the signature object via comparing titles.
 * The method also removes the title from the dropdown list.
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 2.0.0
 */
function removeInList() {
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

/**
 * This method gets the value signature title that the user chooses from the dropdown list (via querySelector) and places it in the var title.
 * The method then iterates through the signatureList array and gets the chosen signature message via comparing var title with the signature object titles.
 * The signature message is then set in the email body as a string.
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 2.0.0
 */
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

/**
 * This method creates a random index number based on the current size of the array signatureList
 * @author Logan Fry <lfry5@msudenver.edu>
 * @version 1.0.0
 */
function getRandom() {
    
    return Math.floor(Math.random()* (signatureList.length)+1)
  }

/**
 * This method gets a random signature message from the array signatureList then places that random message in the email body.
 * The method functions utilizing the getRandom() method to get a random index of signatureList then grabs the signature message from that index.
 * The method then places that chosen signature message into the email body in the exact way that applySignature() does.
 * @author Logan Fry <lfry5@msudenver.edu>
 * @version 1.0.0
 */
function applyRandomSignature(){
    var chosenSignature = signatureList[getRandom()-1];
    var message = chosenSignature.message

    Office.context.mailbox.item.body.setSelectedDataAsync(message)
}

// Exports all methods
module.exports = {
	getRandom : getRandom ,
	applyRandomSignature : applyRandomSignature,
	applySignature : applySignature,
	removeInList : removeInList,
	addToLib : addToLib,
	signatureList : signatureList
}

// reference code: https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm, https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

