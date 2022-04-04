import React from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css';

export default function Login(){
    const navigate = useNavigate()
    
    //replace :true to update the browser history , user can't go back
    //default is false
    function navigateToNewAccount(){
        navigate('/NewAccount' , {replace:true})
    }

    return (
        <div className="conatainer" >  
    <form action="">
    <div>

        <h2 className="text">تسجيل الدخول :  </h2>
        <span className="em" for="sign" f>  البريد الالكتروني </span>
        <input focus id="sign" type="email" required placeholder="ادخل بريدك الالكتوني" />
    </div>
    
    <div>
        <span className="pas" for="pass"> كلمة السر </span>
        <input id="pass" type="password" required placeholder="ادخل كلمة السر"/>
    </div>

   <div>
         <span className="sub" for="sbmt"></span>
         <input id="sbmt" type="submit" value="متابعة" />
   </div>
   </form>
   
   <button  onclick={navigateToNewAccount} >انشاء حساب جديد</button>

</div>)
}