import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moxie from './Pet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Moxie />, document.getElementById('root'));
registerServiceWorker();
