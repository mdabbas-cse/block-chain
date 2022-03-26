const SHA256 = require('crypto-js/sha256')

/**
 * Create Class for new Block
 * @params {index, timestamp, data, previousHash}
 * @returns @Object
 */
class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
  }

  // form generate sha256 hash
  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}

/**
 * Create BlockChain
 */
class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock() {
    return new Block(0, '01/01/2017', 'this is genesis block', '0')
  }

  // for latest Block
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  // for add new Block
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }

  // for check valid block-chain
  isValidChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]
      if (currentBlock.hash !== currentBlock.calculateHash())
        return false
      if (previousBlock.hash !== currentBlock.previousHash)
        return false
    }
    return true
  }
}

let newBlockChain = new BlockChain()

newBlockChain.addBlock(new Block(1, '10/01/2017', { amount: 4 }))
newBlockChain.addBlock(new Block(1, '15/01/2017', { amount: 10 }))

console.log('Is Blockchain valid? ', newBlockChain.isValidChain())

newBlockChain.chain[1].data = { amount: 100 }

console.log('Is Blockchain valid? ', newBlockChain.isValidChain())

console.log(JSON.stringify(newBlockChain, null, 4))