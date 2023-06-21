import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4 className='question-title'>{title}</h4>
        <button className='toggle-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className='question-info'>{info}</p>}
    </article>
  )
};

export default Question;