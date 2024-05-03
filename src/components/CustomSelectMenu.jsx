import React, { Component } from 'react';
import './CustomSelect.css'; 

class CustomSelectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"],
      selectedCountry: ""
    };
  }

  addCountry = () => {
    const { countries, selectedCountry } = this.state;
    return countries.map(country => (
      <li key={country} className={country === selectedCountry ? "selected" : ""} onClick={() => this.updateName(country)}>{country}</li>
    ));
  }

  updateName = (selectedCountry) => {
    this.setState({ selectedCountry });
  }

  handleInputChange = (e) => {
    const searchWord = e.target.value.toLowerCase();
    const { countries } = this.state;
    const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(searchWord));
    this.setState({ filteredCountries });
  }

  render() {
    const { selectedCountry, filteredCountries } = this.state;
    return (
      <div className="wrapper">
        <div className="select-btn" onClick={() => this.setState(prevState => ({ active: !prevState.active }))}>
          <span>{selectedCountry || "Select Country"}</span>
          <i className={`uil uil-angle-down ${this.state.active ? "rotate" : ""}`}></i>
        </div>
        <div className={`content ${this.state.active ? "active" : ""}`}>
          <div className="search">
            <i className="uil uil-search"></i>
            <input spellCheck="false" type="text" placeholder="Search" onChange={this.handleInputChange} />
          </div>
          <ul className="options">
            {filteredCountries && filteredCountries.length > 0 ? this.addCountry(filteredCountries) : <p style={{marginTop: "10px"}}>Oops! Country not found</p>}
          </ul>
        </div>
      </div>
    );
  }
}

export default CustomSelectMenu;
