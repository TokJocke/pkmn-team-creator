import React, { CSSProperties } from "react";
import Card from "./card";

type Props = { /* Smartare att typa upp varje lista som eventuellt kan skickas neråt? exempel: "pokemonList?: , teamList? och sedan kolla if team/pokemon" */
    list: any[],
    selector: (obj: string) => void
  };

export default function RenderList(props: Props) {


    return (
        <div style={style}> 
            {
                props.list.map((item) => {
                    return <Card title={item.name} detail={item.id} isSelected={item.isSelected} selector={props.selector}/>
                })  
            }     
        </div> 
        
    )
}


const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "80%",
}