
// require various libraries for eth transaction and web3 connection
var Tx = require('ethereumjs-tx').Transaction   // this -needs- the transaction keyword for the new versions
const Web3 = require('web3')

// instance of web3 connected to the Ropsten testnet via Infura
const web3 = new Web3('https://ropsten.infura.io/v3/08596e0e24914057a87b80af3611503c')

// addresses of ropsten account in MetaMask
const account2 = '0x9ab5096F1A748403E1303aB0d49df17D13983e64'

// all the different things we need to connect to the smart contract 
// the application binary interface, the address, and finally make a var thta encloses the contract
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const contractAddress = '0x84742965A03550aDBD0d094F5304F206A9C20361'
var dappTokenContract = new web3.eth.Contract(contractABI, contractAddress)

// calling some 'methods' from the contract
// like using the buttons in remix basically - the result are not in order because evert call is asyncronous
dappTokenContract.methods.name().call((err, result) => {console.log("The name of the contract is: "+result)})
dappTokenContract.methods.symbol().call((err, result) => {console.log("The symbol of the contract/token is: "+result)})
dappTokenContract.methods.totalSupply().call((err, result) => {console.log("The total token supply is: " +result)})
dappTokenContract.methods.balanceOf(account2).call((err, result) => {console.log("The balance of the calling account is: " + result)})

//console.log(dappTokenContract)

