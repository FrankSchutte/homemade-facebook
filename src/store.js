const posts = {
    "23j23h2": {
        _id: "23j23h2",
        title: "mooie ding",
        description: "# klant \n - ik ben een klant \n - ik wil kaas",
        dateModified: Date.now(),
        author: "frank",
        likes: 0,

        comments: [{
            author: "albert",
            dateModified: Date.now(),
            description: "iets"
        }]
    },
    "23443j23h2": {
        _id: "23443j23h2",
        title: "mooie ding",
        description: "# klant \n - ik ben een klant \n - ik wil kaas",
        dateModified: Date.now(),
        author: "frank",
        likes: 0,

        comments: [{
            author: "albert",
            dateModified: Date.now(),
            description: "iets"
        }]
    }
};

const users = {
    frank: {
        _id: "frank",
        liked_posts: []
    }
};

export {users, posts};


//mongodb user reference naar post, post embedded comments + likes