import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import './style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if(root) {
  root.render(<App/>);
} else {
  throw new Error('root элемент не найден по id#root');
};