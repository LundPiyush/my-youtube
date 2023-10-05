import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="px-4 py-2 m-3 shadow-lg w-72">
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <h1 className="font-bold py-2">{title}</h1>
      <h3>{channelTitle}</h3>
      <h3>{statistics.viewCount}</h3>
    </div>
  );
};

export default VideoCard;
