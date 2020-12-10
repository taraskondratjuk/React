export default class AllServices {
    url = "https://swapi.dev/api"

    async getPeople() {
        return await fetch(`${this.url}/people/`)
            .then(people => people.json())
            .then(people => people)
    }

    async getFilms() {
        return await fetch(`${this.url}/films/`)
            .then(films => films.json())
            .then(films => films)
    }

    async getPlanets() {
        return await fetch(`${this.url}/planets/`)
            .then(planets => planets.json())
            .then(planets => planets)
    }

}