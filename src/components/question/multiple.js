import React from 'react';
import './index.css';
import QuestionTitle from './title';

function QuestionMultiple (props) {
  let { question, onConfirmSelect, changeQuestionChecked } = props;
  const onSelect = (question, answer, index) => {
    changeQuestionChecked(question, answer, index)
  }

  const changeIcon = (current, answer, index) => {
    let checked = current.checked && current.checked.includes(index);
    let correct = current.correctAnswers && current.correctAnswers.includes(answer);
    if (current.over) {
      if (correct) {
        return (<i className="iconfont icon-circle-correct">&#xe708;</i>)
      } else {
        return (<i className="iconfont icon-circle-error">&#xe617;</i>)
      }
    } else {
      if (checked) {
        return (<i className="iconfont">&#xe71a;</i>)
      } else {
        return (<i className="iconfont">&#xe625;</i>)
      }
    }
  };

  let AnswerItem = question.answers.map((answer, index) => {
    return (
      <li key={index} className="answer__item" onClick={() => onSelect(question, answer, index)}>
        <span className="answer__text">{answer}</span>
        <span className="answer__icon">
          {changeIcon(question, answer, index)}
        </span>
      </li>
    );
  });

  let ConfirmButton = function (props) {
    return props.question.over ? '' : (<button className="answer__confirm" onClick={onConfirmSelect}>确定答案</button>)
  }

  return (
    <div>
      <QuestionTitle question={question} />
      <ul className="answer__list">
        {AnswerItem}
      </ul>
      <ConfirmButton question={question} onConfirmSelect={onConfirmSelect} />
    </div>
  );
}
export default QuestionMultiple;