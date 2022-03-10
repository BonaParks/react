import { NetworkType } from '@elrondnetwork/dapp-core';

export const decimals = 4;
export const denomination = 18;
export const gasPerDataByte = 1500;
export const timeout = 10000; // 10 secs

export const walletConnectBridgeAddresses: string[] = [
  'https://bridge.walletconnect.org'
];
export const walletConnectBridge: string =
  walletConnectBridgeAddresses[
    Math.floor(Math.random() * walletConnectBridgeAddresses.length)
  ];

export const walletConnectDeepLink =
  'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqha3yt3gg93ejdvu9tcu02ws2f33c2cv8lasqeuk83d';

export const dAppName = 'Bona Parks';

export const network: NetworkType & {
  graphQlAddress: string;
} = {
  id: 'mainnet',
  name: 'Mainnet',
  egldLabel: 'EGLD',
  walletAddress: 'https://wallet.elrond.com',
  apiAddress: 'https://api.elrond.com',
  gatewayAddress: 'https://gateway.elrond.com',
  explorerAddress: 'http://explorer.elrond.com',
  graphQlAddress: 'https://exchange-graph.elrond.com/graphql'
};
