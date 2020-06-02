import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import React from 'react';

import Header from './Header';
import Counter from './Counter';

setConfig({
  reloadHooks: false
});

function App() {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default hot(App);
