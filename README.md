Express & ES6 Ethereum REST API
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

The API has 3 routes:

• GET /createWallet Generates a new Ethereum wallet and return and object with the private key and the public ETH address

• GET /getBalance/:param Get the balance of an ethereum address

• POST /transaction {privateKey, destination, amount} Creates a transaction to send ETH from one address to another. It can receive 3 raw JSON params: privateKey of the source ETH address, destination is the ETH destination address and amount the number of ETH to be send.

Default PORT: 8090

Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start project
npm start

# Start development live-reload server
PORT=8090 npm run dev

# Start production server:
PORT=8090 npm start
```

Credits:
This project is based on the work of Jason Miller and his MIT licensed repo: https://github.com/developit/express-es6-rest-api

The MIT License (MIT)

Copyright (c) 2016 Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


