 
var keythereum = require("keythereum");
 // Specify a data directory (optional; defaults to ~/.ethereum)
var datadir = "datadir folder 'keystore'";

// Synchronous
var keyObject = keythereum.importFromFile('address account',datadir);
// synchronous
var privateKey = keythereum.recover('password', keyObject);
// privateKey
var readablePrivKey = privateKey.toString('hex');
console.log(readablePrivKey);
