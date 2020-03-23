import React, { useState, useEffect } from 'react';
import { PageHeader, Input, Form, Button, Card } from 'antd'
import db from '../firebase'

const validateMessages = {
    required: 'This field is required!',
};

const CreatePost = (props) => {
    const onFinish = values => {
        let postRef = db.collection('posts')
        let payload = { title, content: content.split('\n\n') }
        postRef.add(payload)
            .then((feedback) => console.log(feedback))
    };

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onChangeTitle = (event) => setTitle(event.target.value)
    const onChangeContent = (event) => setContent(event.target.value)

    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    style={{ border: ' 1px solid rgb(235,237,240)', }}
                    title="Create a Post"
                />
            </div>
            <Card style={{ marginTop: '20px', }}>
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={'title'} label="Title" rules={[{ required: true }]}>
                        <Input placeholder="Post title" onChange={onChangeTitle} />
                    </Form.Item>
                    <Form.Item name={'content'} label="Content" rules={[{ required: true }]}>
                        <Input.TextArea rows={10} placeholder="Post content" onChange={onChangeContent} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Post
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default CreatePost;