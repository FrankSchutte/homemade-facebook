const initialState = {
    frank: {
        _id: "frank",
        liked_posts: []
    }
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default usersReducer;
