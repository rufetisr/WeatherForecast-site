import React from 'react';
import './Feedback.css'
import context from '../Context/Context';
import { useContext } from "react";

const Feedback = () => {
  const { color } = useContext(context)

  return (
    <div className={`feed ${color}`}>
      <h1>Feedback</h1>
    </div>
  );
}

export default Feedback;
