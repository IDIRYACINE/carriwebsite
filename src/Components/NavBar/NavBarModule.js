
//private function
function isAuthenticated(username,password){
    //logic to test username,password
    return true;
}

export function signIn(username , password , onSucess,onFail){
    if(isAuthenticated){
        //onSucess is a function to call if the auth goes through
        onSucess()
    }
    else{
        onFail()
    }
}