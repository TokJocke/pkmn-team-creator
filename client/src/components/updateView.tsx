import { relative } from "path";
import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";

type Props = {
    setIsModalOpen: (id?: number) => void,
    currentTeam?: number
};

  
  export default class UpdateView extends React.Component<Props> {
/*     element: HTMLDivElement */

    constructor(props: Props) {
        super(props);


    }

    stopExit(event: any) {
        event.stopPropagation()
    }

    componentDidMount() {
        console.log(this.props.currentTeam)
    }

    render() {
        return /* ReactDOM.createPortal */(
            <div style={updateBackground} onClick={() => this.props.setIsModalOpen()}>
                <div style={modalStyle} onClick={(event) => this.stopExit(event)}>

                sdadsas
                </div>
            </div>
        )
    }
}


const modalStyle: CSSProperties = {
    width: "80%",
    height: "80%", 
    backgroundColor: "rgb(230, 230, 230)",
    zIndex: 99
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