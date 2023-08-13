import React, { Component } from "react";
import "./Formats.css";

class Formats extends Component {
    render() {
        return (
            <div class="content">
                <h2>Media Formats</h2>
                <br></br>
                <br></br>
                <ul class="">
                    <li className="title">Casette</li>
                    <li className="title">CD</li>
                    <li className="title">Vinyl</li>
                    <li className="title">Other</li>
                </ul>
            </div>
        );
    }
}

export default Formats;