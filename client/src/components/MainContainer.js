import React, { Component } from "react";
import Table from "./Table";
import SearchForm from "./SearchForm";
import API from "../utils/API";
class MainContainer extends Component {
  state = {
    result: [],
  };
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.date,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }
  filterEmployees = (searchkey) => {
    var filterResult = this.state.result.filter(
      (person) => person.firstName.includes(searchkey)
    );

    this.setState({
      result: filterResult,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.filterEmployees(this.state.search);
  };
  handleInputChange = (event) => {
      console.log(event.target)
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='searching'>
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <div>
          <Table 
          result={this.state.result} />
        </div>
      </div>
    );
  }
}
export default MainContainer;
