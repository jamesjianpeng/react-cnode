import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InnerApp from './App';
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {purple, amber, red, blueGrey} from 'material-ui/colors'

import registerServiceWorker from './registerServiceWorker'

const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: purple,
      accent: amber,
      error: red,
      background: blueGrey,
      type: 'dark'
    })
})

console.log(muiTheme)

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
