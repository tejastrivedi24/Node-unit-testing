const chai = require('chai');
const expect = chai.expect;

describe('chai test',()=>{

    it("should do something",()=>{
    expect(1).to.equal(1);
    });

    it("should do something else",()=>{
        expect({name:"tejas"}).to.deep.equal({name:"tejas"});
        expect({name:"tejas"}).to.have.property('name').to.equal('tejas');
        expect(5>8).to.be.false;
        expect({}).to.be.a('object');
        expect('foo').to.be.a('string');
        expect(3).to.be.a('number');
        expect(null).to.be.null;
        expect(1).to.exist; 


        });
})