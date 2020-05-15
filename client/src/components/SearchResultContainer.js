import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchContainer from "./SearchContainer"
import Card from "./Card";
import API from "../utils/API";
import '../styles/style.css';


class SearchResultContainer extends Component {
  state = {
    result: [],
  };
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
            dob: e.age,
            key: i
          }))
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container">
      <div className="header">
        <h1>Employee Directory</h1>
      </div>

        <div className="searching">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <SearchContainer
        />
        <div>
          {[...this.state.result].map((item) =>
            <Card
              picture={item.picture}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              key={item.key}
            />
          )}
        </div>
      </div>
    );
  }
}
export default SearchResultContainer;
