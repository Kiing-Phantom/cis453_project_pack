import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div class="content">
                <h2>HardCopy Market</h2>
                <br></br>

                <p>
                    HardCopy Market is a marketplace in which we can come together and both sell and buy physical copies of the music we enjoy.
                </p>

                <p>
                    We have a small network of local (to us) music shops that have generously allowed us to list their inventories with a small mark-up
                    to cover transactional costs. 
                </p>
                <p>
                    We also invite anyone who is looking to sell their collection pieces to make a listing with their
                    product to show to our audience of music lovers who may be interested in purchasing them.
                </p>
            </div>
        );
    }
}

export default Home;