import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { SUBJECTS as subjects } from '../../utils/contants.js';

function Subject() {

  const subjectItems = subjects.map(subject => {
    return (
    <li className="subject__list__item" key={subject.id}>
      <Link to={`/subject/detail/${subject.id}`}>{subject.name}</Link>
    </li>
    )
  })

  return (
    <section className="subject">
      <ul className="subject__list">
        {subjectItems}
      </ul>
    </section>
  );
}

export default Subject;