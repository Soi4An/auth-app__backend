'use strict';

const { User } = require('./models/User.js');
const { Token } = require('./models/Token.js');

async function syncModels() {
  await User.sync({ force: true });
  await Token.sync({ force: true });
}

syncModels();

// const { db } = require('./utils/db.js');
// db.sync({ force: true });

// #region Creating of secret keys in .env

// const dotenv = require('dotenv');
// const fs = require('fs');
// const crypto = require('crypto');

// const envConfig = dotenv.parse(fs.readFileSync('.env'));
// const newSecretKeys = {
//   JWT_ACCESS_SECRET: crypto.randomBytes(32).toString('hex'),
//   JWT_REFRESH_SECRET: crypto.randomBytes(32).toString('hex'),
// };

// Object.assign(envConfig, newSecretKeys);

// const newEnvContent = Object.entries(envConfig)
//   .map(([key, value]) => `${key}=${value}`)
//   .join('\n');

// fs.writeFileSync('.env', newEnvContent);

// #endregion
