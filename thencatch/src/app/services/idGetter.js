const IdGetter =  {

    getPostIdSet(posts) {
        var postIdSet = new Set();

        posts.forEach(post => {
            postIdSet.add(post.id)
        });
        return postIdSet;
    },

    getUserIdSet(posts) {
        var userIdSet = new Set();

        posts.forEach(post => {
            userIdSet.add(post.userId);
        })
        return userIdSet;
    }
};

module.exports = IdGetter;