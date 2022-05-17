import React from "react";

type AccordionPagePropsType ={
    titleValue: string
    collapsed: boolean
}

function AccordionPage(props: AccordionPagePropsType) {
if ( props.collapsed === true){
    return (

        <div>
            <AccordionTittle title={props.titleValue}/>
            <AccordionDiscription/>

        </div>
    )
}else{
    return (
        <div>
            <AccordionTittle title={props.titleValue}/>
        </div>
    )
}
}


type AccordionTittlePropsType = {
    title:string
}

function AccordionTittle (props: AccordionTittlePropsType) {

    return (
        <div>
            {props.title}
        </div>
    )
}

function AccordionDiscription() {
    console.log('renderings')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default AccordionPage;