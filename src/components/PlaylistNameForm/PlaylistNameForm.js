import React from "react"; 
import { useState } from "react";

/**
 * Component for naming a playlist. This component is by default hidden, and 
 * is displayed when a user clicks on the add playlist button on the Sidebar. 
 * 
 * @param playlistNameFormStyle - The css className for the input form. This state is passed from Sidebar. 
 * @param onFormSubmit - A function passed from Sidebar used to pass user input back to the parent component.
 * 
 * @returns The playlist name form component.
 */
const PlaylistNameForm = ({ playlistNameFormStyle, onFormSubmit }) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        onFormSubmit(e.target.playlistName.value);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                className={playlistNameFormStyle}
                name="playlistName" 
                value={value} 
                placeholder="Enter a playlist name:"
                onChange={handleChange}
             />
        </form>
    );
}

export default PlaylistNameForm;