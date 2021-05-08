import React from 'react';
import { TopHeader } from './components/topHeader/TopHeader';
import { MainContent } from './components/mainContent/MainContent';
import {populatePosts } from './store/actions/posts.actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {store} from './app/store';
import {Switch, Route} from 'react-router-dom';
import {Post} from './components/post/Post';
import {Main} from './components/main/Main';

import './App.scss';

function App() {
  const dispatch = useDispatch()
  
  fetch('https://www.reddit.com/r/all.json')
  .then(response => response.json())
  .then((data) => {
    dispatch(populatePosts(data))
  });
  return (
    <div className="App">
      <TopHeader>
      </TopHeader>
      <Main/>
      <body className="App-body">
      </body>
    </div>
  );
}

export default App;
