import React from 'react';
import {useNavigate} from 'react-router-dom'
import { signIn } from './NavBarModule';
import logo from '../../Ressources/logo.png';

export default function NavBar(){
    const navigate = useNavigate()
    
    //path must match what's defined in App.js
    function navigateToNewAccount(){
        navigate('/NewAccount')
    }

    function onSucess(){
        navigate('/SecondPage')
    }

    function onFail(){
        alert("Error")
    }
    
    return (
<div className="top">

<nav className="navbar navbar-light  " >
    <a className="navbar-brand"  href="/">
        <img src={logo} width="80" height="80"  className=" logo d-inline-block align-top" alt=""/>
    </a>


    <div className="buttons">    
        <button onClick={()=>{signIn("Youcef","Youcef",onSucess,onFail)}} type="button" className=" one btn btn-outline-light rounded-pill"> تسجيل الدخول </button>
        <button onClick={navigateToNewAccount} type="button" className=" two btn btn-outline-light rounded-pill"> فتح حساب </button>
    </div>

</nav>

</div>)


}