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
                <h4>Mint presale<br />
                supply: 1k,<br /><br />
                MINT PRICE: 0,5 EGLD <br/><br />
                max per wallet: 2 per wallet for the 10 first minutes<br />
                  <span>then 6 per wallet</span>
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
