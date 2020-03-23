import React from 'react';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import { Router } from '@reach/router'

function App(props) {
    return (
        <div>
            <Router>
                <CreatePost default />
                <Posts path="posts" />
                <Post path="post/:id" />
            </Router>
        </div>
    )
}

export default App;