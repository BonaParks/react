import * as React from 'react';
import Actions from './Actions';
import TopInfo from './TopInfo';
import Transactions from './Transactions';
import img1 from '../../assets/img/nft1.png';
import img2 from '../../assets/img/nft2.png';
import img3 from '../../assets/img/nft3.png';

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
                Price: 0.5 EGLD | Supply: 1k
                </h4>
                <div className="imgDemo">
                  <img src={img1} alt="bonapass nft" />
                  <img src={img2} alt="bonapass nft" />
                  <img src={img3} alt="bonapass nft" />
                </div>
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
