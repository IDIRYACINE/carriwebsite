
function doesSomethingOnTheBackEnd(){
    console.log("Done")
    return true
}

export function createNewAccount(account,onSuccess,OnFail){
    if(doesSomethingOnTheBackEnd){
        onSuccess()
    }
    else{
        OnFail()
    }
}