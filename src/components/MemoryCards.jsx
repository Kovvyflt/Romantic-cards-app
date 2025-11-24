// MemoryCards.jsx with Card 1, 2, and 3, Card 3 one-way flip, playful title, simplified form with preset restaurant/date, and success modal

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import loveLetter from '../assets/Loveletter.png';
import kissPicture from '../assets/kiss.jpg';

const MemoryCards = () => {
  const [flipped, setFlipped] = useState([false, false, false]);
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const flipCard = (index) => {
    if (index === 2 && flipped[index]) return; // Card 3 one-way flip
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_d7u5dzc', 'template_sxf3ym9', form.current, '4AyZPGTu2-bGO3kXO')
      .then(() => setShowModal(true))
      .catch((error) => { console.error(error); alert('Oops! Something went wrong.'); });
  };

  const playlistMessage = `I made this playlist because I kept thinking about how you make me feel whenever I listen to music and how certain songs remind me of the growing love I have for you.

I ended up choosing 30 songs, but I arranged them in a way that tells our story:

1–6: “This is how you make me feel.”
7–14: “I’m addicted to you.”
15–20: “You bring out the softest and sweetest part of me.”
21–25: “I choose you, and I’d choose every version of you.”
26–30: “Me & you, in our own little world.”

I hope the message comes through clearly.

I love you. ❤️❤️`;


  const memories = [
    {
      front: <div className="card1-front-content">Open me… 🎵<br/><small>A little surprise awaits 💌</small></div>,
      back: <div className="card1-back-content"><h3>Hey Simona ❤️ 💕</h3><p>{playlistMessage}</p><a href="https://open.spotify.com/playlist/1DBGsNduNbcBO05E40CNdA?si=3295686baa4f43c3" target="_blank" rel="noreferrer" className='links'>Listen on Spotify</a></div>
    },
    {
      front: 'How You Make Me Feel 🙈🙈💕',
      back: <div className="card2-back-content">
        <p>Click on the link to download the letter ❤️</p>
        <a href={loveLetter} className='links'>My letter to you ❤️</a>
        </div>
    },
    {
      front: 'Let’s Make it Official 💌',
      back: (
        <div className="card3-back-content">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Let’s Make it Official 💖</h2>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="restaurant" value="Gyu-kaku japanese bbq " readOnly />
            <input type="date" name="date" value="2025-11-28" readOnly />
            <input type="time" name="time" required />
            <button type="submit">Confirm</button>
          </form>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="section-2">
        {memories.map((memory, idx) => (
          <motion.div key={idx} className={`card ${flipped[idx] ? 'flipped' : ''}`} onClick={() => flipCard(idx)} whileHover={{ scale:1.05 }}>
            <div className="card-inner">
              <div className="card-side front">{memory.front}</div>
              <div className="card-side back">{memory.back}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Yay! 💖</h2>
            <p>Thank you for confirming! Can’t wait for our special day.</p>
            <img src={kissPicture} alt="Celebration" />
            <p>Guess who isn't a brother anymore 😂😂!</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MemoryCards;