import React from "react";
import{
    MainContain,
    ContainHolder,
    HeaderCon,
    Reliable,
    Power,
    Artificial,
    ContainWrap,
    Holding,
    Text,
    Monotors,
    Img,
    
} from './CardStyled'



const Card = (props)=>{
    return(
        <MainContain>
            <ContainHolder>
                <HeaderCon>
                    <Reliable>Reliable,efficient delivery</Reliable>
                    <Power>Powered by Technology</Power>
                    <Artificial>Our Artificial inteligence powered tools use 
                    millions of project data <br/> points to ensure that your project 
                    is successful
                    </Artificial>
                </HeaderCon>
            <ContainWrap>
                <Holding>
                <Text>{props.para}</Text>
                <Monotors>{props.moni}</Monotors>
                <Img src={props.Avater}/>
                </Holding>
            </ContainWrap>
            </ContainHolder>
        </MainContain>
    )
}

export default Card