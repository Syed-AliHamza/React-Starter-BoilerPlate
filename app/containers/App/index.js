/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';
import HomePage from '../HomePage';
import Login from './../Login';
import SignUp from '../SignUp/Index';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/sign-up" component={SignUp} />
        {/* <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
