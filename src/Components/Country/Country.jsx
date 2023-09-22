import { useState } from "react";

const Country = ({ country, handelVisitedCountry }) => {

  console.log(country);
  const {name, flags, population, region, area, coatOfArms, continents, timezones, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handelVisited = () =>{
    setVisited(!visited);
  }


  return (
    <div>

      <div className={`p-5 border-2 ${visited && 'bg-red-500'}`}>

        <h1>Country Name: {name?.common}</h1>
        <span>Country Flag:</span>
        <img src={flags?.png} />
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>

        <div className="flex justify-between items-center">
          <p>coatOfArms: </p>
          <img className="w-[50px]" src={coatOfArms?.png} alt="" srcset="" />
        </div>

        <p>Continents: {continents[0]}</p>
        <p>Timezones: {timezones[0]}</p>
        <p><small>Code: {cca3}</small></p>

        <button className="bg-gray-400 mr-3 px-5 py-2" onClick={()=>handelVisitedCountry(country)}>Mark Visited</button>

        <button className="bg-gray-500 px-5 py-2" onClick={handelVisited}>{visited? 'Visited' : 'Going'}</button>
        {
          visited ? 'tumi visit korco bhai' : 'Tomar visite kora hoi nai'
        }

      </div>

    </div>
  );
};

export default Country;
