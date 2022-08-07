
require('babel-register')
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {
   developement: {
    host: "127.0.0.1",
    port: 7545,
    network_id:"*"
   },
  },
  contracts_directory: './scr/contracts/',
  contracts_build_directory: './scr/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        run: 200
      }
    }
  },
};
