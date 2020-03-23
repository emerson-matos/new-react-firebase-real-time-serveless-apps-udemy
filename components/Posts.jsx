import React, { useState, useEffect } from 'react';
import PostSnippet from './PostSnippet';
import { PageHeader } from 'antd';
import _ from 'lodash';
import db from '../firebase'

function Posts(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let postsRef = db.collection('posts');
        postsRef
            .get()
            .then(savedPosts => {
                savedPosts.forEach(post => {
                    let data = post.data()
                    let { id } = post
                    let payload = {
                        id,
                        ...data
                    }
                    setPosts((posts) => [...posts, payload])
                })
            })
    }, [])

    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{ border: ' 1px solid rgb(235,237,240)', }}
                    title="Posts Title"
                    subTitle="Posts"
                />
            </div>
            <div className="articles_container">
                {console.log('uri', posts)}
                {
                    _.map(posts, (object, idx) => (
                        <PostSnippet
                            key={idx}
                            id={object.id}
                            title={object.title}
                            content={object.content}
                        />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Posts;