export default class AllServices {
    url = "https://jsonplaceholder.typicode.com";

    async getUsers() {
        return await fetch(`${this.url}/users`)
            .then(users => users.json())
            .then(users => users)
    }

    async getPosts() {
        return await fetch(`${this.url}/posts`)
            .then(posts => posts.json())
            .then(posts => posts)
    }

    async getComments() {
        return await fetch(`${this.url}/comments`)
            .then(comments => comments.json())
            .then(comments => comments)
    }
}