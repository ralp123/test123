export const getPostD = (response) => {
    return {
        type: 'GET_POST',
        postDetails: response, 
        isLoading: false
    }
}