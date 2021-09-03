import React from "react";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import DeleteBtn from "./deleteBtn";
import List from "./list";
import { TeamDetails } from "./main";
import TeamMember from "./teamMember";

interface Props {
    teams: TeamDetails[],
    getTeams: () => void,
    updateTeamState: (state: any) => void,
    setIsModalOpen: (team?: TeamDetails, event?: any) => void,
};

export default class Teams extends React.Component<Props> {
    constructor(props: any) {
        super(props);

        this.selectTeam = this.selectTeam.bind(this)
    }



    selectTeam(obj: string) {
        const foundTeam = (team: TeamDetails) => {
            return team.name === obj;
          };
        let clonedArray = this.props.teams
        let team = clonedArray.find(foundTeam)
        if(team) {
            team.isSelected = !team.isSelected
            this.props.updateTeamState(clonedArray)
        } 
       
    }

    stopExit(event: any) {
        event.stopPropagation()
    }


    render() {
        return (
            <List extraStyling={{marginTop: "50px"}}>
                {  
                    this.props.teams.map((team, i) => {
                        return (
                            <Card key={team.id} title={team.name} selector={this.selectTeam} styling={extraCardStyling}>
                                <div style={teamOptionsWrapp}>
                                    <div>
                                        <button 
                                            style={btnStyle}
                                            onClick={(event) => this.props.setIsModalOpen(team, event)}
                                        >
                                            uppdate
                                        </button>
                        
                                        <Link to={`/${team.id}`}>
                                            <button style={btnStyle}>
                                                Team page
                                            </button>
                                        </Link>
                                    </div>
                                    
                                    <DeleteBtn 
                                        teamId={team.id} 
                                        getTeams={this.props.getTeams}
                                    />

                                </div>
                                <div style={teamContainer}>
                                    {
                                        team.isSelected? 
                                            team.pkmn.map((pk: any) => {
                                                return <TeamMember 
                                                            key={pk}/* Felet ligger här!!!!!! */
                                                            pokemon={pk}
                                                        /> 
                                            }) 
                                            : 
                                            null
                                    }
                                </div> 
                            </Card>
                        )            
                    })  
                }
            </List>
            
        )
    }
}

const teamContainer: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
}
        
const extraCardStyling: CSSProperties = {
    backgroundColor: "rgba(230, 230, 230, 0.6)",
}

const btnStyle: CSSProperties = {
    backgroundColor: "lightgreen",
    fontSize: "1.2em",
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    marginRight: "5px",
    cursor: "pointer"
}

const teamOptionsWrapp: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: "10px",
    marginBottom: "10px",
    borderBottom: "2px solid rgb(230, 230, 230)"
}