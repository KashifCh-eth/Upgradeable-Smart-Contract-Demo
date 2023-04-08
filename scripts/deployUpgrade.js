const { ethers, upgrades } = require("hardhat");

const Proxy = "0x0850D321d04740D1d011e2144931853852Ca8706";
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deployer Address : ${deployer.address}`);
  console.log(`Account Balance : ${(await deployer.getBalance()).toString()}`);
  const contractFactory = await ethers.getContractFactory("upgradeV2");
  await upgrades.upgradeProxy(Proxy, contractFactory);
  console.log(`Upgrade Sccess`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
