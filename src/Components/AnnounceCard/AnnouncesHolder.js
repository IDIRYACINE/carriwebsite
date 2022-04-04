import React from 'react';
import AnnounceCard from './AnnounceCard';


export default function AnnouncesHolder(){
    let announces = [0,1,2]

    return(
        <div className='AnnouncesHolder'>
        {
            announces.map(item=>{(<AnnounceCard name="Test"/>)})
        }
        </div>
    )
}