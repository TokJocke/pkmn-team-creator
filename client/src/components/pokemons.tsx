import React from "react";
import Card from "./card";
import List from "./list";



interface Props {

}

interface State {
    pokemon: PokemonDetail[],
}

interface PokemonDetail {
    id: number,
    name: string,
    isSelected?: boolean
}



export default class Pokemons extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: [],
        };
      
        this.selectPkmn = this.selectPkmn.bind(this)
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
    
    selectPkmn(obj: string) {
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

    greenOrWhite(item: any) {
        if(item.isSelected) {
            return {backgroundColor: "green"}
        }
        else {
            return {backgroundColor: "white"}
        }
    }

    componentDidMount() {
        if(!this.state.pokemon.length) {
            this.getPokemons()
            
        }
    }

 
    render() {
        return (
            <List>
                {  
                    this.state.pokemon.map((item) => {
                    return <Card key={item.id} title={item.name} isSelectedStyle={this.greenOrWhite(item)} selector={this.selectPkmn} />           
                    })  
                }
            </List>
            
        )
    }
}

