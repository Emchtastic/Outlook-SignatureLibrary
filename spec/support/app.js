
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