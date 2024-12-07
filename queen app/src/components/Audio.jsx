import React, { useEffect, useRef } from 'react';
import "./Audio.css";

function Audio() {
  const audioRef = useRef(null); // Reference to the <audio> element

  useEffect(() => {
    // This effect will run when the component is mounted
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.muted = false; 
      audioElement.volume = 0.4;// Unmute the audio
      audioElement.play();         // Start the audio
    }
  }, []);

  return (
    <audio className='music' ref={audioRef} controls autoPlay loop muted src="/music.mp3"></audio>
  );
}

export default Audio;