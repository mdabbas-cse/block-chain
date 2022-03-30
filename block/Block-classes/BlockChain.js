const Block = require("./Block")

/**
 * Create BlockChain
 */
class BlockChain {
  constructor() {
    this.chain = [this.#createGenesisBlock()]
    this.difficulty = 2
  }

  #createGenesisBlock() {
    return new Block(0, '01/01/2017', 'this is genesis block', '0')
  }

  // for latest Block
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  // for add new Block
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    // newBlock.hash = newBlock.calculateHash()
    newBlock.mineBlock(this.difficulty)
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
module.exports = BlockChain