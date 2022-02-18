const Odincoin = artifacts.require('Odincoin');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function (deployer, network, accounts) {
    // Deploy Oddincoin contract
    await deployer.deploy(Odincoin);
    const odincoin = await Odincoin.deployed();

    // Deploy Reward contract
    await deployer.deploy(RWD);
    const rwd = await RWD.deployed();

    // Deploy DecentralBank contract
    await deployer.deploy(DecentralBank, rwd.address, odincoin.address);
    const decentralBank = await DecentralBank.deployed();

    // Transfer all RWD tokens to Decenttral Bank
    await rwd.transfer(decentralBank.address, '1000000000000000000000000');

    // Distribute 100 Odincoin tokens to investor
    await odincoin.transfer(accounts[1], '100000000000000000000')
};