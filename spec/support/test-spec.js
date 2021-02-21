var add = require('./app');
describe("Add signature to list", () => {
    
    it("should signature add successfully", () =>{
        
        expect(add.addSignature("Mohamed Elsheikh")).toEqual(true);
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

    it("should be equal your singnature", () =>{
        
        expect(add.addSignature("Mo")).toEqual(false);
        expect(add.addSignature("M")).toEqual(false);
        
    });
});
