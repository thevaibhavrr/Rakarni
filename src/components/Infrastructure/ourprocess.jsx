import React from 'react'
import "../../styles/infrastructure/Ourprocess.css"
function Ourprocess() {
  return (
    <>
    <div className='main_Ourprocess_div' >
        <div className='main_our_process_text' >
            Our Process
        </div>
        <div className="video-container">
       
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/yY3bTiygD5Q?si=uPyfXM4ioBovW8bm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="yout_video_iframe"
        ></iframe>
      </div>
    </div>
    </>
  )
}

export default Ourprocess