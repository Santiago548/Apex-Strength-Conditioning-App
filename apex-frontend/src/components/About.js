import React from 'react'
import "../styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export const About = () => {
    return (
        <div>
            <h1>ABOUT</h1>

            <iframe width="864" height="486" src="https://www.youtube.com/embed/aNXM6m7dPfk?list=PLDFBC23BD531B290F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
