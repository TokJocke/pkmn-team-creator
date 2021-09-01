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
            <List>
                {  
                    this.props.teams.map((team) => {
                    return (
                        <Card key={team.id} title={team.name} selector={this.selectTeam}>
                            <div style={btwWrapp}>
                                <DeleteBtn 
                                    teamId={team.id} 
                                    getTeams={this.props.getTeams}
                                />
                                <button 
                                    onClick={(event) => this.props.setIsModalOpen(team, event)}>
                                    uppdate
                                </button>
                                <Link to={`/${team.id}`}>single page</Link>
                            </div>
                            <div style={teamContainer}>
                                {
                                    team.isSelected? 
                                        team.pkmn.map((pk) => {
                                            return <TeamMember pokemon={pk}/>
                                            
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
    flexWrap: "wrap"
}
    
const btwWrapp: CSSProperties = {
    display: "flex",
}
    
