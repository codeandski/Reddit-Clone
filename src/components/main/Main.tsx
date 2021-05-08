import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../store/rootState';
import {PostSnippet} from '../postSnippet/PostSnippet';
import {Switch, Route} from 'react-router-dom';
import {Post} from '../post/Post';
import {MainContent} from '../mainContent/MainContent';

interface BudgetProps {
    children: string;
}

export function Main(props: any) {
    return (
        
        <div className="main-container">
            <Switch>
                <Route path='/post' component={Post} />
                <Route exact path='/' component={MainContent} />
            </Switch>
        </div>
       
     
       
    )
}