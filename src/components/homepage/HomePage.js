import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Blog from './Blog';
import Grid from '@material-ui/core/Grid';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Favorite';
// import Avatar from '@material-ui/core/Avatar';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import Api from '../../apis/api';

const customStyles = {
    root: {
        'marginTop' : '80px'
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
                <Grid container className={classes.root}>
                    <Blog />
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