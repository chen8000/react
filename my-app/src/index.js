import React from 'react';
import ReactDOM from 'react-dom';

// 自定义组建
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
