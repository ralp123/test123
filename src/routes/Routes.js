import React from 'react';
import HomePage from '../components/homepage/HomePage';
import Blog from '../components/homepage/Blog';
import Navbar from '../components/navbar/Navbar';
import Login from '../components/loginpage/Login';
// import PostPage from '../components/postpage/PostPage';
// import TestPage from '../components/testpage/TestP';
// import Blog from '../components/blog/Blog';
// import Login from '../components/login/Login';
// import Register from '../components/register/Register';
import { BrowserRouter, Route} from "react-router-dom";


function Routes() {
    return (   
        <BrowserRouter>
            <Navbar />

            <Route exact path="/" component={HomePage} />

            <Route exact path="/blog" component={HomePage} />

            <Route exact path="/login" component={Login} />

            {/*
            <Route exact path="/blog" component={Blog} />

            <Route exact path="/post/:postId" component={PostPage} />    

            <Route exact path="/login" component={Login} />   

            <Route exact path="/register" component={Register} />  */}
        </BrowserRouter>
    );
}

export default Routes;
