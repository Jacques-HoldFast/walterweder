// src/App.jsx
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Container specifically sized for 607x1080 video */}
      <div className="flex justify-center items-center w-full">
        {/* Video Container with exact aspect ratio */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-[607px]" 
             style={{ aspectRatio: '607/1080' }}>
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black" // object-contain preserves aspect ratio
            controls
            preload="metadata"
            poster="/video-thumbnail.jpg" // Optional: add a poster image
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            playsInline // Important for mobile devices
          >
            <source src="/ww2g.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Custom Play Button Overlay (optional) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full p-6 backdrop-blur-sm"
              >
                <svg 
                  className="w-12 h-12 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App