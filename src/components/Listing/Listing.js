import React from 'react';
import "./Listing.css";

export default function Listing({img, title, artist, album, seller, format, condition, price, bidbuy}) {
    var bidbuybtn;

    if ( bidbuy == "buy" || bidbuy == "Buy" ) {
        {bidbuybtn = "Buy Item"};     
    } else if ( bidbuy == "bid" || bidbuy == "Bid" ) {
        {bidbuybtn = "Place Bid"}; 
    } else {
        {bidbuybtn = "ERROR"}; 
    }
    
    return(

        <>
            <div className="rectangle">
                <ul>
                    <img src={img} className='listingimg'></img>
                    <li className='title'>Title: {title}</li>
                    <br></br>
                    <li className='format'> Format: {format}</li>
                    <br></br>
                    <li className='condition'> Condition: {condition}</li>
                </ul>
            </div>
            <div className='rectangle2'>
                <ul>
                    <li className='album'> Album: {album}</li>
                </ul>
            </div>
            <div className='rectangle3'>
                <ul>
                    <li className='artist'> Artist: {artist}</li>
                </ul>
            </div>
            <div className='rectangle4'>
                <ul>
                    <li className='seller'> Seller: {seller}</li>
                    <br></br>
                    <li className='price'> Price: ${price}</li>
                    <br></br>
                    <li className='bidbuy'> Bid/Buy: {bidbuy}</li>
                </ul>
            </div>
            <div className='rectangle5'>
                <br></br>
                <br></br>
                <br></br>
                <button className="bidbuybtn" display="inline">{bidbuybtn}</button>
            </div>
        </>
        );
}
