import React from "react";
import "./style.css";
import { useState } from "react";

/**
 * Component for the bottom bar of the webpage.
 * 
 * @param currentSong - Information for the song that is currently playing. Part of index.js state.
 * @param setCurrentSong - Used to update state of currentSong.
 */
const BottomBar = ({currentSong, setCurrentSong}) => {
    const [buttonState, setButtonState] = useState("play-button pp-button");

    /**
     * Sets the pp-button to display the pause icon and plays the chosen .mp3. 
     */
    const handlePlay = () => {
        setButtonState("pause-button pp-button");
    }

    /**
     * Sets the pp-button to display the play icon and plays the chosen .mp3.
     */
    const handlePause = () => {
        setButtonState("play-button pp-button");
    }
    return (
        <div id="bottom-bar">
            <span className="bottom-bar-title">{currentSong.title}</span>
            <span className="bottom-bar-artist">{currentSong.artist}</span>
            <button className={buttonState} onClick={(buttonState==="play-button pp-button") ? handlePlay : handlePause}></button>
        </div>
    )
}

export default BottomBar;