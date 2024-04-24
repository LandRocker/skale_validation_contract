const { ethers } = require("hardhat");

async function deploy_game() {
  //deploy LandRocker
  const Game = await ethers.getContractFactory("Game");
  const gameInstance = await upgrades.deployProxy(
    Game,
    [
      "0x843840d993f5B6c65350a20990F2e304046454Bb",
      "0xBe8f2C8256762e0A3572D41F4B5e77e4a2a5171c",
    ],
    {
      kind: "uups",
      initializer: "initializeGame",
    }
  );
 
  await gameInstance.deployed();

  console.log("game Contract deployed to:", gameInstance.address);

  console.log("---------------------------------------------------------");

  return gameInstance;
}

module.exports = deploy_game;
