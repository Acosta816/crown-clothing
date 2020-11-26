import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginRegisterContainerPage from './pages/login-register/login-register.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
        <Route path='/login-register' component={LoginRegisterContainerPage} />
      </Switch>

    </div>
  );
}

export default App;
