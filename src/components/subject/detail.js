import React from 'react';
import { useParams } from "react-router-dom";
import './index.css';
import Question from '../question'

function SubjectDetail() {
  let { id } = useParams();

  return (
    <section className="subject-detail">
      <Question type="subject" subjectId={id} />
    </section>
  );
}

export default SubjectDetail;