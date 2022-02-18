const { assert } = require('chai');
const { default: Web3 } = require('web3');

const Odincoin = artifacts.require('Odincoin');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('DecentralBank', ([owner, customer]) => {
    let odincoin, rwd, decentralBank

    function tokens(number) {
        return Web3.utils.toWei(number, 'ether')
    }

    before(async () => {
        //Load contracts
        odincoin = await Odincoin.new()
        rwd = await RWD.new()
        decentralBank = await DecentralBank.new(rwd.address, odincoin.address)

        //  Transfer all tokens to the Decentral bank (1 million)
        await rwd.transfer(decentralBank.address, tokens('1000000'))

        //transfer 100 mock Odincoins to Customer
        await odincoin.transfer(customer, tokens('100'), {from: owner})
    })

    describe('Mock Odincoin Deployment', async () => {
        it('matches name successfully', async () => {
            const name = await odincoin.name()
            assert.equal(name, 'Odincoin') 
        })
    })
    
    describe('Reward Token ', async () => {
        it('matches name successfully', async () => {
            const name = await reward.name()
            assert.equal(name, 'Reward Token') 
        })
    })
})