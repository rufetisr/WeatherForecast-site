import React from 'react';
import './Feedback.css'
import context from '../Context/Context';
import { useContext, useRef, useState } from "react";
import * as CiIcons from 'react-icons/ci'
import emailjs from '@emailjs/browser'

const Feedback = () => {
  const { color } = useContext(context)
  const ul = useRef()
  const text = useRef('')
  const [choice, setCh] = useState('')

  const resetColor = () => {
    ul.current.children[0].firstChild.style.color = 'black';
    ul.current.children[1].firstChild.style.color = 'black';
    ul.current.children[2].firstChild.style.color = 'black';
  }

  const choiceSmile = (e) => {
    resetColor();
    if (ul.current.children[0].firstChild == e.target) {
      setCh('1')
      e.target.style.color = 'rgb(214, 47, 6)';
    }
    else if (ul.current.children[1].firstChild == e.target) {
      setCh('2')
      e.target.style.color = 'rgb(196, 153, 14)';
    }

    else if (ul.current.children[2].firstChild == e.target) {
      setCh('3');
      e.target.style.color = 'rgb(113, 168, 11)';

    }

  }

  const SendEmail = (e) => {
    e.preventDefault();
    let mesg = '';
    if (choice == '1') {
      mesg = e.target.message.value + '\nEmoji: ' + String.fromCodePoint(0x2639);
    }
    else if (choice == '2') {

      mesg = e.target.message.value + '\nEmoji: ' + String.fromCodePoint(0x1F610);
    }
    else if (choice == '3') {
      mesg = e.target.message.value + '\nEmoji: ' + String.fromCodePoint(0x1F642);
    }

    if ((choice == '1' || choice == '2' || choice == '3') && (e.target.message.value.length > 1 && e.target.message.value != null)) {
      e.target.message.value = mesg;
      // alert(e.target.message.value.length);
      // alert('getdi');

      emailjs.sendForm('service_bdfcg0r', 'template_zrevo9p', e.target, 'ykw92HHaf3cTF_A01').
        then((res) => {
            alert(`Message sent successfully\nThanks for your suggestion ${String.fromCodePoint(0x1F607)}`);
        }, (error) => {
          alert(error.text);
        })
      // alert(`${String.fromCodePoint(0x1F607)}`)
      // alert(e.target.message.value);
      e.target.reset();
    }
    else if (e.target.message.value.length < 1 || e.target.message.value == null && (choice == '1' || choice == '2' || choice == '3')) {
      alert('Please fill textarea.')
    }
    else {
      alert("Please choice an emoji.")
    }

    alert(text.target.value)



    // e.target.message.value = 'salam';
    // emailjs.sendForm('service_bdfcg0r', 'template_zrevo9p', e.target, 'ykw92HHaf3cTF_A01').
    //   then((res) => {
    //     console.log(res.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   })
    // alert(activeBtn)
  }

  return (
    <div className={`feed ${color}`}>
      <h1>Your Feedback</h1>
      <hr style={{ maxWidth: '400px', width: '100%' }} />
      <div className='feed-section'>
        <p>We would like your feedback to improve our website.</p>
        <p>What is your opinion about this site?</p>
        <ul className='smile' ref={ul}>
          <li onClick={choiceSmile} ><CiIcons.CiFaceFrown /></li>
          <li onClick={choiceSmile} ><CiIcons.CiFaceMeh /></li>
          <li onClick={choiceSmile} ><CiIcons.CiFaceSmile /></li>
        </ul>
        <hr style={{ maxWidth: '400px', width: '100%' }} />
        <form onSubmit={SendEmail} >
          <p>Please leave your feedback below: <span style={{ color: 'red', margin: '0px' }}>*</span></p>
          <textarea className='feed-text' name="message" id="" cols="30" rows="10" ref={text}></textarea>
          <button className='btn' name='btn' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
