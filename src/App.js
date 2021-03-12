import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/StatisticsList';
import FriendListItem from './components/Friends/FriendListItem';

import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';

const App = () => (
  <>
    <Profile user={user} />
    {/* ToDo check defaultProps */}
    {/* <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      // avatar={user.avatar}
      stats={user.stats}
    /> */}
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendListItem
      avatar={friends[1].avatar}
      name={friends[1].name}
      isOnline={friends[1].isOnline}
    />
  </>
);

export default App;
