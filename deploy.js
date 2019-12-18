const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'high defense decorate object ice stumble north poet super vague aim cage',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const sanket = async () => {
  let inbox;
  inbox = await new web3.eth.Contract( JSON.parse( interface ), '0d1c78C9B7BE5744A4F38e18a5620A18E35fB312' );
  const message = await inbox.methods.message().call();
  console.log( message );
}


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there! sanket uttarwar'] })
    .send({ gas: '1000000', from: '487761C8817E37702EE7709C79Da69Bd446842E5' });

  console.log('Contract deployed to', result.options.address);
};
deploy();
//sanket();
