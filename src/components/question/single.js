import React from 'react';
import './index.css';
import QuestionTitle from './title';

function QuestionSingle (props) {
  let { question, onSelect } = props;

  const changeIcon = function (current, index) {
    if (current.checked === index) {
      if (current.isCorrect) {
        return (<i className="iconfont icon-circle-correct">&#xe708;</i>)
      } else {
        return (<i className="iconfont icon-circle-error">&#xe617;</i>)
      }
    } else {
      return (<i className="iconfont">&#xe625;</i>)
    }
  };

  let AnswerItem = question.answers.map((answer, index) => {
    return (
      <li key={index} className="answer__item" onClick={() => onSelect(answer, index)}>
        <span className="answer__text">{answer}</span>
        <span className="answer__icon">
          {changeIcon(question, index)}
        </span>
      </li>
    );
  });

  return (
    <div className="question__single">
      <QuestionTitle question={question} />
      <ul className="answer__list">
        {AnswerItem}
      </ul>
    </div>
  );
}

export default QuestionSingle;