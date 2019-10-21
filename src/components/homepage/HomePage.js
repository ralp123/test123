import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import Blog from './Blog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';


import Icon from '@material-ui/core/Icon';
import { AccessAlarm, Search, QueryBuilder, Info } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
 import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Favorite';
// import Avatar from '@material-ui/core/Avatar';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import Api from '../../apis/api';
import { green } from '@material-ui/core/colors';

const customStyles = {
    root: {
        'marginTop' : '80px'
    },
    customPadding: {
        paddingRight : '30px',
        paddingLeft : '30px',
    },
    img: {
        width: '100%',
        height: 'auto'
    },
    zeroPadding: {
        paddingRight : '0px',
        paddingLeft : '0px',
    },
    customIcon: {
        color : 'green',
        fontSize: '64px',
        marginTop: '48px',
        marginBottom: '20px'
    },
    aboutUsText: {
        writingMode: 'vertical-rl',
        textOrientation: 'upright'
    },
    spanIconTitle: {
        marginLeft: "-64px",
        fontSize: "22px"
    },
    iconContent: {
        paddingRight: "20px"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        //alignItems: 'center',
        // marginTop: theme.spacing(3),
    },
    center: { 
        textAlign: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        spacing: '2'
    },
    inputMarginTop: {
        marginTop: '10px'
    },
    sendMessageBtn: {
        backgroundColor: '#00A8CB',
        color: '#ffffff'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    // media: {
    //     'height': '0',
    //     'paddingTop': '30%', // 16:9
    // },
    // card: {
    //     'maxWidth': '1200px',
    // },
};

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render(){ 
        const { classes } = this.props;
        return (
            <>  
                <Grid container className={classes.root} >
                    {/* <Container maxWidth="md">
                        <Grid container xs={12} sm={12} class={classes.customPadding}>
                            <h1>Lorem Ipsum</h1>
                            <h3>It is a long established fact</h3> 
                        </Grid>
                    </Container> */}
                    {/* <Container className={classes.zeroPadding}>
                        <Grid container xs={12} sm={12} className="test">
                           <img className={classes.img} src={require('../../images/food-trends-2018-1200x500.jpg')} />
                        </Grid>
                    </Container> */}
                    
                    {/* <img className={classes.img} src={require('../../images/food-trends-2018-1200x500.jpg')} /> */}

                    <div className="divBackGround"></div>
                    
                    {/* <Blog /> */}
                    <Container maxWidth="xl" className={classes.zeroPadding}> 
                        <Grid container xs={12} sm={12} >
                            <Grid item sm={2}>
                                <h1 className="aboutUsText">About Us</h1>
                            </Grid>
                            <Grid item sm={3}>
                                <Search className={classes.customIcon} />
                                <span className={classes.spanIconTitle}>Lorem Ipsum</span>
                                <p className={classes.iconContent}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </Grid>
                            <Grid item sm={3}>
                                <QueryBuilder className={classes.customIcon} />
                                <span className={classes.spanIconTitle}>Lorem Ipsum</span>
                                <p className={classes.iconContent}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </Grid>
                            <Grid item sm={3}>
                                <Info className={classes.customIcon} />
                                <span className={classes.spanIconTitle}>Lorem Ipsum</span>
                                <p className={classes.iconContent}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="xl" className={classes.zeroPadding} style={{backgroundColor : "gray", marginTop: "60px"}}> 
                        <Grid container justify="center" xs={10} sm={10} >
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </Grid>
                    </Container>

                    <Container component="main" maxWidth="xs">
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h3">
                                Drop Us A Note
                            </Typography>
                            <form className={classes.form} noValidate>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        className="testing123"
                                        style={{ borderRadius: "0px" }}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="company"
                                        label="Company"
                                        name="company"
                                        className="testing123"
                                        autoComplete="company"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        className="testing123"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        className="testing123"
                                        autoComplete="phone"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="message"
                                        label="Message"
                                        name="message"
                                        className="testing123"
                                        autoComplete="message"
                                        multiline
                                        rows="4"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <Button variant="contained" className={classes.sendMessageBtn} style={{float: 'right'}}>
                                        Send Message
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                    <AppBar color="primary" position="static" className={classes.appBar}>
                        <Typography variant="h6" color="inherit">
                            &copy; 2017 | Partner Gauge LCC
                        </Typography>
                    </AppBar>
                </Grid>
            </>
        )
    } 
}

HomePage.propTypes = {
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

export default withStyles(customStyles)(connect(mapStateToProps, mapDispatchToProps)(HomePage));