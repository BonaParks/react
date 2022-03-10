import * as React from 'react';
import Actions from './Actions';
import TopInfo from './TopInfo';
import Transactions from './Transactions';

const Dashboard = () => {
  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto'>
          <div className='card shadow-sm rounded border-0'>
            <div className='card-body p-1'>
              <div className='card rounded border-0 bg-primary'>
                <div className='card-body text-center p-4'>
                  <TopInfo />
                </div>
                <br />
              </div >
              <div className='card-body text-center p-4'>
                <br />
                <h4>Mint presale<br /> <br />
                Price: 0.5 EGLD | Supply: 1k<br /><br />
                -3 NFTs/Wallet max in the first 10min. <br/><br />
                -After 10min (at 9:10pm UTC), every people (WL or not) <br /> will be able to mint a max of 6 NFTs/wallet.<br />
                </h4>
              </div>
              <Actions />
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
