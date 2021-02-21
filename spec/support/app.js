var signatureList = [];
/**
 * 
 * @param {*} string 
 */
function addSignature(string){
    if(string !== null || string !== "  "){
        for(var i = 0 ; i < signatureList.length; i++){
            if (signatureList[i] == string){
                alert("The signature already exist.");
                return false;
            }
            else if(string.length < 4 || string.length > 45 ){
                alert("The signature minimum three characters, and the maximum is 45 characters.")
                return false;
            }
            signatureList.push(string);
            return true;
        }
    }
    alert ("The signature can't be null.");
    return false;
}



function removeSignature(string){
    var remove  = null;
    if (string !== null) {

        for(var i = 0 ; i < signatureList.length ; i++){

            if(string == signatureList [i]){
                remove = signatureList[i];
                return string;
            }
            return false;

        }

    }
    return string;
}


module.exports = {
    addSignature : addSignature,
    removeSignature : removeSignature,
}