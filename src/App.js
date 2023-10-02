import React from 'react';
import UsersEnpointsList from './data/users-endpoints'
import Category from './components/Category';
import CardSEnpointsList from './data/cards-endpoints-list';
import useStart from './hooks/useStart';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const header = useStart();

  return (
    <React.Fragment>
      {header}
      <Category
        title={'Users'}
        enpointsList={UsersEnpointsList}
      />
      <Category
        title={'Cards'}
        enpointsList={CardSEnpointsList}
      />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
