import React, { useState, useRef, useEffect } from "react";
import "./meditationOption.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import notPlaying from "../../Images/not-playing.svg";
import person1 from "../../Images/person1.jpg";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

function MeditationOption({
  Icon,
  meditationTitle,
  meditationTime,
  audioName,
}) {
  const [liked, setLiked] = useState(false);
  const changeColor = () => {
    setLiked(!liked);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  // refrence
  const audioPlayer = useRef();

  useEffect(() => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, []);
  // const togglePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setIsPlaying(!prevValue);

  //   if (!prevValue) {
  //     audioplayer.current.play();
  //   } else {
  //     audioplayer.current.pause();
  //   }

  return (
    <div className="container">
      <div className="audio__list">
        <div className="options__left">
          <Icon className="icon" size={30} src={Icon} />
          <div className="title__container">
            <p className="meditation__title" onClick={setIsPlaying}>
              {meditationTitle}
            </p>
            <audio ref={audioPlayer}>
              <source src={audioName} />
            </audio>
            <p className="meditation__time">{meditationTime}</p>
          </div>
        </div>
        <div className="options__right">
          <button className="icon__wrapper" onClick={changeColor}>
            {liked ? <FcLike size={32} /> : <FcLikePlaceholder size={30} />}{" "}
          </button>
          <BiDotsHorizontal size={30} />
        </div>
      </div>
      <div className="main__right">
        <h2 className="player__heading">Now Playing:</h2>
        <img classname="controls__image" src={person1} alt="img" srcset="" />
        <div className="player__controls">
          <div className="player">
            <button className="control__buttons">
              <BiSkipPreviousCircle /> 30
            </button>
            <button className="play__button">
              {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            </button>
            <button className="control__buttons">
              <BiSkipNextCircle /> 30
            </button>
            <div className="controls">
              <div className="progress__container">
                <div className="current__time">0:00</div>
                <input type="range" className="progressbar" />
                <div className="duration">2:54</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeditationOption;
