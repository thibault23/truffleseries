const SimpleStorage = artifacts.require("SimpleStorage");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function ( accounts ) {

  describe("Initial deployment", async () => {
    it("should assert true", async function () {
      await SimpleStorage.deployed();
      assert.isTrue(true);
    });

    it("was deployed and it's intial value is 0", async () => {
      // get subject
      const ssInstance = await SimpleStorage.deployed();
      // verify it starts with zero
      const storedData = await ssInstance.getStoredData.call();
      assert.equal(storedData, 0, `Initial state should be zero`);
    });

    describe("Functionality", () => {
       it("should store the value 42", async () => {
       // get subject
       const ssInstance = await SimpleStorage.deployed();

       // change the subject
       await ssInstance.setStoredData(42, { from: accounts[0] });

       // verify we changed the subject
       const storedData = await ssInstance.getStoredData.call();
       assert.equal(storedData, 42, `${storedData} was not stored!`);
     });


     describe("Initial deployment", async () => {
       it("should not be able to set stored data not being the owner", async () => {
         const ssInstance = await SimpleStorage.deployed();
         await truffleAssert.reverts(ssInstance.setStoredData(42, { from: accounts[1] }));

       });
  });

  describe("Initial deployment", async () => {
    it("should not be able to get the count", async () => {
      const ssInstance = await SimpleStorage.deployed();
      await truffleAssert.reverts(ssInstance.getCount.call( { from: accounts[1] }));

    });
});

describe("Initial deployment", async () => {
  it("should be able to get the correct count", async () => {
    const ssInstance = await SimpleStorage.deployed();
    await truffleAssert.reverts(ssInstance.setStoredData(42, { from: accounts[1] }));

  });
});


});
});
});
