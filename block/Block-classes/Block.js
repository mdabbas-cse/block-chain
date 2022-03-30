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
    this.nonce = 0
  }

  // form generate sha256 hash
  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
  }

  // for add difficulty 
  mineBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce = this.nonce + 1
      this.hash = this.calculateHash()
    }
    console.log("Mine Block:", this.hash)
  }
}
module.exports = Block