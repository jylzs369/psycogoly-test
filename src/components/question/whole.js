import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './index.css';
import QuestionFooterButton from './button';
import Dialog from '../common/dialog';
import QuestionSingle from './single';
import QuestionMultiple from './multiple';
import QuestionAnswer from './answer';

function QuestionWhole (props) {
  const history = useHistory();

  let hasIndex = localStorage.getItem('whole_index') - 0;
  let [currentIndex, setCurrentIndex] = useState(hasIndex || 0);
  let [total] = useState(props.questions.length);
  let [current, setCurrent] = useState(Object.assign({}, props.questions[currentIndex]));
  let [showAlert, setShowAlert] = useState(false);
  let [showConfirm, setShowConfirm] = useState(false);

  function onSelect (answer, index) {
    if (current.over) return
    let answerObj = props.answers.find(item => item.title === current.title) || {}
    if (answerObj.correctAnswer) {
      let correctAnswer  = ''
      let isCorrect = answer.indexOf(answerObj.correctAnswer) > -1
      if (!isCorrect) {
        correctAnswer = current.answers.find(item => item.indexOf(answerObj.correctAnswer) > -1)
      }
      let question = Object.assign({}, current, {
        over: true,
        checked: index,
        isCorrect,
        correctAnswer
      })
      setCurrent(question)
    }
  }

  function onConfirmSelect () {
    let answerObj = props.answers.find(item => item.title === current.title) || {};
    if (answerObj.correctAnswer) {
      let checked = current.checked;
      let checkedAnswers = current.checkedAnswers;
      let correctAnswers = [];
      let correctAnswer  = '';
      let answers = current.answers;
      let correctArr = [];
      let isCorrect = false;
      let question = {}
      if (!checkedAnswers || !checkedAnswers.length) return
      correctAnswers = answerObj.correctAnswer.map(item => answers.find(answer => answer.indexOf(item) > -1));
      correctArr = answerObj.correctAnswer.map(item => checkedAnswers.find(answer => answer.indexOf(item) > -1));
      isCorrect = correctArr.every(item => item);
      if (!isCorrect) {
        correctAnswer = correctAnswers.join('；');
      }
      question = Object.assign({},current, {
        over: true,
        checked,
        isCorrect,
        correctAnswer,
        correctAnswers
      })
      setCurrent(question)
    }
  }

  function changeQuestionChecked (current, answer, index) {
    let checked = current.checked ? current.checked.slice(0) : [];
    let checkedAnswers = current.checkedAnswers ? current.checkedAnswers.slice(0) : [];
    let question = {};
    if (checked.includes(index)) {
      let checkedIndex = checked.indexOf(index);
      let answerIndex = checkedAnswers.indexOf(answer);
      checked.splice(checkedIndex, 1)
      checkedAnswers.splice(answerIndex, 1)
    } else {
      checked.push(index)
      checkedAnswers.push(answer)
    }
    question = Object.assign({}, current, {
      checked: checked,
      checkedAnswers: checkedAnswers,
    })
    setCurrent(question)
  }

  function onSwitch (step) {
    // 为完成答题不能进行下一题并提示
    if (step > 0 && !current.over) {
      openAlert();
      return
    }
    let index = currentIndex + step
    updateQuestions()
    setCurrentIndex(index)
    setCurrent(Object.assign({}, props.questions[index]))
  }

  function updateQuestions () {
    // 更新题目的最新数据
    props.questions[currentIndex] = current
    localStorage.setItem('whole', JSON.stringify(props.questions));
    localStorage.setItem('whole_index', currentIndex);
  }

  function openAlert () {
    setShowAlert(true);
  }

  function closeAlert () {
    setShowAlert(false);
  }

  function onQuit () {
    openConfirm()
  }

  function openConfirm () {
    setShowConfirm(true);
  }

  function closeConfirm () {
    setShowConfirm(false);
  }

  function onQuitConfirm () {
    closeConfirm()
    updateQuestions()
    // 跳转回首页
    history.push('/')
  }

  function QuestionMain (props) {
    let { question, onSelect, onConfirmSelect, changeQuestionChecked } = props
    return (question.type === 'single'
      ? <QuestionSingle question={question} onSelect={onSelect} />
      : <QuestionMultiple question={question} onConfirmSelect={onConfirmSelect} changeQuestionChecked={changeQuestionChecked} />)
  }

  return (
    <section className="question">
      <header className="question__header">
        <h1>全题闯关</h1>
      </header>
      <main className="question__content">
        <QuestionMain
          question={current}
          onSelect={onSelect.bind(this)}
          onConfirmSelect={onConfirmSelect.bind(this)}
          changeQuestionChecked={changeQuestionChecked.bind(this)} />
        <QuestionAnswer question={current} />
      </main>
      <div className="question__footer">
        <QuestionFooterButton
          type="left"
          currentIndex={currentIndex}
          total={total}
          onQuit={onQuit.bind(this)}
          onSwitch={onSwitch.bind(this)} />
        <QuestionFooterButton
          type="right"
          currentIndex={currentIndex}
          total={total}
          onQuit={onQuit.bind(this)}
          onSwitch={onSwitch.bind(this)} />
      </div>
      <Dialog
        show={showAlert}
        type="alert"
        content="请先完成答题！ "
        onConfirm={closeAlert.bind(this)} />
      <Dialog
        show={showConfirm}
        type="confirm"
        content="确定退出答题？"
        onConfirm={onQuitConfirm.bind(this)}
        onCancel={closeConfirm.bind(this)} />
    </section>
  )
}

export default QuestionWhole;