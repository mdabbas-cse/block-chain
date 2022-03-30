const Block = require("./Block-classes/Block")
const BlockChain = require("./Block-classes/BlockChain")

let newBlockChain = new BlockChain()

console.log('Mine Block 1...');
newBlockChain.addBlock(new Block(1, '10/01/2017', { amount: 4 }))
console.log('Mine Block 2...');
newBlockChain.addBlock(new Block(1, '15/01/2017', { amount: 10 }))

// console.log('Is Blockchain valid? ', newBlockChain.isValidChain())

// newBlockChain.chain[1].data = { amount: 100 }

// console.log('Is Blockchain valid? ', newBlockChain.isValidChain())

// console.log(JSON.stringify(newBlockChain, null, 4))

