import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import Blog from './Blog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Icon from '@material-ui/core/Icon';
import { AccessAlarm, Search, QueryBuilder, Info } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

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
    }
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
                                <p className={classes.iconContent}>It is a long established fa
                                
                                
                                ct that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </Grid>
                            <Grid item sm={3}>
                                <Info className={classes.customIcon} />
                                <span className={classes.spanIconTitle}>Lorem Ipsum</span>
                                <p className={classes.iconContent}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="xl" className={classes.zeroPadding} style={{backgroundColor : "gray"}}> 
                        <Grid container justify="center" xs={10} sm={10} >
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </Grid>
                    </Container>
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