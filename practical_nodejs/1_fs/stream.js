const fs = require('fs');

fs.createReadStream('./data/customers.csv').pipe(process.stdout);