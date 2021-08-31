import React, { CSSProperties } from "react";

type Props = {
    inputValue: string
    selectedPkmn: any[]
    getTeams: () => void
  };

export default function NewTeamBtn(props: Props) {

    const team = {
        name: props.inputValue,
        pkmn: props.selectedPkmn
    }

    /* Vid tid lägg till funktion som tömmer isSelected och inputvalue vid onclick */

    async function postNewTeam() {
        //console.log("b4 fetch: ", team)
        const response = await fetch("http://localhost:3000/api/save-new-team", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(team)
        })
        //console.log(response)
        props.getTeams()
    }

    return (
                                                    
        <button onClick={() => postNewTeam()} style={btn}>
            Add team
        </button>
    )
}


const btn: CSSProperties = {
    fontSize: "1.2em",
    display: "flex"
}