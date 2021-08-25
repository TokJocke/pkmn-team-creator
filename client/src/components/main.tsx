import React, { CSSProperties } from "react";
import RenderList from "./renderList";
import Section from "./section";


interface Props {

}

interface State {
    pokemon: PokemonDetail[],
    teams: []
}

interface PokemonDetail {
    id: number,
    name: string,
    isSelected?: boolean
}


export default class Main extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: [],
            teams: []
        };
      
        this.selector = this.selector.bind(this)
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
    
    selector(obj: string) {
        const foundPokemon = (pokemon: PokemonDetail) => {
            return pokemon.name === obj;
          };
        let clonedArray = this.state.pokemon
        let pkmn = clonedArray.find(foundPokemon)
        if(pkmn) {
            pkmn.isSelected = !pkmn.isSelected
            this.setState({
                pokemon: clonedArray
            })
        } 

        console.log(this.state)
    }

    componentDidMount() {
        if(!this.state.pokemon.length) {
            this.getPokemons()
            
        }
    }
 
    render() {
        return (
            <div style={wrapper}>
                <Section>
                    <RenderList selector={this.selector} list={this.state.pokemon} />
                </Section>
                <Section>
                    hejsan
                </Section>
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