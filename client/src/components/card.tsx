import React, { CSSProperties } from "react";

type Props = {
    title?: string
    isSelectedStyle?: CSSProperties
    selector: (obj: string) => void
    children?: any
  };

export default function Card(props: Props) {

    const renderTitle = () => {
        if(props.title !== undefined) {
            
            return <h1 style={titleStyle}>{props.title}</h1>
        }
        else {
            return null
        }
    }

    const handleSelector = () => {
        if(props.selector && props.title) {
            return props.selector(props.title)
        }
    }


    return (
                                                    
        <div onClick={() => handleSelector()} style={{...props.isSelectedStyle, ...card}}>
            {renderTitle()}
            {props.children}
        </div>
    )
}


const card: CSSProperties = {
    
    border: "1px solid black",
    padding: "10px",
    cursor: "pointer",
    display:"flex", 
    alignItems:"center",
    flexDirection: "column",
    width: "100%",
    marginBottom: "5px",
    borderRadius: "5px"
}

const titleStyle: CSSProperties = {
    fontSize: "1.2em",
    margin: 0,
}
    