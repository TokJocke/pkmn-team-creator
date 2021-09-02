import React, { CSSProperties } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { TeamDetails } from "./main";
import TeamMember from "./teamMember";
import bgImg from "../img/pokemon-BG.jpg"

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
        })
    };



    componentDidMount() {
        this.getTeam()

    }


  
    render() {
        if(this.state.team) {
            return (
                <div style={wrapper}>
                    <h1 style={titleStyle}>{this.state.team.name}</h1>
                    <div style={container}>
                        {this.state.team.pkmn.map((item) => {
                            return <TeamMember 
                                        key={item.id} 
                                        pokemon={item} 
                                        additionalStats={true}
                                        >
                                    </TeamMember>
                        })}
                    </div>
                    <Link to={`/`}>
                        <button style={btnStyle}>
                            Back
                        </button>
                    </Link>
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

    alignItems: "flex-start",
}

const wrapper: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    backgroundImage: `url(${bgImg})`,


}

const titleStyle: CSSProperties = {
    fontSize: "5em",
    color: "rgb(230, 230, 230)"
}

const btnStyle: CSSProperties = {
    margin: "100px",
    fontSize: "2.5em",
    borderRadius: "5px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "35px",
    paddingLeft: "35px",
    backgroundColor: "lightgreen",
    cursor: "pointer",
    border: "none"
}