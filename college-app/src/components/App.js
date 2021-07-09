import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import EqCreate from './collegeForms/EqCreate';
import EqDelete from './collegeForms/EqDelete';
import EqEdit from './collegeForms/EqEdit';
import EqList from './collegeForms/EqList';
import EqShow from './collegeForms/EqShow';
import Header from './Header';
const App = () =>{
    return (
        <div className="ui container">

            <BrowserRouter>
            <div>
                <Header />
                <Route path ="/" exact component ={EqList}/>
                <Route path ="/collegeForms/new" exact component ={EqCreate}/>
                <Route path ="/collegeForms/edit/" exact component ={EqEdit}/>
                <Route path ="/collegeForms/delete/" exact component ={EqDelete}/>
                <Route path ="/collegeForms/" exact component ={EqShow}/>


            </div>
            </BrowserRouter>
        </div>

    )
}
export default App;