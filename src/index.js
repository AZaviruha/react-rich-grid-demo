import './styles/main.less';

import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@main/app';

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
  module.hot.accept('@main/app', () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    const NextRootContainer = require('@main/app').default;
    render(NextRootContainer);
  });
}
