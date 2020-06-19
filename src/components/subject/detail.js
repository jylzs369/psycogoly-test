import React from 'react';
import {
  useParams
} from "react-router-dom";
import './index.css';

function SubjectDetail() {
  let { id } = useParams();
  console.log(id)

  return (
    <div className="subject-detail">
      subject detail {id}
    </div>
  );
}

export default SubjectDetail;