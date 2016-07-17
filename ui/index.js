/**
 * Root js for hot loader
 */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Router
      routes={routes}
      history={browserHistory}
      key={process.env.NODE_ENV !== "production" ? Math.random() : false}
    />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const routes = require('./routes').default;
    render(
      <AppContainer>
        <Router
          routes={routes}
          history={browserHistory}
          key={process.env.NODE_ENV !== "production" ? Math.random() : false}
        />
      </AppContainer>,
      rootEl
    );
  });
}