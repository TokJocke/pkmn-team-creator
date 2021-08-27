import React from "react";
import { CSSProperties } from "react";
import Card from "./card";
import List from "./list";
import TeamMember from "./teamMember";

interface Props {

  };

interface State {
    teams: TeamDetails[],
   
}

interface TeamDetails {
    id: number,
    name: string,
    pkmn: string[]
    isSelected?: boolean
}

export default class Teams extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            teams: [],
        };
       
        this.selectTeam = this.selectTeam.bind(this)
    }

    getTeams = async () => {

        const response = await fetch(`http://localhost:3000/api/get-all-teams`);
        const jsonData = await response.json();
        console.log("response in getTeams =", jsonData)

        const allTeams: TeamDetails[] = jsonData.map((team: TeamDetails) => {
            return {
                id: team.id,
                name: team.name,
                pkmn: team.pkmn,
            }
        })
        this.setState({teams: allTeams}, () => { console.log("team state in getTeams =",this.state.teams) })

    };

    selectTeam(obj: string) {
        const foundTeam = (team: TeamDetails) => {
            return team.name === obj;
          };
        let clonedArray = this.state.teams
        let team = clonedArray.find(foundTeam)
        if(team) {
            team.isSelected = !team.isSelected
            this.setState({
                teams: clonedArray
            })
        } 
        console.log(this.state.teams)
    }

    componentDidMount() {
        if(!this.state.teams.length) {
            this.getTeams()
        }
    }

    render() {
        return (
            <List>
                {  
                    this.state.teams.map((team) => {
                    return (
                        <Card key={team.id} title={team.name} selector={this.selectTeam}>
                            <div style={teamContainer}>
                                {
                                    team.isSelected? 
                                        team.pkmn.map((pk) => {
                                            return <TeamMember pokemon={pk} />
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
}
    
    
