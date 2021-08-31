import React, { CSSProperties } from "react";
import { PokemonDetail } from "./main";

type Props = {
    selectedPkmns: PokemonDetail[],
  };

export default function PkmnCounter(props: Props) {
    
    return (
                                                    
        <div style={pokeCounterDiv}>
            <p style={title}>Pokemon: </p>
            {props.selectedPkmns.map((pkmn) => {
                return <div style={round}></div>
            })}
        </div>
    )
}


const round: CSSProperties = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "100%",
    marginRight: "5px"
}

const pokeCounterDiv: CSSProperties = {
    display: "flex",
    marginTop: "5px",
    marginBottom: "5px",
    backgroundColor: "lightgray",
    paddingTop: "5px",
    paddingBottom: "5px"
}

const title: CSSProperties = {
    marginRight: "5px",
    marginBlockStart: "0",
    marginBlockEnd: "0",
    fontSize: "1.2em"
}