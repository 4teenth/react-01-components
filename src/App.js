import React from 'react';
import Profile from './components/Profile/Profile';

import user from './db/user.json';

const App = () => (
  <>
    <Profile user={user} />
  </>
);

export default App;
