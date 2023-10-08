import React from 'react'
import videoBg from '../assets/video.mp4'
import LogCard from './LogCard'
const Video = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <LogCard />
        </div>
    </div>
  )
}
export default Video
