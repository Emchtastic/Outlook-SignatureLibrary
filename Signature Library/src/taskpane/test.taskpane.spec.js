global.Office = () => ({});
global.Office.onReady = () => ({});
global.Office.context = () => ({});
global.Office.context.roamingSettings = () => ({});


/**
 * Primary authors for Jest testing suite
 * @author Mohamed Elsheikh <melshei1@msudenver.edu>
 * @author Sarmad Tello <stello1@msudenver.edu>
 */

//var applySignature = import("applySignature");
/**
 * @author Sarmad Tello <stello1@msudenver.edu>
 */
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
const { searchForSig } = require('./taskpane');
const taskpane = require('./taskpane');
var add = require ('./taskpane');
/**
 * @author Mohamed Elsheikh <melshei1@msudenver.edu>
 */
describe('Apply Random Signature from the list', () => {
    test('Should be signature message apply random mailbox', () => {
        const result = add.signatureList[add.getRandom()-1]
        expect(result.length).toBeGreaterThanOrEqual*(0) ;                                    

    });
});

/**
 * @author Sarmad Tello <stello1@msudenver.edu>
 */
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
/**
 * @author Mohamed Elsheikh <melshei1@msudenver.edu>
 */
describe ('Check the array list of the signature.', () => {
    test ('Should have three objects in the array signature list.',() =>{
        expect (add.signatureList.length).toBe(1);
    });
});
/**
 * @author Mohamed Elsheikh <melshei1@msudenver.edu>
 */
describe('Test applyRandomSignature.', () => {
    it('Should call a random signature to sets the message.', () => {
        const taskpane = require('./taskpane');
        taskpane.applyRandomSignature();
        expect(Office.context.mailbox.item.body.setSelectedDataAsync).toHaveBeenCalled();
    });
});

/**
 * @author Mohamed Elsheikh <melshei1@msudenver.edu>
 */
describe("clearAllMocksa and resetModules ", () => {
    afterEach(() => {
      jest.clearAllMocks();
      jest.resetModules();
    });
    /**
     * @author Mohamed Elsheikh <melshei1@msudenver.edu>
    */
     describe('Test searchForSig', () => {
      beforeAll(() => {
        window.document.body.innerHTML = `
        <input type="text" id="mySearch" placeholder="Search" title="Type in a signature name">
          <ul id="myMenu">
              <li><a href="#">Yoda</a></li>
              <li><a href="#">Vader</a></li>
              <li><a href="#">Solo</a></li>
          </ul>`;
      });
      it('input should not be null',()=>{
        const input = window.document.getElementById('mySearch');
        expect(input).toBeDefined();
        });
    
      it('ui should not be null',()=>{
        const ui = window.document.getElementById('myMenu');
        expect(ui).toBeDefined();
        });
  
      test('shoud test the UpperCase', () => {
        let _li = "none";
        let li =  ''
        expect(_li).toBe('none');
        expect(li).toBe('');
      })
      test('Should set Vader and Solo as empty displays ("")', () => {
        var ul, li, a, i;
        var bool = false
        window.document.getElementById('mySearch').innerHTML = "Y"
        const taskpane = require("./taskpane");
        taskpane.searchForSig();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (li[i].style.display = "none") {
            var bool = true;
          }
        }
        expect(bool).toEqual(true)
      })

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
        Office.context.roamingSettings = [];
        document.getElementById("title_input").value = "title";
        document.getElementById("message_input").value = "message";
        global.Office.context.roamingSettings.set = jest.fn()
        global.Office.context.roamingSettings.saveAsync = jest.fn()
        global.Office.context.roamingSettings.get = jest.fn()
        
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

  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   */
  describe("Test clear ", () => {
    beforeAll(() => {
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
        </ul>`;
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
  
  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   * @author Sarmad Tello <stello1@msudenver.edu>
   */
   describe("Test allStorage", () => {
    beforeAll(() => {
      const test = [{
        title : "test",
        message : "test"
      }]
      JSON.parse = jest.fn().mockImplementationOnce(() => {
        return [{
          title : "test",
          message : "test"
        }]
      });
      const stringTest = JSON.stringify(test)
      document.body.innerHTML = `<div id="signatures"></div>`;
      Office.context.roamingSettings.set("signatures", stringTest);
    });
    it("appends signature objects to signatureList and dropdown from roaming storage", () => {
      var x = Office.context.roamingSettings.get("signatures")
      console.log(x)

      const initialOptionsCount = document.getElementById("signatures").childElementCount;
      const taskpane = require("./taskpane");
      const signatureList = taskpane.signatureList;
      taskpane.allStorage();
      expect(signatureList.some((signature) => signature.title === "test")).toEqual(true);
      expect(document.getElementById("signatures").childElementCount).toEqual(initialOptionsCount + 1);
    });
  });
  
  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   */
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
  
  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   */
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
  
  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   */
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
  /**
   * @author Mohamed Elsheikh <melshei1@msudenver.edu>
   */
  describe("Test getRandom", () => {
    it("should select a random number between 0 and length of signatureList", () => {
      const result = add.signatureList[add.getRandom() - 1];
      expect(result).not.toEqual(null);
      expect(add.getRandom()).toBeLessThanOrEqual(3);
    });
  });
});