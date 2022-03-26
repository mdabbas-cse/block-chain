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
module.exports = Block