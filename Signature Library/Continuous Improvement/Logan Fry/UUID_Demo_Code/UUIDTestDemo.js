describe("Test allStorage", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="signatures"></div>`;
      roamingSettings.set("test", "test");
    });
    it("adds items to the roaming storage", () => {
      const test = [{
        title : "test",
        message : "test"
      }]
      const initialOptionsCount = document.getElementById("signatures").childElementCount;
      roamSignatures.set("signatures", test);
      const taskpane = require("./taskpane");
      const signatureList = taskpane.signatureList;
      taskpane.allStorage();
      expect(signatureList.some((signature) => signature.title === "test")).toEqual(true);
      expect(document.getElementById("signatures").childElementCount).toEqual(initialOptionsCount + 1);
    });
  });