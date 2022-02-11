require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note shift protect good knee swift supreme'; 
let testAccounts = [
"0xd7d32849a9b02b859d115d3e5a72cde5e6deb9b6aa5f526096653eed1d28ff78",
"0x843bd9eccd928db84f1722d9449b603bd7e9f80af29519e78a68463562d8b818",
"0x79b98e16312fbd436124b081bdbe6f8ba5f401d342fcf9060e5681cfbd142858",
"0xc9b3308e6cf6d178fbf9606bcfc10172cf7dd13fe0f93a3f9a0cbba90495b0fe",
"0x15f9e0fad3b29300be2b5b31d2b66f7f2bb2f635fbace9e75f228a41df70b39c",
"0xc8fe128ed5f5f09f6db4a934dc0a0142225722e302d0e843e2eabf81f1647547",
"0xa3d3c0d0023ca5b92f588a33cba3762d9c297f1db180e202cefa22a5830965f6",
"0x0a7d01b1b84c5ab49856b8d9a90a907dabf1936522669109a886d7a1c55a1f6e",
"0x832f8693952981c61bad4db281bbeca11e63cad97247a38116405c0778923ea2",
"0x8d5fb7f32c4cf8f377c3eb1b47444c20b1005ef9eb38e74b325e7ccd60f412e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

