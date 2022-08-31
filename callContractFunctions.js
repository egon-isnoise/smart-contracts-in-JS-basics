// libraries for eth transaction and web3 connection
var Tx = require('ethereumjs-tx').Transaction   // this -needs- the transaction keyword for the new versions
const Web3 = require('web3')

// setting up a new instance of web3 connected to the Ropsten testnet via Infura
const web3 = new Web3('https://ropsten.infura.io/v3/08596e0e24914057a87b80af3611503c')

// these are the addresses of some of my ropsten accounts in MetaMask
const account1 = '0xA2742B4C88F79D9295520B6D7672751917aCE90e'
const account2 = '0x9ab5096F1A748403E1303aB0d49df17D13983e64'

// all the stuff we need to connect to the smart contract 
// the address, the ABI and a variable that represents the contract
const contractAddress = '0x84742965A03550aDBD0d094F5304F206A9C20361'
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
var tokenContract = new web3.eth.Contract(contractABI, contractAddress)
const data = tokenContract.methods.transfer(account1, 1000).encodeABI()

// console.log(data)

// REMEMBER TO EXPORT THE KEYS IN THE TERMINAL  

// this is how you save the private keys into variables
// const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')


// web3.eth.getTransactionCount(account2, (err, txCount) => {

//     // create transaction
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         gasLimit: web3.utils.toHex(800000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//         to: contractAddress,
//         data: data
//     }

//     // sign the transaction
//     const tx = new Tx(txObject, { chain: 'ropsten' })  // remember this FKN chain
//     tx.sign(privateKey2)

//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')

//     // broadcast the transaction
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//         console.log('err: ', err, 'txHash: ', txHash)
//     })

// })

tokenContract.methods.balanceOf(account1).call((err, result) => {console.log("The balance of the specified account is: " + result)})
tokenContract.methods.balanceOf(account2).call((err, result) => {console.log("The balance of the specified account is: " + result)})

