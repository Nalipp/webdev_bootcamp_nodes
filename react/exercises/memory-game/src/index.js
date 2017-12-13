import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
