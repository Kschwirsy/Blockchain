var Block = require('./Block');
var ArrayList = require('./node_modules/arraylist/ArrayList');

var blockChain = new ArrayList;

var genesisTransactions = new Array("Friend1 sent me 10 bitcoins", "Friend 2 sent me 10 bitcoins");
var genesisBlock = new Block(0, genesisTransactions);

var block2Transactions = new Array("I sent 10 bitcoins to Friend1", "Friend1 sent 10 bitcoins to starbucks");
var block2 = new Block(genesisBlock, block2Transactions);

var block3Transactions = new Array("I sent 1 bitcoins to Mom");
var block3 = new Block(block2, block3Transactions);

console.log("Hash of Genesis Block:");
console.log(genesisBlock.getBlockHash());

console.log("Hash of 2nd Block:");
console.log(block2.getBlockHash());

console.log("Hash of 3nd Block:");
console.log(block3.getBlockHash());