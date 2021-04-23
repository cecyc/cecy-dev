const contentful = require("contentful");

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN,
  environment: process.env.CTF_ENV_ALIAS
};

module.exports = {
  getClient() {
    return contentful.createClient(config);
  }
};
