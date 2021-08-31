import React, { CSSProperties } from "react";

type Props = {
    teamId: number,
    getTeams: () => void
  };

export default function DeleteBtn(props: Props) {


    async function deleteTeam(event: any) {
        
        event.stopPropagation() //To stop bubbling
        const response = await fetch(`http://localhost:3000/api/delete-team/${props.teamId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        props.getTeams()
    }

    return (
                                                    
        <button onClick={(event) => deleteTeam(event)} style={btn}>
            Delete
        </button>
    )
}


const btn: CSSProperties = {
}