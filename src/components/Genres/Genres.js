import React, { Component } from "react";
import "./Genres.css";

class Genres extends Component {
    render() {
        return (
            <div class="content">
                <h2>Music Genres</h2>
                    <br></br>
                    <br></br>
                <div className="title">
                    <ul>
                        <li>Alternative</li>
                        <li>Blues</li>
                        <li>Children's</li>
                        <li>Classical</li>
                        <li>Country</li>
                    </ul>
                </div>
                <div className="title">
                    <ul>
                        <li>Dance</li>
                        <li>Electronic</li>
                        <li>Folk</li>
                        <li>Hip-Hop</li>
                        <li>Holiday</li>
                    </ul>
                </div>
                <div className="title">
                    <ul>
                        <li>Instrumental</li>
                        <li>Jazz</li>
                        <li>Latin</li>
                        <li>Metal</li>
                    </ul>
                </div>
                <div className="title">
                    <ul>
                        <li>Pop</li>
                        <li>R&B</li>
                        <li>Reggae</li>
                        <li>Rock</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Genres;