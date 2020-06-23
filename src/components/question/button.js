import React from 'react';
import './index.css';

function QuestionFooterButton (props) {
  const { type, currentIndex, total, onSwitch, onQuit } = props;
  const onClick = function () {
    action === 'quit' ? onQuit() : onSwitch(step)
  };
  let step = type === 'left' ? -1 : 1;
  let text = '';
  let action = '';

  if (type === 'left') {
    if (currentIndex === 0) {
      text = '退出答题'
      action = 'quit'
    } else {
      text = '上一题'
      action = 'switch'
    }
  }
  if (type === 'right') {
    if (currentIndex === total - 1) {
      text = '退出答题'
      action = 'quit'
    } else {
      text = '下一题'
      action = 'switch'
    }
  }

  return (
    <button className="question__footer__btn" onClick={onClick}>{text}</button>
  );
}

export default QuestionFooterButton;