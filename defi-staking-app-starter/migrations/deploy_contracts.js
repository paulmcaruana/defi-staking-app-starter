const Odincoin = artifacts.require('Odincoin');

module.exports = async function (deployer) {
    deployer.deploy(Odincoin);
};