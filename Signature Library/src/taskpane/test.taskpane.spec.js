global.Office = () => ({});
global.Office.onReady = () => ({});
//var applySignature = import("applySignature");
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

  describe("Test clear ", () => {
    beforeAll(() => {
      document.body.innerHTML = `
        <textarea placeholder="Signature title" id="Sig_title", cols="24"></textarea>
        <textarea placeholder="Signature message" id="Sig_message" cols="24" rows="5"></textarea>
        <datalist id="signatures">
            <option value="Yoda"> 
            <option value="Vader"> 
            <option value="Han Solo"></option>
        </datalist>`;
      document.getElementById("Sig_title").value = "";
      document.getElementById("Sig_message").value = "";
    });
    it("Should be Sig_title and Sig_message clear.", () => {
      const taskpane = require("./taskpane");
      taskpane.clear();
      expect(document.getElementById("Sig_message").value).toEqual("");
      expect(document.getElementById("Sig_title").value).toEqual("");
    });
  });

  describe("Test allStorage", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="signatures"></div>`;
      localStorage.setItem("test", "test");
    });
    beforeEach(() => localStorage.clear());
    it("does not add items to local storage when the key is 77 or Office API client", () => {
      localStorage.setItem("77", "77");
      localStorage.setItem("Office API client", "api client");
      const taskpane = require("./taskpane");
      const signatureList = taskpane.signatureList;
      taskpane.allStorage();
      expect(signatureList.some((signature) => signature.title === "77")).toEqual(false);
    });
    it("adds items to the local storage", () => {
      const initialOptionsCount = document.getElementById("signatures").childElementCount;
      localStorage.setItem("test", "test");
      const taskpane = require("./taskpane");
      const signatureList = taskpane.signatureList;
      taskpane.allStorage();
      expect(signatureList.some((signature) => signature.title === "test")).toEqual(true);
      expect(document.getElementById("signatures").childElementCount).toEqual(initialOptionsCount + 1);
    });
  });
  
  describe("Test removeInList", () => {
    beforeAll(() => {
      // Used to mock the required html which is accessed by the function removeInList
      document.body.innerHTML = `
        <textarea placeholder="Signature title" id="Sig_title", cols="24">Yoda</textarea>
        <textarea placeholder="Signature message" id="Sig_message" cols="24" rows="5"></textarea>
        <datalist id="signatures">
          <option value="Yoda" />
          <option value="Vader" />
          <option value="Han Solo" />
        </datalist>
        <ul id="myMenu">
            <li><a href="#">Yoda</a></li>
            <li><a href="#">Vader</a></li>
            <li><a href="#">Han Solo</a></li>
        </ul>
        `;
    });
    it("removes the signature with the specified title", () => {
      const taskpane = require("./taskpane");
      localStorage.removeItem = jest.fn();
      taskpane.removeInList();
      expect(document.getElementById("signatures").childElementCount).toEqual(2);
    });
  });
  
  describe("syncLibrary", () => {
    beforeAll(() => {
      document.body.innerHTML = `
      <div id="left"></div>
      <ul id="myMenu"></ul>
    `;
    });
    it("adds all the items in signatureList as a list", () => {
      const taskpane = require("./taskpane");
      taskpane.syncLibrary();
      expect(document.getElementById("myMenu").childElementCount).toEqual(taskpane.signatureList.length);
      expect(document.getElementById("myMenu").querySelector("li").querySelector("a").innerHTML).toEqual("Yoda");
    });
  });

  describe("Test showChoice", () => {
    beforeAll(() => {
      document.body.innerHTML = `
      <textarea placeholder="Signature title" id="Sig_title", cols="24"></textarea>
      <textarea placeholder="Signature message" id="Sig_message" cols="24" rows="5"></textarea>
      <ul id="myMenu">
        <li><a>Yoda</a></li>
        <li><a>Vader</a></li>
      </ul>
      `;
    });
    it("shows the clicked choice from myMenu", () => {
      const taskpane = require("./taskpane");
      taskpane.showChoice();
      document.getElementById("myMenu").querySelector("li").querySelector("a").click();
      expect(document.getElementById("Sig_title").value).toEqual("Yoda");
    });
    it("shows the right title corresponding to Sig_title value", () => {
      const taskpane = require("./taskpane");
      document.getElementById("Sig_title").value = "Yoda";
      taskpane.showChoice();
      expect(document.getElementById("Sig_message").value).toEqual('“The greatest teacher, failure is.”\n ---Yoda');
    });
  });
});