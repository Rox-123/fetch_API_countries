import React, {Component} from 'react';
import './Country.css';

const countries = [
    'eesti',
    'finland',
    'romania',
    'poland',
    'switzerland',
    'spain',
    'albania',
    'belgium'
]

class Country extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          countryList : []
         };
      }

      addCountryInList(data) {
        //   const newCountry = [...this.state.countryList, data];
        const newCountry = [data];
          this.setState ({
              countryList: newCountry
          })
      }


      getRandomCountry() {
        const randomCountry = Math.floor(Math.random() * countries.length);
        return countries[randomCountry];
      }

      getData = () => {
          fetch(`https://restcountries.eu/rest/v2/name/${this.getRandomCountry()}`)
          .then( response => response.json())
          .then( data => {
            this.addCountryInList(data[0]);
          })
      }


  render () {
  return (
    <div>
        <button onClick = {this.getData} className = "fetchApiButton" >Fetch API</button>
        <div className="boxContainer">
                {
                    this.state.countryList.map( (country, index) => {
                        return (
                        <div className="boxContent" key={index}>
                            <h2>{country.name}</h2>
                            <h3>{country.nativeName}</h3>
                            <p>Capital: {country.capital}</p>
                            <p>Region: {country.region}</p>
                            <img src={country.flag}  alt="flag"/>  
                        </div>
                        )
                    })
                }
        </div>
        
    </div>
  );
  }
}

export default Country;