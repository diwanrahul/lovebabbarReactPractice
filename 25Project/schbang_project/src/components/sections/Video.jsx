import React from 'react';

const Video = () => {
  return (
    <div className="flex justify-center items-center h-screen relative bg-white rounded-t-3xl px-5">
        <iframe
        className='rounded-t-3xl'
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
  );
}

export default Video;