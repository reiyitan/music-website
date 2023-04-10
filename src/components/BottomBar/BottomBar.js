import React from "react";
import "./style.css";
import { useState } from "react";

/**
 * Component for the bottom bar of the webpage.
 * 
 * @param currentSong - Information for the song that is currently playing. Part of index.js state.
 * @param setCurrentSong - Used to update state of currentSong.
 */
const BottomBar = ({currentSong, setCurrentSong, playbackRef, pauseSong, 
    songIsPlaying, setSongIsPlaying}) => {

    /**
     * Sets the pp-button to display the pause icon and plays the chosen .mp3. 
     */
    const handlePlay = () => {
        if (playbackRef.current) {
            setSongIsPlaying(true);
            playbackRef.current.play();
        }
    }

    /**
     * Sets the pp-button to display the play icon and plays the chosen .mp3.
     */
    const handlePause = () => {
        setSongIsPlaying(false);
        pauseSong();
    }

    return (
        <div id="bottom-bar">
            <span className="bottom-bar-title">{currentSong.title}</span>
            <span className="bottom-bar-artist">{currentSong.artist}</span>
            <button 
                className={(songIsPlaying) ? "pause-button pp-button" : "play-button pp-button"}
                onClick={(songIsPlaying)
                    ? handlePause
                    : handlePlay}>
            </button>
        </div>
    )
}

export default BottomBar;