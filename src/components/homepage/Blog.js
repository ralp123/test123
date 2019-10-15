import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Api from '../../apis/api';
const axios = require('axios');

const customStyles = {
    root: {
        'padding' : '20px',
        'marginBottom': '20px'
    },
    media: {
        'height': '0',
        'paddingTop': '30%', // 16:9
    },
    card: {
        'maxWidth': '1200px',
    },
};

class Blog extends Component {
    constructor(props){
        super(props)
    }

    render(){ 
        const { classes } = this.props;
        // console.log(typeof this.props.post)
        return (
            <>  
                <Grid container justify="center">
                    {
                        this.props.isPostLoading ?  
                            <CircularProgress />
                        : (
                            this.props.post.map((post,i) =>   
                                <Card key={post.id} className={`${classes.card} + ${classes.root}`}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" >
                                                R
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={post.title}
                                        subheader={post.date_created}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        // image={"images/"+post.img_path}
                                        image="../../images/grilled-pork.jpeg"
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {post.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            )
                        )     
                    }
                </Grid>
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