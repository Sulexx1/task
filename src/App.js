import React from "react";
import supervisor from './component/picks/icon-supervisor.svg';
import Team from './component/picks/icon-team-builder.svg';
import Karma from './component/picks/icon-karma.svg'
import Calculator from './component/picks/icon-calculator.svg' 
import Card from './component/card';
import Hold from './component/Hold';
import Action from './component/Action';
import Calc from "./component/Calc";


function App (){
    return(
        <>
        <Card para="Supervisor" 
        moni="Monitor activities to identify
        project roadblock" 
        Avater={supervisor}/>

        <Hold para="Team Builder"
        moni="Scans our talent network to create the optimal team
        for your project"
        Avater={Team}/>

        <Action para="Karma"
        moni="Regularly evaluates our talent to ensure quality"
        Avater={Karma}/>

        <Calc para="Calculator"
        moni="Regularly evaluates our talent to ensure quality"
        Avater={Calculator}/>

        </>
    )
}
export default App