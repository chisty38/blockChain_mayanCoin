const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('hex');
const myWalletAddress = myKey.getPublic('hex');


let mayanCoin = new Blockchain();
console.log('\n Balance of ' + mayanCoin.getBalanceofAddress(myWalletAddress));
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
mayanCoin.addtransaction(tx1);
//console.log(JSON.stringify(mayanCoin, null, 4));

// mayanCoin.createtransaction(new Transaction('address1', 'address2', 100));
// mayanCoin.createtransaction(new Transaction('address2', 'address1', 50));

console.log('\n starting the miner .....');
mayanCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of ' + mayanCoin.getBalanceofAddress(myWalletAddress));


mayanCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid ' + mayanCoin.isChainValid());



















// console.log('\n Is Chain valid.....' + mayanCoin.isChainValid());

// mayanCoin.minePendingTransactions(myWalletAddress);

// console.log('\n Balance of ' + mayanCoin.getBalanceofAddress(myWalletAddress));

// mayanCoin.minePendingTransactions(myWalletAddress);

// console.log('\n Balance of ' + mayanCoin.getBalanceofAddress(myWalletAddress));

// console.log('\n starting the miner again.....');
// mayanCoin.minePendingTransactions('xaviers-address');

// console.log('\n Balance of ' + mayanCoin.getBalanceofAddress('xaviers-address'));


// console.log('mining block 1 ...');
// mayanCoin.addBlock(new Block(1, "06/06/2022", {amount: 4}));
// console.log('mining block 2 ...');
// mayanCoin.addBlock(new Block(2, "07/06/2022", {amount: 10}));

// console.log(JSON.stringify(mayanCoin, null, 4));

// console.log('Is chain valid ? ' + mayanCoin.isChainValid());
// mayanCoin.chain[1].data = {amount: 100}; // validate false as data temper in block chain
// mayanCoin.chain[1].hash = mayanCoin.chain[1].calculateHash();
// console.log('after change node value ----');
// console.log('Is chain valid ? ' + mayanCoin.isChainValid());

// console.log(JSON.stringify(mayanCoin, null, 4));
