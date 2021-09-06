const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
var demo = rewire('./demo');

describe('demo',()=>{
    context('add',()=>{
        it('should add two numbers',()=>{
            expect(demo.add(1,2)).to.be.equal(3);
        });
    });

    context('Callback add',()=>{
        it('should add two numbers with a delay',(done)=>{
            demo.addCallback(1,2,(err,result)=>{
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done();
                
            });
            
        });
    });

    context('callback add',()=>{
        it('should add with a promise',(done)=>{

            demo.addPromise(1,2).then((result)=>{
                expect(result).to.equal(3);
                done();
            }).catch((ex)=>{
                console.log('caught error');
                done(ex);
            })

        })

        it('should test a promise with return',()=>{

            return demo.addPromise(1,2).then((result)=>{
                expect(result).to.equal(3);
            })

        })

        it('should test promise with async await',async ()=>{
            let result = await demo.addPromise(1,2);
            expect(result).to.equal(3);
        });
        it('should test promise with chai as promised', async ()=>{
            await expect(demo.addPromise(1,2)).to.eventually.equal(3);
        });
    });


    context('test doubles',()=>{
        it('should spy on log',()=>{
            let spy = sinon.spy(console,'log');
            demo.foo();

            expect(spy.calledOnce).to.be.true;
            expect(spy).to.have.been.calledOnce;
            spy.restore();
        });

        it('should stub console.warn',()=>{
            let stub = sinon.stub(console,'warn').callsFake(()=>{console.log('message from stub')});
            demo.foo();
            expect(stub).to.have.been.calledOnce;
            expect(stub).to.have.been.calledWith('console.warn was c');
        })
    })
})

