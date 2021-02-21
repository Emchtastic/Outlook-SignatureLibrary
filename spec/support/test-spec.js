var add = require('./app');
describe("Add signature to list", () => {
    
    it("should signature add successfully", () =>{
        
        expect(add.addSignature("Mohamed Elsheikh")).toBeTrue(true)
        expect(add.addSignature("Frankovich, Kenneth")).toEqual(true);
        expect(add.addSignature(" Emch, Alex")).toEqual(true);
        expect(add.addSignature("Diaoune, Marie")).toEqual(true);
        expect(add.addSignature("Esquibel, Gabriella")).toEqual(true);
        expect(add.addSignature("Fry, Logan")).toEqual(true);

    });
    it("should not add the signature ", () =>{
        
        expect(add.addSignature("Mohamed Elsheikh")).toEqual(false);
        expect(add.addSignature("Frankovich, Kenneth")).toEqual(false);
        expect(add.addSignature("Emch, Alex")).toEqual(false);
        expect(add.addSignature("Diaoune, Marie")).toEqual(false);
        expect(add.addSignature("Esquibel, Gabriella")).toEqual(false);
        expect(add.addSignature("Fry, Logan")).toEqual(false);

    });


    it("should singnature not be blank", () =>{
        
        expect(add.addSignature("")).toEqual(false)

    });

    it("should singnature be on the range 3 to 45 characters ", () =>{
        
        expect(add.addSignature("Mo")).toEqual(false);
        expect(add.addSignature("Mwrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrythjjjjjjjjjdhjjfffffffffffffffffffffffffffffffhfjjjjjjjjjjjjjjjjjhjggggggggggggggggggggggggggggggggggggg")).toEqual(false);
        
    });
});

describe("Remove a signature from the list", () => {
    
    it("should signature add successfully", () =>{
        
        expect(add.removeSignature("Mohamed Elsheikh")).toEqual(true)

    });
});