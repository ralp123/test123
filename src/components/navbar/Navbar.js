import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
//const axios = require('axios');
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Z_FIXED } from 'zlib';

const useStyles = makeStyles(theme => ({
    root: {
	  	flexGrow: 1,
    },
    menuButton: {
		// marginRight: theme.spacing(2),
		marginLeft: -12,
    	marginRight: 20
    },
    title: {
      	flexGrow: 1,
	},
	// stickyBar: {
	// 	// 'position': 'fixed'
	// }
  }));
  
export default function Navbar() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Food Blog
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// const styles = {
// 	root: {
// 	  flexGrow: 1
// 	},
// 	flex: {
// 	  flex: 1
// 	},
// 	menuButton: {
// 	  marginLeft: -12,
// 	  marginRight: 20
// 	},
// 	sticky: {
// 		"position": "fixed" 
// 	}
//   };
  
//   function Navbar(props) {
// 	const { classes } = props;
// 	return (
// 	  <div className={classes.root}>
// 		<AppBar className={classes.sticky} position="sticky">
// 			<Toolbar>
// 				<IconButton
// 					className={classes.menuButton}
// 					color="inherit"
// 					aria-label="Menu"
// 				>
// 				<MenuIcon />
// 				</IconButton>
// 				<Typography variant="title" color="inherit" className={classes.flex}>
// 					Title
// 				</Typography>
// 				<Button color="inherit">Login</Button>
// 			</Toolbar>
// 		</AppBar>
// 	  </div>
// 	);
//   }
  
//   Navbar.propTypes = {
// 	classes: PropTypes.object.isRequired
//   };
  
//   export default withStyles(styles)(Navbar);