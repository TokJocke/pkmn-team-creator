import React, { CSSProperties } from "react";
import { PokemonDetail } from "./main";

type Props = {
    inputValue: string
    selectedPkmn: PokemonDetail[]
    getTeams: () => void
    resetIsSelected: () => void,
    updateInputValue: (event?: any) => void
  };

export default function NewTeamBtn(props: Props) {

    let filterdPkmn = props.selectedPkmn.map((pkmn) => pkmn.id)
  
    const team = {
        name: props.inputValue,
        pkmn: filterdPkmn
    }

    async function postNewTeam() {
        
        await fetch("http://localhost:3000/api/save-new-team", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(team)
        })
        props.getTeams()
        props.resetIsSelected()
        props.updateInputValue()
    }

    return (
                                                    
        <button onClick={() => postNewTeam()} style={btn}>
            Add team
        </button>
    )
}


const btn: CSSProperties = {
    fontSize: "1.5em",
    width: "40%",
    alignSelf: "center",
   /*  marginTop: "15px", */
    backgroundColor: "lightgreen",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
}