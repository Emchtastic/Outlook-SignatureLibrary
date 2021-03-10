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
