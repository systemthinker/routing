import React, { useState } from "react";
import axios from 'axios';

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [searching, set_searching] = useState("idle...");

  const [data, set_data] = useState([]);

 

 

  const search = async () => {
    set_searching("starting search");
    console.log("Start searching for:", searchText);
  
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
  
  
 
  
    
    let dataFromApi = await axios.get(
      `https://omdbapi.com/?apikey=f5f45c92&s=${queryParam}`
    );
    

    set_data(dataFromApi.data.Search);
    console.log('set data complete',data)
  
    set_searching(`search for ${searchText} complete!`);
  };

  console.log(data);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
          
        
        />
        <button onClick={search}>Search</button>
      </p>
      <p>
         {searching}
      </p>

      
          {data.map((movie)=>{
              return (
            <div>  
              <p>{"Title: "}{movie.Title}</p> 
              <a href={movie.Title}>Go to free download</a> 
              <img src={movie.Poster}></img>
              <p>Year {movie.Year}</p>
              
            </div> 
              )     
          })}
        
 
          
      
    </div>
  );
}