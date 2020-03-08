import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { version } from '../package.json';

console.log(`App version v${version}`);

ReactDOM.render(<App />, document.getElementById('root'));
