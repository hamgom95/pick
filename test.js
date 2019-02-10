const {expect} = require("chai");
const {pick} = require("./index");

describe('pick()', function () {
    
    const obj = {
        a: 1,
        b: 2,
        c: 3,
    };
    
    it('should contain extracted values', function () {

        expect(pick(obj, "a", "b"), "Wrong keys extracted").to.have.all.keys("a", "b");
        expect(Object.values(pick(obj, "a", "b")), "Wrong (ordered) values for keys").to.have.ordered.members([1, 2]);
        expect(pick(obj, "a")).to.have.property("a", 1);
    });
});
