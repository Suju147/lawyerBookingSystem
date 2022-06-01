import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Suspense,lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const LazyApp=lazy(()=>import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading....</h1>}>
      <LazyApp />
      </Suspense>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
