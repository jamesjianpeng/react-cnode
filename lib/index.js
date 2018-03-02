import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InnerApp from './App';
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {createPalette, createMuiTheme} from 'material-ui/styles'
import {grey, amber, red} from 'material-ui/colors'

import registerServiceWorker from './registerServiceWorker'

const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: grey,
      accent: amber,
      error: red,
      type: 'dark'
    })
})

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
