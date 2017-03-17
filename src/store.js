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