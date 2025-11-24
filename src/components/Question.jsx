import React from 'react';
import { GiButterflyFlower } from "react-icons/gi";
import img1 from "../assets/first.jpg"

const Question = ({ onYes }) => {
const runAway = (e) => {
const btn = e.target;
const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);
btn.style.position = 'absolute';
btn.style.left = x + 'px';
btn.style.top = y + 'px';
};

return (
<div className="section-1">
<img src={img1} alt="Us Together" />
<div className="question">Ready for something cute? <GiButterflyFlower /></div>
<div className="buttons">
<button className="btn-yes" onClick={onYes}>Yes</button>
<button className="btn-no" onMouseEnter={runAway}>No</button>
</div>
</div>
);
};

export default Question;