require("@nomiclabs/hardhat-waffle");
const fs =require("fs")
const privateKey =fs.readFileSync(".secret").toString()
const projectID = "f1a0b79657e14232b2046a73f5a71d8a"

module.exports = {
  networks:{
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
