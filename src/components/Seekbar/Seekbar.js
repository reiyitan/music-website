import React from "react"; 
import { useState, useContext, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { Context } from "../App/App";
import "./style.css";

const Seekbar = () => {
    const {
        playbackRef
    } = useContext(Context);
    const [values, setValues] = useState([0]);

    useEffect(() => {
        if (!playbackRef.current) setValues([0]);
    }, [playbackRef.current]);

    useEffect(() => {
        const seekUpdater = setInterval(() => {
            if (playbackRef.current) {
                setValues([Math.round(playbackRef.current.seek())]);
            }
        }, 1000/30);

        return () => clearInterval(seekUpdater);
    }, [playbackRef]);

    const handleSeek = (position) => {
        setValues([position]);
        if (playbackRef.current) playbackRef.current.seek(position);
    }

    return (
        <Range 
            values={values}
            min={0}
            max={(playbackRef.current) ? Math.round(playbackRef.current.duration()) : 1}
            step={1}
            onChange={(values) => handleSeek(values[0])}
            onDragStart={() => {if (playbackRef.current) playbackRef.current.pause();}}
            onDragEnd={() => {if (playbackRef.current) playbackRef.current.play();}}
            renderTrack={({props, children}) => (
                <div
                    {...props}
                    className="react-range-track"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: getTrackBackground({
                            values,
                            colors: ["#8FBCBB", "#434C5E"],
                            min: "0",
                            max: (playbackRef.current) ? playbackRef.current.duration() : 1,
                            direction: 'to right'
                        }),
                    }}  
                >
                    {children}
                </div>
            )}
            renderThumb={({props}) => (
                <div
                    {...props}
                    className="react-range-thumb"
                >
                </div>
            )}
        />
    )
}

export default Seekbar;