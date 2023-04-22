import React from "react"; 
import { useState, useRef, useEffect } from "react"; 
import "./style.css"; 

const SearchbarForm = ({showForm, setShowForm, handleSearch}) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

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
        <div className={(showForm) ? "searchbar-form-div" : "hidden"}>
            <form onSubmit={handleSearch}>
                <input 
                    id="searchbar-input" 
                    type="text" 
                    placeholder="Find something to listen to"
                    name="query"
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                />
            </form>
        </div>
    );
}

export default SearchbarForm; 