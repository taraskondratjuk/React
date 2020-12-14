export default class AllServices {
    url = "https://jsonplaceholder.typicode.com"

    async getUsers() {
        return await fetch(`${this.url}/users`)
            .then(users => users.json())
            .then(users => users)

    }


    async getFullUser(id) {
        return await fetch(`${this.url}/users/${id}`)
            .then(fullUser => fullUser.json())
            .then(fullUser => fullUser)
    }


    async getPosts() {
        return await fetch(`${this.url}/posts`)
            .then(posts => posts.json())
            .then(posts => posts)
    }


    async getFullPost(postId) {
        return await fetch(`${this.url}/posts/${postId}`)
            .then(fullPost => fullPost.json())
            .then(fullPost => fullPost)
    }


    async getComments() {
        return await fetch(`${this.url}/comments`)
            .then(comments => comments.json())
            .then(comments => comments)
    }

    async getFullComment(id) {
        return await fetch(`${this.url}/comments/${id}`)
            .then(comment => comment.json())
            .then(comment => comment)
    }

}