import React from 'react';
import { formatWhole, formatSubject, formatTesting } from '../../utils';

import QuestionWhole from './whole';
import QuestionSubject from './subject';
import QuestionTesting from './testing';

import questionsOrigin from '../../data/psycology_question.json';
import answersOrigin from '../../data/psycology_answer.json';

function Question (props) {
  const { type, subjectId } = props

  function QuestionComponent () {
    let questions = []
    let answers = []
    if (type === 'whole') {
      if (!localStorage.getItem('whole')) {
        questions = formatWhole(questionsOrigin)
        answers = formatWhole(answersOrigin)
        localStorage.setItem('whole', JSON.stringify(questions));
        localStorage.setItem('answers', JSON.stringify(answers));
      } else {
        questions = JSON.parse(localStorage.getItem('whole'));
        answers = JSON.parse(localStorage.getItem('answers'));
      }
      return <QuestionWhole questions={questions} answers={answers} />;
    }
    if (type === 'subject') {
      questions = formatSubject(questionsOrigin, subjectId)
      answers = formatWhole(answersOrigin, subjectId)
      return <QuestionSubject questions={questions} answers={answers} />;
    }
    if (type === 'testing') {
      questions = formatTesting(questionsOrigin)
      answers = formatWhole(answersOrigin)
      console.log(questions)
      return <QuestionTesting questions={questions} answers={answers} />;
    }
  }

  return (
    <QuestionComponent />
  );
}

export default Question;