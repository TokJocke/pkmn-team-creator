import React, { CSSProperties } from "react";
import FloatingBtns from "./floatingBtns";
import Pokemons from "./pokemons";
import Section from "./section";
import Teams from "./teams";
import UpdateView from "./updateView";

interface Props {

}
interface State {
    pokemon: PokemonDetail[],
    teams: TeamDetails[],
    selectedPkmns: any[],
    isUpdateViewOpen: boolean,
    currentTeam?: TeamDetails
}

export interface PokemonDetail {
    id: number,
    name: string,
    isSelected?: boolean
}

export interface TeamDetails {
    id: number,
    name: string,
    pkmn: string[]
    isSelected?: boolean
}


/* Kanske ha en api komponent för att slippa wall of text i main */
export default class Main extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: [],
            teams: [],
            selectedPkmns: [],
            isUpdateViewOpen: false,
        };
    }

    setisUpdateViewOpen: (team?: TeamDetails, event?: any) => void = (team?, event?) => {
        if(event) {
            event.stopPropagation()
        }
        this.setState({
            isUpdateViewOpen: !this.state.isUpdateViewOpen,   
            currentTeam: team
        })
    }

    setCurrentTeam: (team: any) => void = (team) => {
        this.setState({
            currentTeam: team
        }, () => console.log(this.state.currentTeam))
    }

    updatePkmnState: (newState: any) => void = (newState: any) => {
        this.setState({
            pokemon: newState
        }, () => this.getSelectedPkmns())
    }

    updateTeamState: (newState: any) => void = (newState: any) => {
        this.setState({
            teams: newState
        }, () => console.log("new state in main: ", this.state))
    }

    getSelectedPkmns() { 
        if(this.state.pokemon.length) {
            let selected: any = []
            this.state.pokemon.forEach(pkmn => {
                if(pkmn.isSelected) {
                    selected.push(pkmn.id)
                }
            });
            this.setState({selectedPkmns: selected}, () => console.log(this.state.selectedPkmns))
        }
    }
    
    getPokemons = async () => {
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        const jsonData = await response.json();
        const allPokemons: PokemonDetail[] = jsonData.results.map((pokemon: {name: string, url: string}) => {
            return {
                name: pokemon.name,
                id: pokemon.url.substr(pokemon.url.indexOf('pokemon/')).replace(/\D/g,''),
                isSelected: false
            }
        })
        this.setState({pokemon: allPokemons}, () => { console.log(this.state) })
    };

    getTeams = async () => {

        const response = await fetch(`http://localhost:3000/api/get-all-teams`);
        const jsonData = await response.json();
       
        const allTeams: TeamDetails[] = jsonData.map((team: TeamDetails) => {
            return {
                id: team.id,
                name: team.name,
                pkmn: team.pkmn,
            }
        })
        this.setState({teams: allTeams}, () => { console.log("team state in getTeams =",this.state.teams) })
    };
    
    componentDidMount() {
        if(!this.state.pokemon.length) {
            this.getPokemons() 
        }
        if(!this.state.teams.length) {
            this.getTeams() 
        }
    }
 
    render() {
        return (
            <div id="main" style={wrapper}>
                <Section>
                    <Pokemons 
                        pokemon={this.state.pokemon} 
                        updatePkmnState={this.updatePkmnState}
                    />
                </Section>
                <Section>
                    <Teams 
                        teams={this.state.teams} 
                        updateTeamState={this.updateTeamState} 
                        getTeams={this.getTeams} 
                        setIsModalOpen={this.setisUpdateViewOpen}
                    />
                </Section>  
                {
                    this.state.pokemon.length? 
                        <FloatingBtns selectedPkmns={this.state.selectedPkmns} getTeams={this.getTeams}/> 
                        : 
                        null 
                }
                {
                    this.state.isUpdateViewOpen?
                        <UpdateView 
                            setIsModalOpen={this.setisUpdateViewOpen} 
                            currentTeam={this.state.currentTeam}
                            pokemonList={this.state.pokemon}
                            setCurrentTeam={this.setCurrentTeam}
                            />
                        :
                        null
                }
            </div>
        )
    }
}

const wrapper: CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "blue",
    display: "flex",
    overflow: "auto"
}