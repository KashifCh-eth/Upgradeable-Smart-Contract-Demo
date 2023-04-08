// SPDX-License-Identifier:  MIT
pragma solidity ^0.8.9;
import "./upgradeTest.sol";

contract upgradeV2 is upgradeTest {
    function Increament() external returns (uint) {
        return value++;
    }

    function decrement() external returns (uint) {
        return value--;
    }
}
