import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-3awt75jn2otvl6c2.us.auth0.com"
  clientId="0jG0yK1Y2dqLFe8SqXs2mDqFnT3vLctG"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
);


