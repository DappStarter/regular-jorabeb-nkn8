require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth predict unusual gesture basket flat gaze'; 
let testAccounts = [
"0x15e77d5811f0d2e85d63f1cd132f3cf32ee9accd1e65e9cc7566d4c02274c636",
"0x00dce85bd03ef8a7785767859e9a08b8a90cbb0e1570cc0be32d595c072a371c",
"0x6ce84bf8c355fbad4bccf2ffb5503357c9adf23f073f7d1493690d08d327d887",
"0xc47e094c555925f801f6c540bc94388e969d9d9a35db81b1877937fe47cc92ba",
"0x4baafc7d45648c24fb358ee51f274299cbf0c8321d1ed875e44fcb83bbf37c99",
"0x54717a9b4dab8e5cba21270b75db1d556f45dfde02cda26dfe20954ce8a96d22",
"0xd8438a6456a11f3d3ef6db57dc0d898e433837726d5e4c93b311e9e6ac8e11f0",
"0x5c774fc72e18d60e975de60f9ec11ace910b6ed843ccade75b74d544c1ae2ff5",
"0x430524be09bd5cff793703a71477b41ea2ca9c6700c490a9265654ac3795c581",
"0x931b3e174d80427f9ebe78935df1db60cbf653201dc8d104195d203628e4a562"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


