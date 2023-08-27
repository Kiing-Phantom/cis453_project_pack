import React, { Component } from "react";
import {
    Route, Routes, NavLink, HashRouter
} from "react-router-dom";
import Listing from "./components/Listing/Listing";
import Genres from "./components/Genres/Genres";
import Formats from "./components/Formats/Formats";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import art from "./components/CoverArt/metallicaNEM.jpg";

let props = {
    img: art,
    title: "Nothing Else Matters",
    artist: "Metallica",
    album: "Metallica",
    seller: "MetalHead91",
    format: "Vinyl",
    condition: "Near Mint",
    price: "24.99",
    bidbuy: "Buy"
  }

let aprops = {
    firstName: "Richard", 
    lastName: "Pack", 
    email: "ricpac4651@students.ecpi.edu", 
    street: "1400 Lane Rd", 
    city: "Lincolnton", 
    state: "NC", 
    social: "LinkedIn @ Richard Pack", 
    purchases: "1", 
    sells: "0"
}

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Navbar />
                <div >
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/genres" element={<Genres />}/>
                        <Route path="/formats" element={<Formats />}/>
                        <Route path="/listings" element={<Listing {...props}/>}/>
                        <Route path="/account" element={<Account {...aprops}/>}/>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default Main;