import React, { Component } from "react";
import Card from './Card';
import SearchForm from './SearchForm';
import API from "../utils/API";
class MainContainer extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sortField: ""
    }
    componentDidMount() {
        API.search()
            .then(res => {
                console.log(res)
                this.setState({
                    result: res.data.results.map((e, i) => ({
                        firstName: e.name.first,
                        lastName: e.name.last,
                        picture: e.picture.large,
                        email: e.email,
                        phone: e.phone,
                        dob: e.date,
                        key: i
                    }))
                })
            })
            .catch(err => console.log(err));
    }
    filterEmployees = (searchkey) => {
        var filterResult = this.state.result.filter(person => person.firstName === searchkey)

        this.setState({
            result: filterResult
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.filterEmployees(value);
        this.setState({
            [name]: value
        });
        this.filterEmployees(value);
        this.filterEmployees(this.state.search);

    };
    handleInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value

        });

    };
    render() {
        return (
            <div className="container">
                <div className="searching">
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </div>
                <div>
                    {[...this.state.result].map((item) =>
                        <Card
                            picture={item.picture}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            email={item.email}
                            phone={item.phone}
                            dob= {item.date}

                            key={item.key}
                        />
                    )}
                </div>
            </div>
        )
    }
}
export default MainContainer;
