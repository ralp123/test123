import { getPostD } from '../components/redux/action/postActions';
const axios = require('axios').default

const foodBlog = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFTOKEN',
    }
});

function getPost(dispatch){
    dispatch(
        { type: 'IS_LOADING', isLoading: true }
    );
    
    const url = '/post/api/v1/'

    foodBlog.get(url)
        .then(function (response) {
            if(response.status === 200){
                dispatch(
                    getPostD(response.data)
                );   
                //return response.data;
            }
        })
        .catch(function (error) {
            // handle error 
            console.log(error);
        }) 
        .finally(function () {
            // always executed
        });
}

export default{
    getPost
}