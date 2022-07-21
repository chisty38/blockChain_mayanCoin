const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ffb84ee4be70c99e82abcc14a1bbb956cfa706837d14f182972b82ef91542ee7');
const myWalletAddress = myKey.getPublic('hex');


let mayanCoin = new Blockchain();
mayanCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of ' + mayanCoin.getBalanceOfAddress(myWalletAddress));
const tx1 = new Transaction(myWalletAddress, 'address 2', 100);
tx1.signTransaction(myKey);
mayanCoin.addTransaction(tx1);


// mayanCoin.createtransaction(new Transaction('address1', 'address2', 100));
// mayanCoin.createtransaction(new Transaction('address2', 'address1', 50));

console.log('\n starting the miner .....');
mayanCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of ' + mayanCoin.getBalanceOfAddress(myWalletAddress));


// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
mayanCoin.addTransaction(tx2);

// Mine block
mayanCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${mayanCoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', mayanCoin.isChainValid() ? 'Yes' : 'No');



















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
