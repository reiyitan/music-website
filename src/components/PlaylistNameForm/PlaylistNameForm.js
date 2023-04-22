import React from "react"; 
import { useState, useRef, useEffect } from "react";
import "./style.css";

/**
 * Component for naming a playlist. This component is by default hidden, and 
 * is displayed when a user clicks on the add playlist button on the Sidebar. 
 * 
 * @param showForm - Either true or false. True if the name input should display, false otherwise.
 * @param setShowForm - Update state of showForm.
 * @param onFormSubmit - A callback function passed from Sidebar used to pass user input back to the parent component.
 */
const PlaylistNameForm = ({ showForm, setShowForm, onFormSubmit }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    
    //submits the playlist name
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        onFormSubmit(e.target.playlistName.value);
    }

    //update text within the input field
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    //focus the input field once it displays on the screen
    useEffect(() => {
        if (showForm) inputRef.current.focus();
    }, [showForm]);

    //hide input field if user clicks off of it
    useEffect(() => {
        const handleClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowForm(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [inputRef]);

    return (
        <div className={(showForm) ? "playlist-name-form-div" : "hidden"}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    className={(showForm) ? "playlist-name-input" : "hidden"}
                    name="playlistName" 
                    value={value} 
                    placeholder="Enter a playlist name:"
                    onChange={handleChange}
                    ref={inputRef}
                />
            </form>
        </div>
    );
}

export default PlaylistNameForm;