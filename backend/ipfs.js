const { create } = require('ipfs-http-client');
const client = create('https://ipfs.infura.io:5001/api/v0');

const uploadMetadata = async (metadata) => {
  const result = await client.add(JSON.stringify(metadata));
  return result.path;
};

module.exports = { uploadMetadata };
