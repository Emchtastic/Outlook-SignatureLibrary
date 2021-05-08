/**
 * @property {array} signatureList      - The list of signature objects
 * @property {string} signatureList[].title   - The given title of a specific signature
 * @property {string} signatureList[].message - The given text message of a specific signature
 */
var signatureList = [{
  title : "Yoda",
  message : '“The greatest teacher, failure is.”\n ---Yoda'
  
}]

Office.initialize = allStorage; 

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
      document.getElementById("removeButton").onclick = removeInList;
      document.getElementById("addToLib").onclick  = addToLib;
      document.getElementById("applySignatureButton").onclick  = applySignature;
      document.getElementById("imFeelingLucky").onclick  = applyRandomSignature;
      document.getElementById("OutsideModal").onclick = showChoice; 
      document.getElementById("mySearch").onkeyup = searchForSig;
      syncLibrary();
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
  // A function that creates a new object with title and message then adds it to the signature array
  var newSignature = {
        title : document.getElementById("title_input").value, 
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

      //Clear and reset signature library window list
      var menuList = document.getElementById("myMenu")
      menuList.innerHTML = ""

      syncLibrary();
      saveRoaming();

}

/**
 * This function clears the title and message box of the signature library window.
 * @author Marie Diaoune <mdiaoune@msudenver.edu>
 * @version 1.0.0
 */
function clear() {
    document.getElementById("Sig_title").value = ""
    document.getElementById("Sig_message").value = ""

  }

/**
 * This function displays specific siganture titles within the signatureList array via the current text input in the 'mySearch' searchbar.
 * @author Marie Diaoune <mdiaoune@msudenver.edu>
 * @version 1.0.0
 */
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

/**
 * This function populates the title and message box of the signature library window with the selected title's values by parsing through the signatureList array until the choise matches the title.
 * @author Marie Diaoune <mdiaoune@msudenver.edu>
 * @version 1.0.0
 */
function showChoice(){
  var ul = document.getElementById('myMenu');
  ul.addEventListener('click', function(e) {
    document.getElementById("Sig_title").value = e.target.innerHTML
})

for (i = 0; i < signatureList.length; i++){
  if (signatureList[i].title == document.getElementById("Sig_title").value) {
    document.getElementById("Sig_message").value = signatureList[i].message
  }

}
}

/**
 * This function appends all of the titles of the signatureList array to the 'myMenu' dropdown list within the signature library window.
 * @author Marie Diaoune <mdiaoune@msudenver.edu>
 * @version 1.0.0
 */
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

  // Cycle over each menu item
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
  //menuList.children[0].className = "current";

  // Add list to body (or anywhere else)
  window.onload = function addTab() {
    document.body.appendChild(menuElem);
  }

}
/**
 * This function saves the current signatureList array into a string then uploads that string as the variable "roamingSignatures" to roamingSettings under the 'signatures' item.
 * .saveAsync saves the current roamingSettings under the current Outlook account.
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 1.0.0
 */
function saveRoaming() {
  // Save settings in the mailbox to make it available in future sessions.
  var roamingSignatures = JSON.stringify(signatureList)

  Office.context.roamingSettings.set("signatures", roamingSignatures)

  Office.context.roamingSettings.saveAsync(function(result) {
    if (result.status !== Office.AsyncResultStatus.Succeeded) {
      console.error(`Action failed with message ${result.error.message}`);
    } else {
      console.log(`Settings saved with status: ${result.status}`);
    }
  })
}

/**
 * This function is designed to populate the signatureList array and signatures dropdown list with any saved signature within local storage.
 * The "roamSignatures" variable is created that holds the items from roaming storage. 
 * The roamSignatures item is then iterated to add each signature as a new signature object into the signatureList array.
 * @author Logan Fry <lfry5@msudenver.edu> 
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 2.0.0
 * @yields {object} The signature objects that are located in local storage
 */
function allStorage() {
  var x = Office.context.roamingSettings.get("signatures")
  var roamSignatures = []
  
  roamSignatures = JSON.parse(x)

  for (i in roamSignatures) {

          var newSignature = {
              title : roamSignatures[i].title,
              message : roamSignatures[i].message
          }
          signatureList.push(newSignature);
  
          var updatedDropdown = document.getElementById("signatures");
          var option = document.createElement("option");
          option.value = newSignature.title;
          updatedDropdown.appendChild(option);
        

        }
}

/**
 * Removes the chosen element in the dropList by getting the title of the signature to remove from the dropdown list via .querySelector.
 * The method then iterates through the array and removes the signature object via comparing titles.
 * The method also removes the title from the dropdown list.
 * The method also syncs the signatures item in roaming storage to the current signatureList array
 * @author Alex Emch <aemch@msudenver.edu>
 * @version 3.0.0
 */
function removeInList() {
  var title = document.getElementById("Sig_title").value
  var dropDown = document.getElementById("signatures")
  var LibraryList = document.getElementById("myMenu")

  var i;
  
  for (i = 0; i < signatureList.length; i++){
      if (signatureList[i].title == title) {
          signatureList.splice(i, 1)
          dropDown.children[i].remove()
          LibraryList.children[i].remove()
      }

  }
  clear();
  saveRoaming();
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


module.exports = {
    getRandom : getRandom ,
    applyRandomSignature : applyRandomSignature,
    applySignature : applySignature,
    removeInList : removeInList,
    addToLib : addToLib,
    signatureList : signatureList,
    allStorage : allStorage,
    clear :  clear,
    syncLibrary : syncLibrary,
    showChoice : showChoice,
    searchForSig :  searchForSig,
    saveRoaming : saveRoaming
    
}

// reference code: https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm, https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance