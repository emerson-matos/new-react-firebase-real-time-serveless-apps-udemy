import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import db from '../firebase'
import _ from 'lodash';
import { Link } from '@reach/router';

const Post = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    console.log("OIII4", props.id)
    useEffect(() => {
        console.log("OIII", props.id)
        let postRef = db.collection('posts').doc(props.id);
        console.log("OIII3", postRef)

        console.log(props.id, 'id')
        console.log("OIII2")
        postRef
            .get()
            .then(doc => {
                console.log(doc.data(), doc, "9090")
                let { content, title } = doc.data()
                console.log('123', { content, title }, doc.data())
                setTitle(title)
                setContent(content)
            })
    }, [])

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    onBack={() => (<Link to="" />)}
                    style={{ border: ' 1px solid rgb(235,237,240)', }}
                    title={title}
                />
            </div>
            <div className="post_content_container">
                <Card style={{ marginTop: '10px' }} >
                    {console.log(content, 1234)}
                    {console.log(title, 5678)}
                    {_.map(content, (paragraph, idx) => (<p key={idx}>{paragraph}</p>))}
                </Card>
            </div>
        </div>
    )
}

export default Post;
