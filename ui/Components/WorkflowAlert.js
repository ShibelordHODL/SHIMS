import React, { Component } from 'react'
import { observer } from 'mobx-react'

import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import { grey50 } from 'material-ui/styles/colors';
import { Badge, IconButton, Popover, PopoverAnimationVertical, List, ListItem, Subheader } from 'material-ui'



export default class WorkflowAlert extends Component {

	constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

	render() {
		return (
			
				<Badge 
          onClick={this.handleTouchTap} 
          badgeContent={4} 
          primary={true}
          badgeStyle={{top: 10, right: 10}}>
          <IconButton>
            <NotificationsIcon color={grey50}/>
          </IconButton>
          <Popover
	          open={this.state.open}
	          anchorEl={this.state.anchorEl}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose}
	          animation={PopoverAnimationVertical}
	        >
	          <List>
	            <Subheader>General</Subheader>
	            <ListItem
	              primaryText="Profile photo"
	              secondaryText="Change your Google+ profile photo"
	            />
	            <ListItem
	              primaryText="Show your status"
	              secondaryText="Your status is visible to everyone you use with"
	            />
	          </List>
	        </Popover>
        </Badge>

	        
		);
	}
}
