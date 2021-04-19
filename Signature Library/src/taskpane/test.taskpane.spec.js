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
                    setSelectedDataAsync: jest.fn(),
                },
            },
        },
    },
};
describe ('Check the array list of the signature.', () => {
    test ('Should have three objects in the array signature list.',() =>{
        expect (add.signatureList.length).toBe(3);
    });
});
describe('Test applyRandomSignature.', () => {
    it('Should call a random signature to sets the message.', () => {
        const taskpane = require('./taskpane');
        taskpane.applyRandomSignature();
        expect(Office.context.mailbox.item.body.setSelectedDataAsync).toHaveBeenCalled();
    });
});

describe("clearAllMocksa and resetModules ", () => {
    afterEach(() => {
      jest.clearAllMocks();
      jest.resetModules();
    });
    describe(" Test addToLib", () => {
      beforeAll(() => {
        document.body.innerHTML = `
          <input type="text" placeholder="Enter title" id="title_input" required />
            <textarea placeholder="Enter signature message here" id="message_input" cols="30" rows="5"></textarea>
            <datalist id="signatures">
              <option value="Yoda"> 
              <option value="Vader"> 
              <option value="Han Solo"></option>
          </datalist>
          <ul id="myMenu"></ul>
          <div id="left"></div>
          `;
        document.getElementById("title_input").value = "title";
        document.getElementById("message_input").value = "message";
      });
  
      it("updates the signatureList with values in fields with id title_input and message_input", () => {
        const taskpane = require("./taskpane");
        const signatureList = taskpane.signatureList;
        taskpane.addToLib();
        expect(signatureList[signatureList.length - 1].title).toEqual("title");
        expect(taskpane.signatureList[signatureList.length - 1].message).toEqual("message");
      });
      it("clears the fields with id title_input and message_input after adding the value to signatureList", () => {
        const taskpane = require("./taskpane");
        taskpane.addToLib();
        expect(document.getElementById("title_input").value).toEqual("");
        expect(document.getElementById("message_input").value).toEqual("");
      });
    });
  });

