import React from 'react';
import {Provider} from 'react-redux';

import Home from './screens/Home';
import store from './redux/store/store';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
