/** @format */

import React, { useEffect, useRef, useState } from "react";

const VideoGridItem = (props) => {
  const {
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
  } = props;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
  return (
    <>
      <div
        className="flex flex-col gap-2"
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
      >
        <a href={`/watch?v=${id}`} className="relative aspect-video">
          <img
            src={thumbnailUrl}
            className={`block w-full h-full object-cover transition-[border-radius] duration-200  ${
              isVideoPlaying ? "rounded-none" : "rounded-xl"
            }`}
          />

          <video
            className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
              isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
            }`}
            ref={videoRef}
            muted
            playsInline
            src={videoUrl}
          />
        </a>

        <div className="flex gap-2">
          <a href={`/@${channel.id}`} className="flex shrink-0">
            <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
          </a>
          <div className="flex flex-col">
            <a href={`/watch?v=${id}`} className="font-bold">
              {title}
            </a>
            <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
              {channel.name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGridItem;
