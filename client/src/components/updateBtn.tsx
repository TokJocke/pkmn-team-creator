import React, { CSSProperties } from "react";

type Props = {
/*     teamId: number,
    getTeams: () => void */
  };

export default function UpdateBtn(props: Props) {


/*     async function deleteTeam(event: any) {
        
        event.stopPropagation() //To stop bubbling
        await fetch(`http://localhost:3000/api/delete-team/${props.teamId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        props.getTeams()
    } */

    return (
                                                    
        <button style={btn}>
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
    borderRadius: "15px",
    border: "none",
    padding: "5px"
}