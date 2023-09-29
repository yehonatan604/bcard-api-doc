import React, { useContext, useState } from 'react';
import UsersEnpointsList from './data/users-endpoints'
import Category from './components/Category';
import CardSEnpointsList from './data/cards-endpoints-list';
import useApi from './hooks/useApi';
import UserContext from './store/UserContext'

const App = () => {
  const emptyUser = {
    email: '',
    isLoggedIn: false,
    authLevel: 'Guest',
    token: ''

  }
  const [user, setUser] = useState({ ...emptyUser });
  const { login, logout } = useApi(user, setUser);
  login();
  let ctx = useContext(UserContext);
  ctx.user = user;
  ctx.setUser = setUser;

  const onLogout = (e) => {
    logout();
    setUser({ ...emptyUser });
  }

  const goToHackerU = () => {
    window.open('https://www.hackeru.co.il/', '_blank').focus();
  }

  return (
    <React.Fragment>
      <div className='header flex-row-center w-100'>
        <img onClick={goToHackerU} className='img' src={'https://www.hackeru.co.il/img/logo.svg'} alt={'profile'} />
        {user.isLoggedIn && <>
          <h2 className='logoff' onClick={(e) => onLogout(e)}>
            {user.isLoggedIn ? 'Log-Off' : ''}
          </h2>
          <h2>email: {user.email}</h2>
          <h2>authLevel: {user.authLevel}</h2>
          <h4 id="stamp">BCard API Documentation v1.0</h4>
        </>}
      </div>
      <Category
        title={'Users'}
        enpointsList={UsersEnpointsList}
      />
      <Category
        title={'Cards'}
        enpointsList={CardSEnpointsList}
      />
    </React.Fragment>
  );
}

export default App;
