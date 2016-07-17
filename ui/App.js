import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { Header } from './components'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




@observer
class App extends Component {


  render() {
    
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    )
  }

}

export default App