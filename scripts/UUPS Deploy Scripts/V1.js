const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deployer Address : ${deployer.address}`);
  console.log(`Account Balance : ${(await deployer.getBalance()).toString()}`);
  const contractFactory = await ethers.getContractFactory("V1");
  const proxyContract = await upgrades.deployProxy(contractFactory, [4], {
    kind: "uups",
    initializer: " initialize ",
  });
  await proxyContract.deployed();
  console.log(`Deployed Address : ${proxyContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
