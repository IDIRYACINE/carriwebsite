import React from 'react';
import truckImage from '../Ressources/truck-01.png';
import bicycleImage from '../Ressources/byckle-01.png';
import carrImage from '../Ressources/carrr-01.png';
import CustomPopUp from '../Components/CustomPopUp/CustomPopUp';

export default function SecondPage(){

    return (
        <div className="second">
        <CustomPopUp></CustomPopUp>
        <img src={truckImage} alt="" className=" truck img-fluid   float-lg-end" width="300px" height="300px"/>
        <img src={bicycleImage} alt="" className=" byckle img-fluid   float-lg-start" width="300px" height="300px"/>
    <div className="text-center" >
        <img src={carrImage} alt="" className=" car rounded img-fluid" width="300px" height="300px"/>
        
    </div>
    </div>
    )
}