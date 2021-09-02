import React, { CSSProperties } from "react";
import { PokemonDetail } from "./main";
import pkBall from "../img/pkBall.png"

type Props = {
    selectedPkmns: PokemonDetail[],
  };

export default function PkmnCounter(props: Props) {
    

    return (

        <div style={pokeCounterDiv}>
            {props.selectedPkmns.map((pkmn) => {
                return (
                    <img 
                        key={pkmn.id}
                        style={imgStyle}
                        src={pkBall}
                        alt={"pokemonball"}
                    />
                )
                        
            })}
        </div>
    )
}


const imgStyle: CSSProperties = {
    maxHeight: "30px",
    marginRight: "10px"
}

const pokeCounterDiv: CSSProperties = {
    display: "flex",
    marginTop: "10px",
    marginBottom: "10px",
    color: "rgb(230,230,230)",
    justifyContent: "center"
  
}
