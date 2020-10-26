// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract SimpleStorage {
  uint256 public storedData;
  address public owner;

  mapping(address => uint) public callers;

  constructor () public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  function getStoredData() public view returns (uint256) {
    return storedData;
  }

  function setStoredData(uint256 data) public onlyOwner {
    storedData = data;
    callers[msg.sender] += 1;
  }

  function getCount(address _address) public view onlyOwner returns (uint) {
    return callers[_address];
  }
}
