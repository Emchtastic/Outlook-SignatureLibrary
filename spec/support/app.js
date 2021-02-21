
var signatureList = [];
/**
 * 
 * @param {*} string 
 */
function addSignature(string){
  var string1 = parseInt(document.querySelector('#value1').value);
    var result = false;
    if(string == null || string == ""){
        //alert ("The signature can't be blank.");
        result = false;
    }
    else if(string.length < 4 || string.length > 45 ){
        //window.alert("The signature minimum three characters, and the maximum is 45 characters.");
        result = false;
    }
    else {
        for(var i = 0 ; i < signatureList.length; i++){
            if (signatureList[i] == string){
             //window.alert("The signature already exist.");
                result = false;
            }
            else {
            signatureList.push(string);
            //window.alert("The signature has been added successfully.");
            result = true;
            }
        }
    }    
        return result;
    }
  


function removeSignature(string){
    var remove  = null;
    var result = false ;
    if (string !== null || string !== "") {

        for(var i = 0 ; i < signatureList.length ; i++){

            if(string == signatureList [i]){
                remove = signatureList.pop[i];
              // alert(" The signature has been removed successfully.");
                result = true;
            }
        }
    }
    else{
          // window.alert ("The signature can't be blank.");
        result = false;
    }
 
    return result;
}

 self.search(search){
    if search
      where (["model LIKE ?", "%#{search}%"])
      where (["vin_number LIKE ?", "%#{search}%"])
      where (["make LIKE ?", "%#{search}%"])
      where (["many_part LIKE ?", "%#{search}%"])
    else
      all
    end
  end
module.exports = {
    addSignature : addSignature,
    removeSignature : removeSignature,
}