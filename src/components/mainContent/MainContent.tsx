import React from 'react';
import './MainContent.scss';
import {useSelector} from 'react-redux';
import { RootState } from '../../store/rootState';
import {PostSnippet} from '../postSnippet/PostSnippet';
import {LoadingIndicator} from '../loadingIndicator/LoadingIndicator';
import {Switch, Route} from 'react-router-dom';
import {Post} from '../post/Post';

interface BudgetProps {
    children: string;
}

export function MainContent(props: any) {
    const posts = useSelector((state : RootState) => state.posts);
    return (
        
       <div className="mainContent-container">
           {!posts.length && <LoadingIndicator/>}
           {posts && posts.map((post: any) => {
           return <PostSnippet data={post.data} className="mainContent" />
           })}
    </div>
       
     
       
    )
}