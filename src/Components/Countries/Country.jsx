import { useState } from 'react';
import './Country.css'
const Country = ({desh,handlevisitedCountry,handleVisitedFlags}) => {
    console.log(desh);
    const{name,flags} = desh; 
    const[visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited && 'seen'}` }>
            <p>Name:{name.common}</p>
            <img src={flags.png} alt="" /> <br />
            <button onClick={()=>handleVisitedFlags(desh.flags.png)}>visited Flag</button> <br />
            <button onClick={()=>handlevisitedCountry(desh)}>Mark visited</button> <br />
            <button onClick={handleVisited}>Visited</button>
            {
                (visited ?'I have visited the country' : 'Going future')
            }
        </div>
    );
};

export default Country;