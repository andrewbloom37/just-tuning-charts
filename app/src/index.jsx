// @flow

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Table from './components/Table';

const Root = () => (
  <Fragment>
    <Table />
  </Fragment>
);

const App = document.getElementById('app');

if (App) ReactDOM.render(<Root />, App);
