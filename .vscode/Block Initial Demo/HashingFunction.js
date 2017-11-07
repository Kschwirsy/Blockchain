var encode = require('hashcode').hashCode;

var list1 = new Array("a","b","c");
var list2 = new Array("a","b","d");

console.log(list1.toString());
console.log(encode().value(list1.toString()));
console.log(list2.toString());
console.log(encode().value(list2.toString()));