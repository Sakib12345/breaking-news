import React from 'react';
import { Card } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const {urlToImage, title, author,description} = props.news;
    const source = props.news.source;
    return (
        <div className="news">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h6>Author: {author}</h6>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h6>Source: {source.name}</h6>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;