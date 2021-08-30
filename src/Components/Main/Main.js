import React, { useState, useRef } from "react";
import audio1 from "../../Audio/A Powerful 10 Minute Guided Meditation.mp3";
import "./MainStyles.css";
import Footer from "../Footer/Footer";
import { BiSad, BiBrain } from "react-icons/bi";
import MeditationOption from "../MeditatioOption/MeditationOption";
import { FaRegHandPeace, FaPray } from "react-icons/fa";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { FcCollect, FcLike } from "react-icons/fc";

function Main({ isPlaying, setIsPlaying, audioplayer }) {
  //state
  // const [isPlaying, setIsPlaying] = useState(false);
  //reference
  // const audioplayer = useRef(); //refernce to audio component

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioplayer.current.play();
    } else {
      audioplayer.current.pause();
    }
  };

  return (
    <div id="main" className="main">
      <div className="main__section">
        <div className="main__left">
          {/* <audio ref={audioplayer} src={audio1} preload="metadata"></audio> */}
          <MeditationOption
            Icon={BiSad}
            meditationTitle="Meditation for Anxiety"
            meditationTime="4:32"
            audioName={audio1}
          />
          <MeditationOption
            Icon={FaRegHandPeace}
            meditationTitle="Meditation for Relaxation"
            meditationTime="3:38"
          />
          <MeditationOption
            Icon={RiEmotionUnhappyLine}
            meditationTitle="Meditation for Stress"
            meditationTime="5:30"
            //audioName={audio2}
          />
          <MeditationOption
            Icon={BiBrain}
            meditationTitle="Meditation for Mindfullness"
            meditationTime="3:28"
          />
          <MeditationOption
            Icon={FaPray}
            meditationTitle="Meditation for Sprituality"
            meditationTime="2:44"
          />
          <MeditationOption
            Icon={FcCollect}
            meditationTitle="Meditation for Focus"
            meditationTime="3:18"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
