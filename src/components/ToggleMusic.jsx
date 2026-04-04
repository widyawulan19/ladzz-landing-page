import React, { useEffect, useRef, useState } from 'react'
import music from '../assets/music.mp3'
import '../styles/components/Hero.css'
import { IoPause, IoPauseCircleOutline, IoPlay } from "react-icons/io5";

function ToggleMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    const audio = audioRef.current

    if (!playing) {
      audio.volume = 0.2 // 🔥 biar soft
      audio.play()
    } else {
      audio.pause()
    }

    setPlaying(prev => !prev) // 🔥 lebih aman
  }

  useEffect(() => {
    const audio = audioRef.current

    const handleTimeUpdate = () => {
      if (audio.currentTime >= 30) {
        audio.currentTime = 0
      }
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  return (
    <div className="music-player">
      
      <button onClick={toggleMusic}>
        {playing ? <IoPause/> : <IoPlay/>}
      </button>

      <audio ref={audioRef}>
        <source src={music} type="audio/mp3" />
      </audio>

    </div>
  )
}

export default ToggleMusic