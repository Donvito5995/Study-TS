import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./star/Rendering";
import AccordionPage from "./accordion/AccordionPage";

function App(props: any) {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Hello"}/>
            <AccordionPage titleValue ={"Menu"} collapsed ={true}/>
            <Rating value={2}/>
            <AccordionPage titleValue ={"Users"} collapsed ={false}/>
            <Rating value={5}/>
        </div>
    );
}


type PageTitlePropsType ={
    title:string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>)
}

export default App;
