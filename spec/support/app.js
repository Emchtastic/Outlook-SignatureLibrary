

var signatureList = [];
/**
 * 
 * @param {*} string 
 */
function addSignature(string){
    var result = false;
    if(string == null ||string == ""){
        //window.alert ("The signature can't be blank.");
        result = false;
    }
    else if(string.length < 4 || string.length > 45 ){
        //window.alert("The signature minimum three characters, and the maximum is 45 characters.");
        result = false;
    }
    else {
        for(var i = 0 ; i < signatureList.length; i++){
            if (signatureList[i] == string){
               // window.alert("The signature already exist.");
                result = false;
            }
            
            signatureList.push(string);
            window.alert("The signature has been added successfully.");
            result= true;
        }
    }    
        return result;
    }
  
    




function removeSignature(string){
    var remove  = null;
    if (string !== null || string !== " ") {

        for(var i = 0 ; i < signatureList.length ; i++){

            if(string == signatureList [i]){
                remove = signatureList.pop[i];
                window.alert(" The signature has been removed successfully.");
                return true;
            }
        }
    }
    window.alert ("The signature can't be blank.");
    return false;
}


module.exports = {
    addSignature : addSignature,
    removeSignature : removeSignature,
}