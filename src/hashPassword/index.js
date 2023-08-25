const bcrypt = require('bcrypt');

const password = process.argv[2];
const passwordHash = bcrypt.hashSync(password, 12);

console.log(passwordHash);
