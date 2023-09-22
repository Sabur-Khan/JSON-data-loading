import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setvisitedCountries] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
        
    }, [])

    const handelVisitedCountry = country =>{
      const newvisitedCountry = [...visitedCountry, country]
      setvisitedCountries(newvisitedCountry);
    }

  return (
    <div>
      <h3 className="text-center mb-10 font-medium">Countries Data: {countries.length}</h3>
      <h3 className="mb-5">Visited Country list {visitedCountry.length}</h3>
      <div className="mb-5">
        <ul>
          {
            visitedCountry.map(country => <li className="list-decimal" key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          countries.map(country => <Country country={country} key={country.cca3} handelVisitedCountry={handelVisitedCountry}></Country>)
        } 
      </div>
    </div>
  )
}

export default Countries