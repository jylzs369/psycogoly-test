import React from 'react';
import './index.css';

function QuestionAnswer (props) {
  const { question } = props
  if (typeof question.isCorrect === 'boolean' && !question.isCorrect) {
    if (question.type === 'multiple') {
      return (
        <div className="question__answer">
          <p>你的答案：</p>
          <p>{question.checkedAnswers.join(';') || ''}</p>
          <p>正确答案：</p>
          <p>{question.correctAnswer || ''}</p>
        </div>
      )
    } else {
      return (
        <div className="question__answer">
          <p>正确答案：</p>
          <p>{question.correctAnswer || ''}</p>
        </div>
      )
    }
  } else return ''
}

export default QuestionAnswer;