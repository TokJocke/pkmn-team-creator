import React, { CSSProperties } from "react";
import { PokemonDetail, TeamDetails } from "./main";
import TeamMember from "./teamMember";
import UpdateBtn from "./updateBtn";

type Props = {
    setIsModalOpen: (team?: TeamDetails) => void,
    currentTeam?: TeamDetails,
    pokemonList: PokemonDetail[],
    setCurrentTeam: (team: any) => void,
    getTeams: () => void
};
interface State {
    inputValue: any
}
  
  export default class UpdateView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            inputValue: this.props.currentTeam?.name,
        }

    }

    stopExit(event: any) {
        event.stopPropagation()
    }


    renderTeam() {
        if(this.props.currentTeam) {
            return (
                <div style={pkmnWrapp}>
                    {this.props.currentTeam.pkmn.map((item) => {
                        return (  
                            <TeamMember 
                                key={item} 
                                pokemon={item} 
                                changeBtn={true}
                                allPokemons={this.props.pokemonList}
                                currentTeam={this.props.currentTeam}
                                setCurrentTeam={this.props.setCurrentTeam}
                            /> 
                        )
                    })}
                </div>
            )
        } 
        else {
            return (
                <div>
                    No team found
                </div>
            )
        }
    }


    updateInputValue = (event: any) => {
        this.setState({
          inputValue: event.target.value
        });          
    }


    render() {
        return (
            <div style={updateBackground} onClick={() => this.props.setIsModalOpen()}>
                <div style={modalStyle} onClick={(event) => this.stopExit(event)}>
                    <input 
                        style={inputStyle} 
                        placeholder={this.props.currentTeam?.name} 
                        value={this.state.inputValue} 
                        onChange={this.updateInputValue}>
                    </input>
                    {this.renderTeam()}
                    <div style={btnWrapp}>
                        <UpdateBtn 
                            setIsModalOpen={this.props.setIsModalOpen}
                            inputValue={this.state.inputValue}
                            currentTeam={this.props.currentTeam}
                            getTeams={this.props.getTeams}
                        />
                        <button
                            style={btnStyle}
                            onClick={() => this.props.setIsModalOpen()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const modalStyle: CSSProperties = {
    width: "40%",
    /* height: "80%", */ 
    backgroundColor: "rgb(230, 230, 230)",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    borderRadius: "10px"

}   

const updateBackground: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
}

const pkmnWrapp: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
}

const inputStyle: CSSProperties = {
    width: "40%",
    fontSize: "1.5em",
    marginBottom: "15px"
}

const btnStyle: CSSProperties = {
    backgroundColor: "rgb(255, 100, 100)",
    width: "20%",
    fontSize: "1.5em",
    marginTop: "15px",
    marginBottom: "15px",
    alignSelf: "center",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
    cursor: "pointer",
}

const btnWrapp: CSSProperties = {
    display: "flex",
    justifyContent: "center",

}