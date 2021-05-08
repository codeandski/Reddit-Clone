import React, {useState, useEffect} from 'react';
import './Post.scss';
import {useSelector} from 'react-redux';
import { RootState } from '../../store/rootState';
import {useDispatch} from 'react-redux';
import {populateComments} from '../../store/actions/comments.actions';
import {LoadingIndicator} from '../loadingIndicator/LoadingIndicator';
import {Comment} from '../comment/Comment'


interface PostProps {
    children: any;
    location : any;
}

export function Post(props: PostProps) {
  const [comments, useComments] = useState({});
  //Call endpoint to get comments
  const postData = props.location.state;
  console.log(props, 'props');
  const dispatch = useDispatch()
  

 
    useEffect(() => {
        fetch(`https://www.reddit.com${postData.permalink}.json`)
        .then(response => response.json())
        .then((data) => {
            dispatch(populateComments(data))
        });
    }, [])
    
    const fullComments = useSelector((state : RootState) => state?.comments[1]?.data?.children);

    return (
       <div className="post-container">
            <div className="post-header">
                <span className="post-header-topLine">
                    <div className="post-title">{postData.title}</div>
                    <div className="post-awards">
                        {postData.all_awardings.map((award: any) => {
                            return <img className="post-award" src={award.icon_url} height="20px" width="20px"></img>
                        })}
                    </div> 
                </span>
                <span className="post-header-bottomLine">
                    <div className="post-author">{postData.author}</div>
                    <div className="post-subreddit">{postData.subreddit}</div>
                </span>
            </div>
            <div className="post-content">
                {!fullComments && <LoadingIndicator></LoadingIndicator>}
                {fullComments && fullComments.map((comment: any) => {
                    return <Comment data={comment.data}></Comment>
                })}
            </div>     
       </div>
    )
}