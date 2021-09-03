import React, { CSSProperties } from "react";
import { PokemonDetail, TeamDetails } from "./main";

type Props = {
    pokemon: any
    allPokemons?: PokemonDetail[]
    currentTeam?: TeamDetails
    setCurrentTeam?: (team: any) => void

  };

interface State {
    isShowing: boolean
}


export default class PkmnDropDown extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: false
        }
    }

    /* 
        If one pokemon, is selected twice map gives error cuz id aint unique.
        For further development add quantity attribute or take away possibilty
        to choose the same pokemon twice
     */
    changePkmn(newPkmn: any) {

        if(this.props.pokemon !== newPkmn.id) {
            if(this.props.currentTeam) {
                const newTeam: any = this.props.currentTeam?.pkmn.map(pkmn => pkmn === this.props.pokemon? newPkmn.id : pkmn)
                if(this.props.setCurrentTeam)  {
                    const finalTeam: TeamDetails = {
                        id: this.props.currentTeam?.id,
                        name: this.props.currentTeam?.name,
                        pkmn: newTeam,
                    }
                    this.props.setCurrentTeam(finalTeam)
                }   
            }
        }

        
    }

    renderPkmnList() {
        return(
            <div className="noScrollBar" style={dropDownStyle}>
                {this.props.allPokemons?.map((pkmn) => {
                    return (
                        <div onClick={() => this.changePkmn(pkmn)} style={listItem} key={pkmn.id}>
                            {pkmn.name}
                        </div>   
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div style={wrapp}>
                <button style={btn} onClick={() => this.setState({isShowing: !this.state.isShowing})}>
                    Change
                </button>
                {
                    this.state.isShowing? 
                        this.renderPkmnList()
                        : 
                        null
                }
            </div>
        )
    }
}

const wrapp: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
}

const dropDownStyle: CSSProperties = {
    overflow: "auto",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
}

const btn: CSSProperties = {
    marginBottom: "0.5em"
}

const listItem: CSSProperties = {
    marginTop: "0.5em",
    backgroundColor: "rgb(230, 230, 230)",
    cursor: "pointer",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "2px"
}