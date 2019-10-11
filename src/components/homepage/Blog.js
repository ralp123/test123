import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Api from '../../apis/api';
const axios = require('axios');

const customStyles = {
    root: {
        'padding' : '20px',
        'margin' : '5px'
    },
};

class Blog extends Component {
    constructor(props){
        super(props)
    }

    render(){ 
        const { classes } = this.props;
        console.log(typeof this.props.post)
        return (
            <>  
                {
                    this.props.isPostLoading ?  
                        <Grid container  justify="center">
                            <CircularProgress />
                        </Grid> 
                     : (
                        this.props.post.map((post,i) =>   
                            <Paper key={i} className={classes.root}>
                                <Typography variant="h3" component="h3">
                                    {post.title}
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {post.author}
                                </Typography>
                                <Typography component="p">
                                    {post.content}
                                </Typography>
                            </Paper>
                        )
                    )     
                }
            </>
        )
    } 
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        post: state.post,
        isPostLoading: state.isPostLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    Api.getPost(dispatch)

    return {
       //codes
    }
}

export default withStyles(customStyles)(connect(mapStateToProps, mapDispatchToProps)(Blog));