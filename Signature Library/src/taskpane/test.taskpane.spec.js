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
                    setSelectedDataAsync: jest.fn()
                }
            }
        }
    }
}

