export class AllServices {
    url = "https://jsonplaceholder.typicode.com"


    getUsers() {
        return fetch(`${this.url}/users`)
            .then(users => users.json())
            .then(users => {
                return users
            })
    }


    getPosts() {
        return fetch(`${this.url}/posts`)
            .then(posts => posts.json())
            .then(posts => {
                return posts
            })
    }


}