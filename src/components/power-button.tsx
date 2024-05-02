"use client";

import React, { useState } from "react";

export const PowerButton = () => {
  const [startVideo, setStartVideo] = useState(false);

  const handlePowerButton = () => {
    setStartVideo(true);
  };

  return (
    <>
      {startVideo && <div className="absolute inset-0 bg-black" />}
      {startVideo && (
        <video
          autoPlay={startVideo}
          onEnded={() => setStartVideo(false)}
          className="absolute inset-0 z-0 h-full w-full object-cover py-4"
        >
          <source src="/videos/Startup video.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute bottom-[-110px] right-0 z-50 size-14">
        <button
          onClick={handlePowerButton}
          className="pointer-events-auto h-full w-full"
        />
      </div>
    </>
  );
};
