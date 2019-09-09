import { version } from '../../package.json';
import { Router } from 'express';
const bodyParser = require("body-parser");
const Web3 = require('web3');

export default ({ config, db }) => {
    const testnet = 'https://rinkeby.infura.io/';
    const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
    web3.eth.sendTransaction
    let api = Router();
    api.use(bodyParser.urlencoded());

    // expose api version
    api.get('/', (req, res) => {
        res.json({ version });
    }),

    // return balance in Address
    api.get('/getBalance/:address', (request, res) => {
        var walletAddress = request.params.address;
        var balance = web3.eth.getBalance(walletAddress); //Will give value in.
        balance.then(function(result) {
            res.json({'balance':parseInt(result)});
        });
	}),
    
    // Create wallet account and return address and private_key
    api.get('/createWallet/', (request, res) => {
        var account = web3.eth.accounts.create();
        res.json({'address':account.address,'private_key':account.privateKey});
    }),

    api.post('/transaction', (request, res) => {
        var privateKey = request.body.private_key;
        var destinationAddress = request.body.destination;
        var amount = request.body.amount;
        var originAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
        var addedAccount = web3.eth.accounts.wallet.add(originAccount);
        web3.eth.sendTransaction(
            {from:addedAccount.address,to:destinationAddress,gas:"2000000",value:amount})
            .on('transactionHash', function(hash){
                res.json({'response':'success','transaction_hash':hash});
            })
            .on('receipt', function(receipt){
                res.json(request.body);
            })
            .on('confirmation', function(confirmationNumber, receipt){
                res.json(request.body);
            })
            .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
	})

	return api;
}
