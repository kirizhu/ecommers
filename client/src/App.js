import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './App.css';
import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selector';
import Header from './components/header/header.component';

import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/signin/sign-in.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path='/' component={HomePage} />
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <Route path='/shop' component={ShopPage} />
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path='/checkout' component={CheckoutPage} />
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInPage />)}
          />
        </Suspense>
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
