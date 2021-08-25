import React, { CSSProperties } from "react";

type Props = {
    title?: string,
    detail?: string,
    isSelected?: boolean,
    selector: (obj: string) => void
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
                                                    /* Uppdateran denna if i style när nästa api integreras */
        <div onClick={() => handleSelector()} style={props.isSelected? {...card, backgroundColor: "green"} : {...card, backgroundColor: "white"}}>
            {renderTitle()}
           
        </div>
    )
}


const card: CSSProperties = {
    
/*     backgroundColor: "green",
 */    borderBottom: "3px solid black",
    padding: "10px",
    cursor: "pointer",
    display:"flex", 
    alignItems:"center"
}

const titleStyle: CSSProperties = {
    fontSize: "1.2em",
    margin: 0,
}
    