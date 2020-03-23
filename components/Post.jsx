import React, { useState, useEffect } omfrom 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';
import { Link } from '@reach/router';

const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat nibh. Sed finibus dui tempor lorem imperdiet, vitae scelerisque risus feugiat. Vivamus finibus enim nulla. Morbi tincidunt pharetra magna sed elementum. Cras tortor est, laoreet sit amet volutpat bibendum, vehicula sit amet velit. Proin fermentum auctor fermentum. Nulla vel orci leo. Ut ac luctus tortor, iaculis lacinia libero. Morbi hendrerit ipsum mi, id condimentum tortor semper id. Proin bibendum pulvinar mi ac fringilla. Etiam bibendum tincidunt odio, a suscipit erat maximus et. Suspendisse in porttitor elit, ut cursus massa. Integer porttitor porttitor massa in ornare. Donec vitae lobortis arcu, a tristique ipsum.

                    Aliquam aliquam purus vel ex ullamcorper vulputate. Aenean at lobortis elit. In quis pharetra justo. Phasellus lacus elit, ultricies at nisi a, porttitor fringilla lectus. Quisque leo dui, faucibus a congue eu, hendrerit vel velit. Suspendisse potenti. Maecenas dapibus tincidunt sagittis. Cras ac massa sagittis, mollis tortor eget, consectetur magna. Pellentesque finibus lobortis pulvinar. Integer tempus urna accumsan turpis suscipit, ac porttitor neque lobortis.

                    Pellentesque sit amet congue augue, et hendrerit sem. Proin a odio vitae ante rutrum pharetra. Sed velit est, consequat quis convallis id, tempor id orci. Aliquam imperdiet ut massa in lobortis. Sed nec imperdiet velit. Suspendisse scelerisque arcu et metus posuere hendrerit. Cras id pretium ante, porta auctor justo. Vivamus molestie nisl a velit fringilla, eu scelerisque magna dapibus. Proin diam erat, commodo tristique pellentesque quis, posuere eget velit. Donec consequat sed odio eget facilisis.

                    Aenean convallis ante vitae mauris egestas, at scelerisque purus mattis. Ut nec est rutrum, pharetra arcu et, vulputate felis. Donec et mi sit amet odio volutpat tincidunt. Sed sollicitudin felis non convallis ornare. Vivamus sollicitudin, arcu sed gravida euismod, lorem metus varius elit, eu blandit ipsum massa eget mi. Fusce rutrum accumsan semper. Vestibulum leo lorem, tempus sed fringilla eu, maximus eu elit. Etiam tempor augue metus, a ultrices felis faucibus non. Integer tempor turpis dui, nec vehicula purus gravida sed. Nulla ut massa ac velit porta tincidunt. Vivamus vitae libero at mi elementum consequat et eget massa. Curabitur sodales eleifend leo a gravida.

                    Maecenas sagittis dolor nec tortor feugiat convallis. Aenean ut viverra nunc. Praesent vitae erat in arcu semper vestibulum sed maximus leo. Maecenas metus leo, sollicitudin maximus aliquam et, tincidunt eget sapien. Mauris fermentum cursus sem. Donec dictum nunc vel condimentum maximus. Curabitur in urna vitae dolor tincidunt posuere eget in libero. Nunc ultricies ullamcorper neque non feugiat. Maecenas feugiat tristique felis sit amet accumsan. Nunc lacinia suscipit tellus vulputate venenatis. Aenean vestibulum elit ac venenatis interdum. Fusce imperdiet, risus ut scelerisque suscipit, urna elit egestas sem, ac mattis odio neque in nulla. Morbi auctor gravida pretium. Integer quis laoreet ligula. Donec a ipsum ante.

                    Generated 5 paragraphs, 450 words, 3077 bytes`;

const Post = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
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
                    {content.split('\n').map((paragraph, idx) => (<p key={idx}>{paragraph}</p>))}
                </Card>
            </div>
        </div>
    )
}

export default Post;
