import React from 'react';
import _ from 'lodash';
import { Card } from 'antd';
import { Link } from '@reach/router'

const PostSnippet = (props) => {
    console.log("12345", props.content)
    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={<Link to={`/post/${props.id}`}>Read</Link>}
            >
                {_.map(props.content.slice(0, 1), (object, idx) => (<p key={idx}>{object}</p>))}
                <p>...</p>
            </Card>
        </div>
    )
}

export default PostSnippet;
