import ReactDOM from 'react-dom';
import React from 'react';
import Main from './components/Main';

const appEl = document.getElementById('app');

ReactDOM.render(<Main />, appEl, () => {
  console.log('DOM rendered.');
});
