import React from 'react';
import './newAccont.css';
import {useNavigate} from 'react-router-dom'
import { createNewAccount } from './newAccountModule';

export default function NewAccount(){

    const navigate = useNavigate()

    let account = {
        name : '',
        email : ''
    }

    function onAccountCreated(){
        //commented navigate just so I can test if the account.name is really updating
        //navigate('/SecondPage')
        console.log(account.name);
    }

    function onAccountCreationFailed(){
        console.log('error occured')
    }

    function setName(name){
        account.name = name
    }
    
    return(
       
    <div class="contentBody">  
        <form action="">
            <span class="text">انشاءحساب</span>

            <div>
            <span class="user" for="userName" f>  اسم المستخدم </span>
            <input onChange={(e)=>{setName(e.target)}} id="userName" type="username" required placeholder="ادخل اسم المستخدم" />
        </div>
        
        <span class="em" for="signIn" f>  البريد الالكتروني </span>
        <input focus id="signIn" type="email" required placeholder="ادخل بريدك الالكتوني" />
       

        <div>
            <span class="pas" for="pass"> كلمة السر </span>
            <input id="pass" type="password" required placeholder="ادخل كلمة السر"/>
        </div>

        <div>
            <span class="pas" for="pass">  تاكيد كلمة السر </span>
            <input id="pass" type="password" required placeholder=" تاكيد كلمة السر"/>
        </div>
    
       <div>
             <span class="sub" for="sbmt"></span>
             <button onClick={()=>{createNewAccount(account,onAccountCreated,onAccountCreationFailed)}} id="sbmt" type="submit" >انشاء</button>
       </div>
       </form>

    </div>
    
    )
}
