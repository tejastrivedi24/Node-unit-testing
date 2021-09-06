const assert = require('assert');
const internal = require('stream');
const { isContext } = require('vm');

describe("file to be tested",()=>{
    context("function to be tested",()=>{


        // before(()=>{
        //     console.log("-------before-------");
        // })

        // after(()=>{
        //     console.log("-------after-------");
        // })


        // beforeEach(()=>{
        //     console.log("-------beforeEach-------");
        // })

        // afterEach(()=>{
        //     console.log("-------afterEach-------");
        // })
        it("should do something",()=>{
            assert.equal(1,1);
        });

        it("should do something else",()=>{
            assert.deepEqual({name:"tejas"},{name:"tejas"});
        });

        it("this is a pending test");
    });

    context("this is another function",()=>{
        it("this is another pending test");
    })
});