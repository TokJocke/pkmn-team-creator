import React, { CSSProperties } from "react";
import { PokemonDetail, TeamDetails } from "./main";
import PkmnDropDown from "./pkmnDropDown";

type Props = {
    pokemon: any
    additionalStats?: boolean
    changeBtn?: boolean
    children?: any
    allPokemons?: PokemonDetail[]
    currentTeam?: TeamDetails
    /* setNewTeam?: (team?: TeamDetails) => void */
    setCurrentTeam?: (team: any) => void

  };

interface State {
    pokemonDetails: any,
    loading: boolean
}

export default class TeamMember extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            pokemonDetails: [],
            loading: true
        };
    }
    async componentDidMount() {
        if(!this.state.pokemonDetails.length) {
            await this.getPokemonDetails()
        }
    }
       
    getPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`);
        const jsonData = await response.json();
        
        this.setState({
            pokemonDetails: jsonData
        }, () => this.setState({loading: false}))
    };
    
    

    
    renderStats() {
        if(this.props.additionalStats) {
            return(
                <div style={teamMemberWrap}>
                    <p>{this.state.pokemonDetails.name}</p>
                    <img src={this.state.pokemonDetails.sprites.front_default} alt={"pkmn sprite"}></img>
                    <div style={statWrapp}>
                        <p style={statStyle}>HP: {this.state.pokemonDetails.stats[0].base_stat}</p>   
                        <p style={statStyle}>ATK: {this.state.pokemonDetails.stats[1].base_stat}</p>   
                        <p style={statStyle}>DEF: {this.state.pokemonDetails.stats[2].base_stat}</p>   
                        <p style={statStyle}>S-ATK: {this.state.pokemonDetails.stats[3].base_stat}</p>   
                        <p style={statStyle}>S-DEF: {this.state.pokemonDetails.stats[4].base_stat}</p>   
                        <p style={statStyle}>SPEED: {this.state.pokemonDetails.stats[5].base_stat}</p>   
                    </div>
                </div>
            )
        } else {
            return(
                <div style={teamMemberWrap}>
                    <p>{this.state.pokemonDetails.name}</p>
                    <img src={this.state.pokemonDetails.sprites.front_default} alt={"pkmn sprite"}></img>
                    {this.props.changeBtn? 
                        <PkmnDropDown 
                            pokemon={this.props.pokemon} 
                            allPokemons={this.props.allPokemons}
                            currentTeam={this.props.currentTeam}
                            /* setNewTeam={this.props.setNewTeam} */
                            setCurrentTeam={this.props.setCurrentTeam}
                        /> 
                        : 
                        null}
                </div>
            )
        }
    }
    
    render() {
        if(this.state.loading) {
            return (
                <div>
                    <p>loading</p>
                </div>
            )
        }
        else {
            return (
                this.renderStats()
            )
        }
    }
}


const teamMemberWrap: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "beige",
    border: "1px solid black",
    margin: "2px",
    minWidth: "15%",
    borderRadius: "10px",
    textTransform: "capitalize",
 
}

const statWrapp: CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
}

const statStyle: CSSProperties = {
    width: "50%"
}