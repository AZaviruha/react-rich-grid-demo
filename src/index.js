import './styles/main.less';

import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@main';

// ReactDOM.render(<App />, document.querySelector('#root'));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('@main', () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    const NextRootContainer = require('@main').default;
    render(NextRootContainer);
  });
}
