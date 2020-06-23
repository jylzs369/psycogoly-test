import React from 'react';
import { formatWhole, formatSubject, formatTesting } from '../../utils';

import QuestionWhole from './whole';
import QuestionSubject from './subject';
import QuestionTesting from './testing';

import questionsOrigin from '../../data/psycology_question.json';
import answersOrigin from '../../data/psycology_answer.json';

function Question (props) {
  const { type, subjectId } = props
  let questions = []
  let answers = []

  function QuestionComponent () {
    if (type === 'whole') {
      questions = formatWhole(questionsOrigin)
      answers = formatWhole(answersOrigin)
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