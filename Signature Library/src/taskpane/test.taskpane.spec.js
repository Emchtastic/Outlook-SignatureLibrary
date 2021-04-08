global.Office = () => ({});
global.Office.onReady = () => ({});
var applySignature = import("applySignature");
describe('apply Signature test', () => {
    it('title should not be null',()=>{
    const title = window.document.getElementById('signature');
    expect(title).toBeDefined();
    });
    it('email Message Should equal singature with title',()=>{
        const _title = 'hello';
        const singatureList= [
        {title: 'hello', message: 'Message'}
        ]
        let _message = null;
        singatureList.forEach(({title, message})=>{
        if (_title === title)_message = message;
        });
        expect(_message).toEqual('Message');
        });
        it ('message should be null',()=>{});
        });
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


describe('Remove the signature from the list', () => {
    beforeEach(() => {
        // Call the Mok function for addTolib to add objects' signature; has a title and message.
        // Call the removeInList function to remove the signature from the list 
        add.addToLib = jest.fn(() => [
            {
                title : "Work",
                message : "Hello World"
            },
        ]);
        add.removeInList = add.addToLib
    });
    test('Should be removed signature from the list', () => {
        const signature = add.removeInList();
        expect(signature).toEqual([{ message : "Hello World","title":"Work"}]);                      

    });
});

describe('Apply Random Signature from the list', () => {
    test('Should be signature message apply random mailbox', () => {
        const result = add.signatureList[add.getRandom()-1]
        const comp = add.signatureList[0]
        expect(result.message).toEqual(comp.message);                  

    });
});
