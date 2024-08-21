import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Ant Design CSS
import 'antd/dist/reset.css'; // Use 'reset.css' for Ant Design v5+
import './styles/global.css'; // Your global styles

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
