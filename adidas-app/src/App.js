import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Men from './components/Pages/Men/Men';
import { useDispatch, useSelector } from 'react-redux'
import * as linksAction from './store/actions/links'
import * as trendingAction from './store/actions/trending';

import Landingpage from './components/Pages/Landingpage/Landingpage';
import Footer from './components/Footer/Footer';

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
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/men" component={Men}></Route>
            <Route path="/women"></Route>
            <Route path="/kids"></Route>
            <Route path="/sports"></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  };
};

export default App;
