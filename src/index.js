import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './Containers/App';
import tachyons from 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
