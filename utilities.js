
// the usual suspects
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/08596e0e24914057a87b80af3611503c')

// lightweight multifunction library
//const _ = require('underscore')

// this is how you get the gas price and turn from wei to eth 
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
})

// these are ways to hash a string or number 
console.log(web3.utils.sha3('Dapp University'))
console.log(web3.utils.keccak256('777 Kebby Token'))
console.log(web3.utils.soliditySha3('I have no problem with people making mess around me, I am undistractable'))

// this is pseudo randomness generation - I will find out better what it means
console.log(web3.utils.randomHex(32))

// UNDERSCORE LIBRARY HAS BEEN DEPRECATED, LODASH IN THE FUTURE??