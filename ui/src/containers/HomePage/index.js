import React, { useState, useEffect } from 'react';
import './homePage.css'
import { CAMPAIGN_VALUES } from '../../utils/constants';

function HomePage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div id="homepage">
      <h1>Campaign</h1>
      {Object.keys(CAMPAIGN_VALUES).map((index) => <p>{`${index}: ${CAMPAIGN_VALUES[index]}`}</p>)}


      <div class="margin-60">
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
          Create Campaign
          </button>
      </div>
    </div>
  );
}

export default HomePage;
