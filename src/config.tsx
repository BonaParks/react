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
  'erd1qqqqqqqqqqqqqpgqvvvs60z4v6aynfmahh02pyq03xpmrh0ude8st4czns';

export const dAppName = 'Bona Parks';

export const network: NetworkType & {
  graphQlAddress: string;
} = {
  id: 'devnet',
  name: 'Devnet',
  egldLabel: 'xEGLD',
  walletAddress: 'https://devnet-wallet.elrond.com',
  apiAddress: 'https://devnet-api.elrond.com',
  gatewayAddress: 'https://devnet-gateway.elrond.com',
  explorerAddress: 'http://devnet-explorer.elrond.com',
  graphQlAddress: 'https://devnet-exchange-graph.elrond.com/graphql'
};
