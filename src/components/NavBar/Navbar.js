import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import png from '../CoverArt/png.png';

export class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand"><img src={png}/></a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <ul class="header">
                                <li><NavLink to="/" class="navLink">Home</NavLink></li>
                                <li><NavLink to="/genres" class="navLink">Genres</NavLink></li>
                                <li><NavLink to="/formats" class="navLink">Formats</NavLink></li>
                                <li><NavLink to="/listings" class="navLink">Listings</NavLink></li>
                                <div class="rightnav">
                                    <li><NavLink to="/account" class="navLink">My Account</NavLink></li>
                                </div>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

/*
div for search container if search function deemed necessary

                            <div class="sidenav">
                                <input type="text" value=""></input>
                                <form class="dropdown">
                                    <label class="acctbtn" for="search-select" color='#FFF6E0'>Search by...</label>
                                    <select name="search-select" id="search-select" class="dropbtn">
                                        <option value="genre">Genre</option>
                                        <option value="format">Format</option>
                                        <option value="artist">Artist</option>
                                    </select>
                                </form>
                                <button class="search-container">Search</button>
                            </div>

*/

/*
div for account functionality once operational

                            <div class="rightnav">
                                <button class="acctbtn">My Account</button>
                            </div>
*/