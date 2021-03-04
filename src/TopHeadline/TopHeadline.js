import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './TopHeadline.css';

const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect( () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d3a6ac7168714aa5993245a17f23d874')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])

    return (
        <div className="news">
            {/* <h1>TopHeadline: {articles.length}</h1> */}
            {
                articles.map( article => 
                    <News news={article}></News>
                )
            }
        </div>
    );
};

export default TopHeadline;