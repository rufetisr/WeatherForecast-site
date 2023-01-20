import React from 'react';
import './Feedback.css'
import context from '../Context/Context';
import { useContext, useRef } from "react";
import * as CiIcons from 'react-icons/ci'

const Feedback = () => {
  const { color } = useContext(context)
  const ul = useRef()
  const choiceSmile = (e) => {
    if (ul.current.children[0].firstChild == e.target) {
      ul.current.children[1].firstChild.style.color = 'black'
      ul.current.children[2].firstChild.style.color = 'black'

      e.target.style.color = 'rgb(214, 47, 6)';
    }
    else if (ul.current.children[1].firstChild == e.target) {
      ul.current.children[0].firstChild.style.color = 'black'
      ul.current.children[2].firstChild.style.color = 'black'
      e.target.style.color = 'rgb(196, 153, 14)';
    }
    else if (ul.current.children[2].firstChild == e.target) {
      ul.current.children[0].firstChild.style.color = 'black'
      ul.current.children[1].firstChild.style.color = 'black'

      e.target.style.color = 'rgb(113, 168, 11)'
    }
  }

  const SubmitData = (e)=>{
    e.preventDefault()
  }
  
  return (
    <div className={`feed ${color}`}>
      <h1>Your Feedback</h1>
      <hr style={{ maxWidth: '400px', width: '100%' }} />
      <div className='feed-section'>
        <p>We would like your feedback to improve our website.</p>
        <p>What is your opinion abot this site?</p>
        <ul className='smile' ref={ul}>
          <li onClick={choiceSmile}><CiIcons.CiFaceFrown /></li>
          <li onClick={choiceSmile}><CiIcons.CiFaceMeh /></li>
          <li onClick={choiceSmile}><CiIcons.CiFaceSmile /></li>
        </ul>
        <hr style={{ maxWidth: '400px', width: '100%' }} />
        <form onSubmit={SubmitData}>
          <p>Please leave your feedback below:</p>
          <textarea className='feed-text' name="" id="" cols="30" rows="10"></textarea>
          <button className='btn'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
