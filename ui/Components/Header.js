import React, { Component } from 'react'
import WorkflowAlert from './WorkflowAlert'

import Menu from 'material-ui/svg-icons/navigation/Menu'
import { AppBar,IconButton,FlatButton } from 'material-ui'


export default class Header extends Component {
	handleTouchTap() {
    alert('onTouchTap triggered on the title component')
  }

  
	render() {
		return (
			<div>
				<AppBar
	        title={<span style={{cursor: 'pointer'}}>SHIMS - Select Harvests IMS</span>}
	        onTitleTouchTap={this.handleTouchTap}
	        iconElementLeft={<IconButton><Menu /></IconButton>}
	        iconElementRight={<WorkflowAlert />}
	        zDepth={1}
	      />
			</div>
		)
	}
}
