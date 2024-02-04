'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoState = () => {
      setIsHovered(video.paused || video.ended);
    };

    handleVideoState(); // Check initial video state

    // Add event listeners for video state changes
    video.addEventListener('play', handleVideoState);
    video.addEventListener('pause', handleVideoState);
    video.addEventListener('ended', handleVideoState);

    // Cleanup event listeners on component unmount
    return () => {
      video.removeEventListener('play', handleVideoState);
      video.removeEventListener('pause', handleVideoState);
      video.removeEventListener('ended', handleVideoState);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video) {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex justify-center items-center mb-0 lg:mb-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <div className='absolute w-1/4 bg-[#e59071] top-[-5px] left-[-5px] h-1/4 z-[-1]'></div>
        <div className='absolute w-1/4 bg-[#63a1f0] bottom-[-5px] right-[-5px] h-1/4 z-[-1]'></div>
        <video
          ref={videoRef}
          width="1080"
          height="720"
          controls={false}
          controlsList="nodownload"
          disablePictureInPicture
          poster="https://static.vecteezy.com/system/resources/previews/000/523/185/original/mobile-application-development-concept-mobile-programming-coding-multi-platform-ui-ux-design-and-web-development-vector.jpg"
          onPause={() => setIsHovered(false)} // Hide the button when video is paused
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        {(videoRef.current?.paused || videoRef.current?.ended || isHovered) && (
          <button
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full"
          >
            {videoRef.current?.paused || videoRef.current?.ended ? (
              <FaPlayCircle size={80} className='text-[#dc7f59] bg-white rounded-full' />
            ) : (
              <FaPauseCircle size={80} className='text-[#dc7f59] bg-white rounded-full' />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
