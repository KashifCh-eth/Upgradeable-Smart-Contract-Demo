# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

```

# First Deploy Address

Deployed Address : 0x0850D321d04740D1d011e2144931853852Ca8706

# Verify First Logic

yarn hardhat verify --network goeril 0x0850D321d04740D1d011e2144931853852Ca8706
yarn run v1.22.19
warning package.json: No license field
$ "C:\tempery\Upgradeable Contracts\node_modules\.bin\hardhat" verify --network goeril 0x0850D321d04740D1d011e2144931853852Ca8706
(node:8816) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Verifying implementation: 0xdf079EE247Cb9de42C76C49913fB5DDacb020841
Successfully verified contract upgradeTest on Etherscan.
https://goerli.etherscan.io/address/0xdf079EE247Cb9de42C76C49913fB5DDacb020841#code
Verifying proxy: 0x0850D321d04740D1d011e2144931853852Ca8706
Contract at 0x0850D321d04740D1d011e2144931853852Ca8706 already verified.
Linking proxy 0x0850D321d04740D1d011e2144931853852Ca8706 with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0xba8709de90895526FD6285fa1DE877C0c50762Eb
Contract at 0xba8709de90895526FD6285fa1DE877C0c50762Eb already verified.

Proxy fully verified.
Done in 57.94s.

# Deploy UpgradeV2 With New Logic

warning package.json: No license field
$ "C:\tempery\Upgradeable Contracts\node_modules\.bin\hardhat" run scripts/deployUpgrade.js --network goeril
(node:6164) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:7808) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
deployer Address : 0x03d10Bc942d8a04cdd46F7b7020d221ffDD60acc
Account Balance : 53550868613104334
Upgrade Sccess
Done in 44.82s.

# Verify Upgradeable V2

$ "C:\tempery\Upgradeable Contracts\node_modules\.bin\hardhat" verify --network goeril 0x0850D321d04740D1d011e2144931853852Ca8706
(node:14156) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Verifying implementation: 0xe1A5A1A9AEc0bFa10DC2e3cE118C1d7b0FC5ba95
Nothing to compile
Successfully submitted source code for contract
contracts/upgradeV2.sol:upgradeV2 at 0xe1A5A1A9AEc0bFa10DC2e3cE118C1d7b0FC5ba95
for verification on the block explorer. Waiting for verification result...

Successfully verified contract upgradeV2 on Etherscan.
https://goerli.etherscan.io/address/0xe1A5A1A9AEc0bFa10DC2e3cE118C1d7b0FC5ba95#code
Verifying proxy: 0x0850D321d04740D1d011e2144931853852Ca8706
Contract at 0x0850D321d04740D1d011e2144931853852Ca8706 already verified.
Linking proxy 0x0850D321d04740D1d011e2144931853852Ca8706 with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0xba8709de90895526FD6285fa1DE877C0c50762Eb
Contract at 0xba8709de90895526FD6285fa1DE877C0c50762Eb already verified.

Proxy fully verified.
Done in 47.34s.
PS C:\tempery\Upgradeable Contracts>
