import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'
const Countries = () => {
    const[countries,setCountries] = useState([]); 
    const[visitedCountries,setVisitedcountries] = useState([]);
    const[visitedFlags,setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    const handlevisitedCountry = (country) =>{
         console.log('add this country as visited');
         const newVisitedcountry = [...visitedCountries,country];
         setVisitedcountries(newVisitedcountry);
    } 
    const handleVisitedFlags = (flag) =>{
        console.log('visited flag added');
        const newvisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newvisitedFlags);
    }
    return (
        <div>
            {/* visited Flags */}
            <div>
               {
                visitedFlags.map(flags =><img src={flags}></img>)
               }
            </div>
            {/* Visited country */}
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited country:{visitedCountries.length}</h3>
                <ul>
                   {
                    visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>
             {/* Display country */}
            <div className="countries">
            {
                countries.map(desh => <Country key={desh.cca3} 
                    handlevisitedCountry={handlevisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    desh={desh}> 
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;