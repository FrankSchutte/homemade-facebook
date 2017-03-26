import {GET_POSTS, ADD_POST} from '../constants';

const initialState = {
    "23j23h2": {
        _id: "23j23h2",
        title: "mooie ding",
        description: "# klant \n - ik ben een klant \n - ik wil kaas",
        dateModified: Date.now(),
        author: "frank",
        likes: 0,

        comments: [{
            author: "albert",
            dateModified: 1489563217383,
            description: "iets"
        }]
    },
    "23443j23h2": {
        _id: "23443j23h2",
        title: "JA!",
        description: "# klant \n - ik ben een klant \n - ik wil kaas",
        dateModified: 1489663207383,
        author: "frank",
        likes: 0,

        comments: [{
            author: "albert",
            dateModified: Date.now(),
            description: "iets"
        }]
    },
    "23443j23hkj2": {
        _id: "23443j23hkj2",
        title: "NEE!",
        description: "# klant \n - ik ben een klant \n - ik wil kaas",
        dateModified: 1489663207383,
        author: "HENK",
        likes: 0,

        comments: [{
            author: "albert",
            dateModified: Date.now(),
            description: "iets"
        }]
    }
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default postsReducer;
