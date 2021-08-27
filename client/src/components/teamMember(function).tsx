import React, { CSSProperties, useEffect, useState } from "react";

type Props = {
    pokemon: any
  };

export default function TeamMember(props: Props) {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]); // Svaret från api är ett {} != [] 
  
    useEffect(() => {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((e) => {
          setLoading(false);
          setError('fetch failed');
        });
    }, []/* [] = to not start loop */);
  
    if (loading) {
      return <p>loading..</p>;
    }
  
    if (error !== '') {
      return <p>ERROR: {error}</p>;
    }
    
    
        console.log(data)
    
    return (
        <div>
            <p>{props.pokemon}</p>
         {/*    {data.map((item) => {
                <p>{item.name}</p>)
            })} */}
        </div>
    )
}


