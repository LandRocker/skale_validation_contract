const { ethers } = require("hardhat");
const deploy_game = require("./deploy_scripts/deploy_Game");
const deploy_access_restriction = require("./deploy_scripts/deploy_access_restriction");


let ADMIN_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("ADMIN_ROLE"));

let APPROVED_CONTRACT_ROLE = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("APPROVED_CONTRACT_ROLE")
);
let SCRIPT_ROLE = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("SCRIPT_ROLE")
);

let DISTRIBUTOR_ROLE = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("DISTRIBUTOR_ROLE")
);

let WERT_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("WERT_ROLE"));
async function gameFixture() {
  const [
    owner,
    admin,
    distributor,
    wert,
    approvedContract,
    royaltyRecipient,
    script,
    addr1,
    addr2,
    treasury,
  ] = await ethers.getSigners();

  const arInstance = await deploy_access_restriction(owner);

  await arInstance.grantRole(ADMIN_ROLE, admin.address);
  await arInstance.grantRole(SCRIPT_ROLE, script.address);



  // Deploy weth
  const Weth = await ethers.getContractFactory("Weth");
  const wethInstance = await Weth.deploy("wrapped eth", "WETH");
  await wethInstance.deployed();

  // Deploy weth
  const Wbtc = await ethers.getContractFactory("Wbtc");
  const wbtcInstance = await Wbtc.deploy("wrapped btc", "WBTC");
  await wbtcInstance.deployed();

  const gameInstance = await deploy_game(arInstance);


  await wethInstance
    .connect(admin)
    .setMint(gameInstance.address, ethers.utils.parseUnits("1000", 18));

  await wbtcInstance
    .connect(admin)
    .setMint(gameInstance.address, ethers.utils.parseUnits("1000", 8));

  await arInstance.grantRole(APPROVED_CONTRACT_ROLE, gameInstance.address);

  // console.log(stakedData, "stakedData");

  return {
    gameInstance,
    arInstance,
    wethInstance,
    owner,
    admin,
    wert,
    approvedContract,
    script,
    addr1,
    addr2,
    treasury,
  };
}

module.exports = {
  gameFixture,
};
