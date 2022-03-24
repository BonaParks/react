import * as React from 'react';
import {
  transactionServices,
  useGetPendingTransactions,
  refreshAccount
} from '@elrondnetwork/dapp-core';
import moment from 'moment';
import { contractAddress, /*network*/ } from '../../../config';

const Actions = () => {
  const { hasPendingTransactions } = useGetPendingTransactions();

  const [nbrNftToMint, setNbrNftToMint] = React.useState<1 | 2 | 3>(1);
  const [secondsLeft, setSecondsLeft] = React.useState<number>();
  const [hasPing, /*setHasPing*/] = React.useState<boolean>(true);
  const /*transactionSessionId*/ [, setTransactionSessionId] = React.useState<
      string | null
    >(null);

  const mount = () => {
    if (secondsLeft) {
      const interval = setInterval(() => {
        setSecondsLeft((existing) => {
          if (existing) {
            return existing - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(mount, [hasPing]);

 
  const { sendTransactions } = transactionServices;
  
  const sendMintTransaction = async () => {
    const mintTransaction = {
      value: `${500000000000000000*nbrNftToMint}`,
      data: `mint@0${nbrNftToMint}`,
      receiver: contractAddress
    };
    await refreshAccount();
    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: mintTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Mint transaction',
        errorMessage: 'An error has occured during Mint',
        successMessage: 'Mint transaction successful',
        transactionDuration: 1000
      }
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  const pongAllowed = secondsLeft === 0 && !hasPendingTransactions;

  const timeRemaining = moment()
    .startOf('day')
    .seconds(secondsLeft || 0)
    .format('mm:ss');

  return (
    <div>
      <div className='d-flex mt-4 justify-content-center'>
        <div className='btn abtn btnw' onClick={() => setNbrNftToMint(1)}>1</div>
        <div className='btn abtn btnw' onClick={() => setNbrNftToMint(2)}>2</div>
        <div className='btn abtn' onClick={() => setNbrNftToMint(3)}>3</div>
      </div>
      <div className='d-flex mt-2 justify-content-center'>
        {hasPing !== undefined && (
          <>
            {hasPing && !hasPendingTransactions ? (
              <div className='action-btn' onClick={sendMintTransaction}>
                <button className='btn'>
                  <div id="time" className=''>Mint {nbrNftToMint}</div>
                </button>
                <a href='/' className='text-white text-decoration-none'>
                  Mint
                </a>
              </div>
            ) : (
              <>
                <div className='d-flex flex-column'>
                  {!pongAllowed && !hasPendingTransactions && (
                    <span className='opacity-6 text-white'>
                      {timeRemaining} until to get your nft
                    </span>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Actions;
