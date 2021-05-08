import React from 'react';
import './PostSnippet.scss';
import {Post} from '../post/Post';
import {Route, Router, Switch, Link, useHistory} from 'react-router-dom';


interface BudgetProps {
    children: string;
}

export function PostSnippet(props: any) {
    const history = useHistory();
    const handleClick = (post: any) => {
        history.push({
          pathname: `/post/${props.data.title}`,
          state: post
        });
      }
    return (
        
        <div className="postSnippet-container">
           {/* <img className="postSnippet-previewImage" src={props.data.preview?.images[0]?.source?.url ? props.data.preview.images[0].source.url : null}></img> */}
               {/* <Link to={`/post/${props.data.title}`}> */}
            <div className="postSnippet-title" onClick={() => handleClick(props.data)}>{props.data.title}</div>
                {/* </Link> */}
           <span>
                <div className="postSnippet-subreddit"><a href={`https://reddit.com/r/${props.data.subreddit}`} target="_blank">{props.data.subreddit}</a></div>
                <div className="postSnippet-author">{props.data.author}</div>
           </span>
           <Switch>
                <Route path="/about">
                </Route>
            </Switch>
        </div>
        
       
    )
}