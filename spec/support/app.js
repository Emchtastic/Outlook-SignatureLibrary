var signatureList = [];
/**
 * 
 * @param {*} string 
 */
function addSignature(string){
    if(string !== null){
        for(var i = 0 ; i < signatureList.length; i++){
            if (signatureList[i] == string){
                return string;
            }
            signatureList.push(string);
        }
    }
    return string;
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