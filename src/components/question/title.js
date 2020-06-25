import React from 'react';
import './index.css';

function QuestionTitle (props) {
  let { question } = props
  return (
    <h2 className="question__title">
      <span>{question.type === 'single' ? '单选：' : '多选：'}</span>
      {question.title}
    </h2>
  );
}

export default QuestionTitle;