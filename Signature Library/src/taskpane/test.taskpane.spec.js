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
        expect(result.length).toBeGreaterThanOrEqual*(0) ;                                    

    });
});

describe('Test get getRandom', () => {
    test('Should pick a random result', () => {
        const actual = add.getRandom();
        expect(actual).toBeGreaterThanOrEqual*(1)                 
    })
   
  });

  global.Office = {
    onReady: jest.fn(),
    context: {
        mailbox: {
            item: {
                body: {
                    setSelectedDataAsync: jest.fn()
                }
            }
        }
    }
}


describe('Test apply Random Signature from the list for another case.', () => {
    it('Should call a random signature to sets the message.', () => {
        const taskpane = require('./taskpane');
        taskpane.applyRandomSignature();
        expect(Office.context.mailbox.item.body.setSelectedDataAsync).toHaveBeenCalled();
    })
})

describe("Test addToLib for patr 2", () => {
    beforeAll(() => {
        document.body.innerHTML = `
        <input type="text" placeholder="Enter title" id="title_input" required />
          <textarea placeholder="Enter signature message here" id="message_input" cols="30" rows="5"></textarea>
          <datalist id="signatures">
            <option value="Yoda"> 
            <option value="Vader"> 
            <option value="Han Solo"></option>
        </datalist>`
        document.getElementById("title_input").value = 'title';
        document.getElementById("message_input").value = 'message';
    })
    it('Updates the signature list, which is the object on the array.', () => {
        const taskpane = require('./taskpane');
        const signatureList = taskpane.signatureList;
        taskpane.addToLib();
        expect(signatureList[signatureList.length - 1].title).toEqual("Han Solo");
        expect(taskpane.signatureList[signatureList.length - 1].message).toEqual('“It’s not wise to upset a Wookie.”\n ---Han Solo')
    })
    it('Test the signature input should be title and message.', () => {
        const taskpane = require('./taskpane');
        taskpane.addToLib();
        expect(document.getElementById("title_input").value).toBe('title');
        expect(document.getElementById("message_input").value).toEqual('message');
    })

    it('Test to clears the signature input after adding should be title and message clear.', () => {
        const taskpane = require('./taskpane');
        taskpane.addToLib();
        expect(document.getElementById("title_input").value = "").toBe('');
        expect(document.getElementById("message_input").value = "").toBe('');
    })
})
