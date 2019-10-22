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
//import Carousel from '@material-ui/core/Carousel';

import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import Paper from '@material-ui/core/Paper';

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
        color: '#ffffff',
        borderRadius: '0px', 
        padding: '10px 20px'
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

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8"
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E"
    }
]

class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "fade",
            indicators: true
        }

        autoBind(this);
    }

    toggleAutoPlay(){
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators(){
        this.setState({
            indicators: !this.state.indicators
        })
    }

    changeAnimation(event){
        this.setState({
            animation: event.target.value
        })
    }

    Project = (props) => 
    {
        return (
            <Paper 
                className="Project"
                style={{
                    backgroundColor: props.item.color, 
                }}
                elevation={10}
            >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        )
    }

    render(){ 
        const { classes } = this.props;
        const Project = this.Project;
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

                    <Container component="main" maxWidth="xs" style={{paddingBottom: '20px'}}>
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h3">
                                Drop Us A Note
                            </Typography>
                            <form className={classes.form} noValidate>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        id="filled-company-input"
                                        label="Name"
                                        required
                                        fullWidth
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        margin="normal"
                                        variant="filled"
                                        className="helloworld"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        id="filled-company-input"
                                        label="Company"
                                        required
                                        fullWidth
                                        type="text"
                                        name="company"
                                        autoComplete="company"
                                        margin="normal"
                                        variant="filled"
                                        className="helloworld"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        id="filled-email-input"
                                        label="Email"
                                        required
                                        fullWidth
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="filled"
                                        className="helloworld"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        id="filled-phone-input"
                                        label="Phone"
                                        required
                                        fullWidth
                                        type="text"
                                        name="phone"
                                        autoComplete="phone"
                                        margin="normal"
                                        variant="filled"
                                        className="helloworld"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <TextField
                                        id="filled-message-input"
                                        label="Message"
                                        required
                                        fullWidth
                                        type="text"
                                        name="message"
                                        autoComplete="message"
                                        margin="normal"
                                        variant="filled"
                                        className="helloworld"
                                        multiline
                                        rows="4"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputMarginTop}>
                                    <Button size="large" className={classes.sendMessageBtn} style={{float: 'right'}}>
                                        Send Message
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                    {/* <br /><br /> */}
                    <Grid container xs={10} sm={10}>
                        <div class="carousel carousel-slider center">
                            <div class="carousel-fixed-item center">
                                <a class="btn waves-effect white grey-text darken-text-2">button</a>
                            </div>
                            <div class="carousel-item red white-text" href="#one!">
                                <h2>First Panel</h2>
                                <p class="white-text">This is your first panel</p>
                            </div>
                            <div class="carousel-item amber white-text" href="#two!">
                                <h2>Second Panel</h2>
                                <p class="white-text">This is your second panel</p>
                            </div>
                            <div class="carousel-item green white-text" href="#three!">
                                <h2>Third Panel</h2>
                                <p class="white-text">This is your third panel</p>
                            </div>
                            <div class="carousel-item blue white-text" href="#four!">
                                <h2>Fourth Panel</h2>
                                <p class="white-text">This is your fourth panel</p>
                            </div>
                        </div>
                    </Grid>

                    <div style={{marginTop: "50px", color: "#494949"}}>
                        <Carousel 
                            className="SecondExample"
                            autoPlay={false}
                            timer={this.state.timer}
                            animation={true}
                            indicators={this.state.indicators}
                        >
                            {
                                items.map( (item, index) => {
                                    return <Project item={item} key={index}/>
                                })
                            }
                        </Carousel>
                    </div>

                    <AppBar color="primary" position="static" className={classes.appBar}>
                        <Typography variant="h6" color="inherit">
                            &copy; 2017 | Lorem ipsum
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