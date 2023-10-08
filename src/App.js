import React, { useState, useContext } from 'react';
import useApi from './hooks/useApi';
import UserContext from './store/UserContext';
import emptyUser from './data/types/emptyUser.type';
import AppRouter from './helpers/AppRouter';

const App = () => {

  const [user, setUser] = useState({ ...emptyUser });
  const { logout } = useApi(user, setUser);
  let context = useContext(UserContext);

  context.user = user;
  context.setUser = setUser;

  return (
    <React.Fragment>
      <AppRouter setUser={setUser} logout={logout} />
    </React.Fragment>
  );
}

export default App;
