import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import { TeamDetails } from "./main";
import TeamMember from "./teamMember";


export interface Props {

}

export interface State {
    team: TeamDetails | null
}

export default class SingleView extends React.Component<RouteComponentProps<{ teamId: string }>, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            team: null,
        }
    }

    getTeam = async () => {
        const response = await fetch(`http://localhost:3000/api/get-team/${this.props.match.params.teamId}`);
        const jsonData = await response.json();
        this.setState({
            team: {
                id: jsonData.id,
                name: jsonData.name,
                pkmn: jsonData.pkmn
            }
        }, () => console.log(this.state))
    };



    componentDidMount() {
        this.getTeam()

    }


  
    render() {
        if(this.state.team) {
            return (
                <div style={container}>
                    {this.state.team.pkmn.map((item) => {
                      {console.log(item)}  
                        return <TeamMember pokemon={item} additionalStats={true}></TeamMember>
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    No team found
                </div>
            )
        }
        
   
    }
}



const container: CSSProperties = {
    display: "flex",
    justifyContent: "center"
}