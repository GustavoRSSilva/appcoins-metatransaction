import React, { useState, useEffect } from 'react';
import './homePage.css'
import { CAMPAIGN_VALUES } from '../../utils/constants';
import { createCampaign } from '../../services/advertisement';


function HomePage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div id="homepage">
      <h1>Campaign</h1>
      {Object.keys(CAMPAIGN_VALUES).map((index) => <p key={index}>{`${index}: ${CAMPAIGN_VALUES[index]}`}</p>)}


      <div className="margin-60">
          <p>You clicked {count} times</p>
          <button onClick={() => {
              setCount(count + 1);
              createCampaign();
          }}>
          Create Campaign
          </button>
      </div>
    </div>
  );
}

export default HomePage;
