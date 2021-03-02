import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/StatisticsList';

import user from './db/user.json';
import statisticalData from './db/statistical-data.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
  </>
);

export default App;
