import React from 'react';
import "./Account.css";

export default function Account({firstName, lastName, email, street, city, state, social, purchases, sells}) {

    return(

        <>
            <div className="rectangle">
                <ul>
                    <li className='title'>Name: {firstName} {lastName}</li>
                    <br></br>
                    <li className='format'> E-Mail: {email}</li>
                    <br></br>
                    <li className='condition'> Address: {street}, {city}, {state}</li>
                </ul>
            </div>
            <div className='rectangle2'>
                <ul>
                    <li className='album'> Social: {social}</li>
                </ul>
            </div>
            <div className='rectangle3'>
                <ul>
                    <li className='artist'> # of Completed Purchases: {purchases}</li>
                </ul>
                <br></br>
                <ul>
                    <li className='seller'> # of Completed Sells: {sells}</li>
                </ul>
            </div>
            <div className='rectangle4'>
                
            </div>
            <div className='rectangle5'>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
        );
}
