import React, { CSSProperties } from "react";

type Props = {
    inputValue: string
    selectedPkmn: any[]
    getTeams: () => void
    resetIsSelected: () => void,
    updateInputValue: (event?: any) => void
  };

export default function NewTeamBtn(props: Props) {

    const team = {
        name: props.inputValue,
        pkmn: props.selectedPkmn
    }


    async function postNewTeam() {
        
        await fetch("http://localhost:3000/api/save-new-team", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(team)
        })
        //console.log(response)
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