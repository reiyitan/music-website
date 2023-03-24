import React from "react";

/**
 * Component for the bottom bar of the webpage.
 * 
 * @param currentlyPlaying - Information for the song that is currently playing. Part of index.js state.
 * @param setCurrentlyPlaying - Used to update state of currentlyPlaying. 
 */
const BottomBar = ({currentlyPlaying, setCurrentlyPlaying}) => {
    return (
        <div id="bottom-bar">
            {currentlyPlaying}
        </div>
    )
}

export default BottomBar;