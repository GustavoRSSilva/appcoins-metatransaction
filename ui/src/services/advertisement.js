import Web3 from 'web3';
import { ADVERTISEMENT_ABI, TX_RELAY_ABI } from '../utils/abi';
import MetaTransactionClient from './metaTransactionClient';
import MetaTransactionServer from './metaTransactionServer';
import { CLIENT_ADDRESS, CLIENT_PRIVATE_KEY, SERVER_ADDRESS, SERVER_PRIVATE_KEY, TX_RELAY_CONTRACT_ADDRESS, CAMPAIGN_VALUES } from '../utils/constants';


const INFURA_ROPSTEN_PROVIDER = 'https://ropsten.infura.io/4SzKbtKU0oVsatNCotgc';

const provider = new Web3.providers.HttpProvider(INFURA_ROPSTEN_PROVIDER);
const web3 = new Web3(provider);

export const createCampaign = async () =>  {

    const campaignValues = CAMPAIGN_VALUES;
    const args = [
        campaignValues.packageName,
        campaignValues.countries,
        campaignValues.vercodes,
        campaignValues.price,
        campaignValues.budget,
        campaignValues.startDate,
        campaignValues.endDate
    ];

    // Client
    const rawTx = await MetaTransactionClient.createTx(ADVERTISEMENT_ABI, 'createCampaign', args, {
      to: SERVER_ADDRESS,
      value: 0,
      nonce: 0, // nonce must match the one at TxRelay contract
      gas: 2000000,
      gasPrice: 2000000,
      gasLimit: 2000000
    });

    // result txToServer object should be send to app server
    const txToServer = await MetaTransactionClient.createRawTxToRelay(
      rawTx,
      CLIENT_ADDRESS,
      CLIENT_PRIVATE_KEY,
      TX_RELAY_CONTRACT_ADDRESS
    );


    // Server
    // sign tx with account which has some ether.
    let signedTxToRelay = await MetaTransactionServer.createRawTxToRelay(
      JSON.parse(TX_RELAY_ABI),
      txToServer.sig, // from client
      txToServer.to, // from client
      txToServer.from, // from client
      txToServer.data, // from client
      {
        "gas": 2000000,
        "gasPrice": 2000000,
        "gasLimit": 2000000,
        "value": 0,
        "to": TX_RELAY_CONTRACT_ADDRESS,
        "nonce": 0, // nonce of address which signs tx ad server
        "from": SERVER_ADDRESS
      },
      SERVER_PRIVATE_KEY
    );

    console.log(signedTxToRelay);

    // esnd tx to TxRelay contract
    const result = await web3.eth.sendSignedTransaction('0x' + signedTxToRelay);

}
