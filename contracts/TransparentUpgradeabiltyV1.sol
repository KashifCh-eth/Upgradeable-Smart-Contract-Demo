// SPDX-License-Identifier:  MIT
pragma solidity ^0.8.9;

contract upgradeTest {
    uint public value;

    function initialize(uint val) external {
        value = val;
    }

    function getValue() external view returns (uint) {
        return value;
    }
}
