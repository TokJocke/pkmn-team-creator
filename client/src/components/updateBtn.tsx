import React, { CSSProperties } from "react";
import { TeamDetails } from "./main";

type Props = {
    setIsModalOpen: (team?: TeamDetails) => void,
    inputValue: string,
    currentTeam?: TeamDetails,
    getTeams: () => void
  };

export default function UpdateBtn(props: Props) {


    async function uppdateTeam(event: any) {
        
        event.stopPropagation() //To stop bubbling

        const updateObj = {
            name: props.inputValue,
            pkmn: props.currentTeam?.pkmn
        }
        
        if(props.currentTeam) {
            await fetch(`http://localhost:3000/api/update-team/${props.currentTeam.id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateObj)
            })
            props.setIsModalOpen()
            props.getTeams()
        }
        
    }

    return (
                                                    
        <button 
            style={btn}
            onClick={(event) => uppdateTeam(event)}
            >    
            Update
        </button>
    )
}


const btn: CSSProperties = {
    backgroundColor: "lightgreen",
    width: "20%",
    fontSize: "1.5em",
    marginTop: "15px",
    marginBottom: "15px",
    alignSelf: "center",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
    cursor: "pointer",
}