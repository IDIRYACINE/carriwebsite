import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function CustomPopUp(props){
    return (
        <Popup  trigger={open =>(<button className="button">Trigger Popup</button>  )}  position="bottom center"  closeOnDocumentClick>
        <span> Use css to make more rich anything can go here</span>
        </Popup>
    )
}
