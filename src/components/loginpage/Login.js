import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


import Api from '../../apis/api';
const axios = require('axios');

const customStyles = {
    root: {
        'marginTop' : '80px'
    },
    title: {
        'textAlign' : 'left !important'
    },
    primaryColor: {
        'backgroundColor' : '#2196f3',
        'color': 'white',
    },
    customCardHeader: {
        'paddingTop' : '20px',
        'paddingBottom' : '20px',
        'paddingRight' : '30px',
        'paddingLeft' : '30px'
    },
    customCardContent: {
        'paddingRight' : '30px',
        'paddingLeft' : '30px',
    },
    customCardBorder: {
        'border-radius' : '0px'
    },
    noPadding: {
        'padding': '0px'
    },
    form: {
        'width': '100%'
    },
    floatRight: {
        float: 'right'
    },
    loginBtnMarginTop: {
        'marginTop' : '50px'
    },
    plainLink: {
        textDecoration: 'none', 
        color : '#2196f3'
    }
};

class Login extends Component {
    constructor(props){
        super(props)
    }

    render(){ 
        const { classes } = this.props;
        return (
            <>  
                {/* <Grid container direction="row" direction="row" justify="center" alignItems="center" className={classes.root}>              
                    <br /> <br /><br /><br />
                    <Container maxWidth="sm" >       
                        <Toolbar className={` ${classes.primaryColor} `}>
                            <Typography variant="h6" noWrap>
                                Log In
                            </Typography>
                        </Toolbar>

                        <form noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="standard-password-input"
                                label="Email Address"
                                name="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="standard-password-input"
                                label="Password"
                                name="password"
                                autoComplete="current-password"
                            />

                            <Button variant="contained" className={classes.primaryColor}>
                                Login
                            </Button>
                        </form>
                    </Container>
                </Grid> */}
                <br /> <br /><br /><br />
                {/* <Container maxWidth="sm">
                    <Grid container xs={12} className={` ${classes.primaryColor} `}>
                        <Toolbar>
                            <Typography variant="h6">
                                Log In
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <form className={classes.form}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="standard-password-input"
                                label="Email Address"
                                name="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="standard-password-input"
                                label="Password"
                                name="password"

                                autoComplete="current-password"
                            />

                            <Button variant="contained" className={classes.primaryColor}>
                                Login
                            </Button>
                        </form>
                    </Grid>
                </Container> */}
                <Container maxWidth="sm">
                    <Grid container justify="center" alignItems="center">
                        Logo 
                    </Grid>
                </Container>
                
                <Container maxWidth="sm">
                    <Card className={classes.customCardBorder}>
                        <CardHeader className={`${classes.primaryColor} + ${classes.customCardHeader}`} 
                            title="Log In"
                        />
                        <CardContent className={classes.customCardContent}>
                            <form className={classes.form}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="standard-password-input"
                                    label="E-mail Address"
                                    name="emailAddress"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="standard-password-input"
                                    label="Password"
                                    name="password"
                                    autoComplete="current-password"
                                />
                                <Grid container className={classes.loginBtnMarginTop} xs={12}>
                                    <Grid container xs={6} alignItems="center">
                                        <Link className={classes.plainLink}>FORGOT PASSWORD?</Link>
                                    </Grid>
                                    <Grid container justify="flex-end" xs={6}>
                                        <Button type="submit" variant="contained" size="large" color="primary" className={classes.primaryColor}>
                                            Login
                                        </Button>
                                    </Grid>
                                </Grid>                               
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </>
        )
    } 
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        //post: state.post,
        //isPostLoading: state.isPostLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    //Api.getPost(dispatch)

    return {
       //codes
    }
}

export default withStyles(customStyles)(connect(mapStateToProps, mapDispatchToProps)(Login));