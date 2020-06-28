import React,{useEffect,useState} from 'react'
import Menu from './Menu'
import {Switch,Route} from 'react-router-dom'
import Information from './Information'
import Comments from './Comments'
import Recommendations from './Recommendations'
import Order from './Order'

function MainWrapper(props){
    return(
    <div>
        <Menu/>
        <Switch>
            <Route path="/" exact component={Order}/>
            <Route path="/information" component={Information}/>
            <Route path="/recommendations" component={Recommendations}/>
            <Route path="/comments" component={Comments}/>
        </Switch>
    </div>
    )
}
export default MainWrapper