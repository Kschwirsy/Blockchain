var Encode = require('hashcode').hashCode;

var previousHash;
var transactions = new Array("")

var blockHash;

function block (previousHash, transactions){
    this.previousHash = previousHash;
    this.transactions = transactions;

    var contents = new Array(Encode().value(transactions.toString()), previousHash);
    this.blockHash = Encode().value(contents);
}
 
block.prototype.getPreviousHash = function () {
    return previousHash;
}

block.prototype.getTransaction = function() {
    return transactions;
}

block.prototype.getBlockHash = function() {
    return this.blockHash;
}

module.exports = block;