const AccessErrorMsg = {
  CALLER_NOT_OWNER: "AR::caller is not owner",
  CALLER_NOT_ADMIN: "AR::caller is not admin",
  CALLER_NOT_DISTRIBUTOR: "AR::caller is not distributor",
  CALLER_NOT_VESTING_MANAGER: "AR::caller is not vesting manager",

  CALLER_NOT_APPROVED_CONTRACT: "AR::caller is not approved contract",
  CALLER_NOT_SCRIPT: "AR::caller is not script",
  CALLER_NOT_WERT: "AR::caller is not wert",

  PAUSEABLE_PAUSED: "AR::Pausable: paused",
  PAUSEABLE_NOT_PAUSED: "AR::Pausable: not paused",

  CALLER_NOT_OWNER_OR_ADMIN: "AR::caller is not admin or owner",
  CALLER_NOT_ADMIN_OR_APPROVED_CONTRACT:
    "AR::caller is not admin or approved contract",
  CALLER_NOT_ADMIN_OR_SCRIPT: "AR::caller is not admin or script",
};



const GameErrorMsg = {
  PLANET_NOT_EXIST: "Game::Planet is not exist",
  PLANET_ADDED_BEFORE: "Game::Planet is added before",
  MAXIMUM_LIMIT: "Game::Miner has reached to maximum limit",
  MINING_NOT_ALLOWED: "Game::Miner has not allow to mine",
  ALREADY_WON: "Game::Miner already won once",
  PLANET_BURNT: "Game::The planet has burnt",
  USER_BLOCK_LIMIT_INVALID:
    "Game::Total blocks should be more than user blocks limit",
  GAME_INVALID_ADDRESS: "Game::Not valid address",
  INVALID_GAME_DATA: "Game::Invalid planet data",
  NOT_STAKED: "Game::Insufficient staked planet balance",
  INSUFFICIENT_CONTRACT_BALANCE: "Game::Insufficient contract balance",
  UNSUCCESSFUL_TRANSFER: "Game::Unsuccessful transfer",
};

module.exports = {
  AccessErrorMsg,
  GameErrorMsg,
};
