import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles"

ReactDOM.render(
<MuiThemeProvider>
  <App />
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
