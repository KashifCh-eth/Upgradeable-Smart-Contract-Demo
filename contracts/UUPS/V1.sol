// SPDX-License-Identifier:  MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract upgradeTest is UUPSUpgradeable, OwnableUpgradeable {
    uint public value;

    function initialize(uint val) external {
        value = val;
        __Ownable_Int()
    }

    // This Only Implement When You Deploy Uups Upgradable Contract

    function _authorizeUpgrade(
        address newImplementation
    ) internal virtual override onlyOwner {}
}
