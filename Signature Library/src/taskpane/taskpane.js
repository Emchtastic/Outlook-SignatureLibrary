
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


Office.onReady(info => {
	if (info.host === Office.HostType.Outlook) {
		document.getElementById("removeThis").onclick = removeInList;
		document.getElementById("addToLib").onclick  = addToLib;
		//document.getElementById("showLib").onclick  = showLibrary;
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

		document.getElementById("title_input").value = ""
		document.getElementById("message_input").value = ""
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function openSig(evt, sigantureName) {

	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}