
// require various libraries for eth transaction and web3 connection
var Tx = require('ethereumjs-tx').Transaction   // this -needs- the transaction keyword for the new versions
const Web3 = require('web3')

// setting up a new instance of web3 connected to the Ropsten testnet via Infura
const web3 = new Web3('https://ropsten.infura.io/v3/08596e0e24914057a87b80af3611503c')

// these are the addresses of some of my ropsten accounts in MetaMask
// these are the ones with 10ETH each
const account1 = '0xA2742B4C88F79D9295520B6D7672751917aCE90e'
const account2 = '0x9ab5096F1A748403E1303aB0d49df17D13983e64'

// this is how show the keys saved from the terminal
// console.log(process.env.PRIVATE_KEY_1)

// this is how you save the private keys into variables
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')


// this function calls the web3 library, the eth 'sub', then the function getBalance
// which is a promise that returns a Wei string
// we then console log the result passing it inside a function that converst it in ETH 
// web3.eth.getBalance(account1, (err, bal) => {
//     console.log('Account 1 balance: ', web3.utils.fromWei(bal, 'ether'))
// })



// creating a transaction is made in 3 steps with web3:
// most of this is very similar to up here, calling the libraries, sub-libraries 
// and their relative functions 


// this is the function to get the nonce, which is basically the number of the transaction 
// for a specific account and is needed to prevent double spend
web3.eth.getTransactionCount(account2, (err, txCount) => {

    // BUILD a transaction = construct the js object that defines it
    // everything need to be in hexidecimal values
    const txObject = {
        nonce: web3.utils.toHex(txCount), 
        to: account1,
        value: web3.utils.toHex(web3.utils.toWei('2', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }


    // SIGN it
    const tx = new Tx(txObject, { chain: 'ropsten' })  
    // this { chain: 'ropsten' } bit ^^  is very important otherwise we get an error as 
    // web3 reads the whole thing as if it was on the mainnet and ofc it does not work properly
    tx.sign(privateKey2)

    // again we need to serialize everything to hex values
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    // BROADCAST it
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash: ', txHash)
    })

})

