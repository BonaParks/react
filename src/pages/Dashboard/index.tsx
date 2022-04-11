import React, { useEffect, useState } from 'react';
import Actions from './Actions';
import TopInfo from './TopInfo';
import Transactions from './Transactions';
import img1 from '../../assets/img/nft1.png';
import img2 from '../../assets/img/nft2.png';
import img3 from '../../assets/img/nft3.png';

const headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

const bodyContent = JSON.stringify({
    "scAddress": "erd1qqqqqqqqqqqqqpgqha3yt3gg93ejdvu9tcu02ws2f33c2cv8lasqeuk83d",
    "funcName": "getDropTokensLeft",
    "args": []
}
);

const supply = 1000;
 

const Dashboard: React.FC<{}> = () => {
  const [nftDropLeft, set_nftDropLeft] = useState<number>(0);

  useEffect(
    () => {
      fetch("https://gateway.elrond.com/vm-values/int", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        set_nftDropLeft(supply - data.data.data)
      })
    },
    []
  )

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
                <p>{nftDropLeft - 30} minted out of 1000</p>
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
