
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Skyline = await hre.ethers.getContractFactory("Skyline");
  const skyline = await Skyline.deploy();

  await skyline.deployed();

  console.log("Skyline with 1 ETH deployed to:", skyline.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
