import React, { useState } from 'react';
import data from '../data';
import SingleQuestion from './Question';
import './Blog.css';

const Blog = () => {

    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className='container'>
                <h3 className='blog-title'>questions and answers about React</h3>
                <section className="info">
                    {
                        questions.map((question) => <SingleQuestion key={question.id} {...question}></SingleQuestion>)
                    }
                </section>
            </div>
        </main>
    );
};

export default Blog;