import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '' //these are the states of the App, these describe the app.
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // we request the users object from the API.
            .then(response => response.json()) // the data received is then converted into json format
            .then(users => this.setState({ robots: users })) // the users data is parsed into state using setState.

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // update State 

    }

    render() {
        const { robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }

}

export default App;