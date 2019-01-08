 
var keythereum = require("keythereum");
 // Specify a data directory (optional; defaults to ~/.ethereum)
var datadir = "datadir folder 'keystore'";


var keyObject = keythereum.importFromFile('address account',datadir);

var privateKey = keythereum.recover('password', keyObject);

var readablePrivKey = privateKey.toString('hex');
console.log(readablePrivKey);
