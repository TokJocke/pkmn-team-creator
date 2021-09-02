
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import SingleView from './singleView';



export default function DisplayView() {
  
    return (
        
            <div id={"displayView"}>
                <Switch>
                    <Route exact path={"/"} component={Main} />      {/* trying to add dynamic region to url */}                    
                    <Route path={"/:teamId"} component={SingleView} />
                </Switch>                
            </div>
         
    )
}

