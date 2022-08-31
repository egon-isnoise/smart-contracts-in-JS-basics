
// libraries for eth transaction and web3 connection
const Web3 = require('web3')

// setting up a new instance of web3 connected to the ETH mainnet via Infura
const web3 = new Web3('https://mainnet.infura.io/v3/08596e0e24914057a87b80af3611503c')


// as usual these calls are -ASYNCHRONOUS- so they come out in the terminal NOT in order

// web3.eth.getBlock('latest').then(console.log)   // <-- this is a simple promise, I have to refresh these and also callback functions

// web3.eth.getBlock('latest').then((block) => {console.log({blockHash: block.hash, blockNUmber: block.number})})

// // we can also get a specific block
// web3.eth.getBlock('0xa1868b2dd081fced15941eac8bcfe1cb000bee78de0570d93f498a3a230b50dd').then(console.log)


// web3.eth.getBlockNumber().then((latest) => {
//     for(i = 0; i < 10 ; i ++) {
//         web3.eth.getBlock(latest -i).then((block) => {
//             console.log(block.number)
//             console.log(block.hash)
//         })
//     }
// })

const blockHash = '0xa1868b2dd081fced15941eac8bcfe1cb000bee78de0570d93f498a3a230b50dd'
web3.eth.getTransactionFromBlock(blockHash, 2).then(console.log)