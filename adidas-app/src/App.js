import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ProductListContainer from './components/Pages/ProductListContainer/ProductListContainer';
import { useDispatch, useSelector } from 'react-redux'
import * as linksAction from './store/actions/links'
import * as trendingAction from './store/actions/trending';
import Landingpage from './components/Pages/Landingpage/Landingpage';
import Footer from './components/Footer/Footer';
import ProductInfoContainer from './components/Pages/ProductInfoContainer/ProductInfoContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import RegistrationPage from './components/Pages/Registrationpage/RegistrationPage';

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.linksData.loading)
  useEffect(() => {
    dispatch(linksAction.fetchLinks())
    dispatch(trendingAction.fetchTrending())
  }, [dispatch])

  if (loading) {
    return null
  } else {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/login" component={RegistrationPage} />
            <Route exact path="/:query" component={ProductListContainer} />
            <Route exact path="/:productName/:id" component={ProductInfoContainer} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>

    );
  };
};

export default App;
