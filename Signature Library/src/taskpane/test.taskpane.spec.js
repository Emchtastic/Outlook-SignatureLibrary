var add = require ('./taskpane');

describe('The signature list', () => {
    beforeEach(() => {
        // Call the Mok function for addTolib to add three objects' signature; Each has a title and message.
        add.addToLib = jest.fn(() => [
            {
               title : "Mohamed",
     
               message : "Hello World"
            },

            {
                title : "Alex",
     
                message : "Hello World"
               
            },

            {
                title : "Logan",
     
                message : "Hello World"
               
            }
        ]);
    });
    test('Should be added signature to list', () => {
        const signature = add.addToLib();
        expect(signature).toEqual([{"message": "Hello World" , "title":"Mohamed"},
                                   {"message": "Hello World" , "title":"Alex"},
                                   {"message": "Hello World" , "title":"Logan"}]);

    });
});
describe ('Check the array list of the signature.', () => {
    test ('Should have three objects in the array signature list.',() =>{
        expect (add.signatureList.length).toBe(3);

    });
});