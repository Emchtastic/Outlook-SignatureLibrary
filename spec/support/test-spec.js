var add = require('./app');
describe("Add signature to list", () => {
    it("should be equal your singnature", () =>{
        
        expect(add.addSignature("Mohamed Elsheikh")).toEqual("Mohamed Elsheikh");

    });
});
