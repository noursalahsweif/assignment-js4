var signUpName = document.querySelector("#nameInput");
var signUpEmail = document.querySelector("#emailInput");
var signUpPass = document.querySelector("#passInput");

var arr = [];
var msg = document.getElementById("alert");
var msg1 = document.getElementById("alert1");
var msg2 = document.getElementById("alert2");






var btn = document.querySelector("#signup")
btn.addEventListener("click" , function(){

    signUp();
}
)



// function to signup -------------------------------------------------------------




function signUp(){
    

    var signUpInputs = {
        name : signUpName.value,
        email : signUpEmail.value,
        pass : signUpPass.value,
    }
    // validation();
    already();

    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var emailValid = signUpEmail.value;
    if (regex.test(emailValid) == true)
    {
        msg1.classList.add("d-none");
        console.log("emailvalid");

        
        if (signUpEmail.vlaue == "" || signUpName.value == "" || signUpPass.value == ""){
            msg.classList.remove("d-none");
            console.log("fill");
        }
    
    
        else {
            
            arr.push(signUpInputs)
            localStorage.setItem("emails" , JSON.stringify(arr))
            console.log("asvmnobuiushdiamk");
            window.location.href = "index.html";
        }
         
    }
    else
    {
        msg1.classList.remove("d-none");
        msg.classList.add("d-none");
        clear();

    }
    
    
    
}







// check if the email already excit 



function already(){
    for (var i = 0 ; i < arr.length ; i++){
        if (signUpEmail.value == arr[i].email)
        {
            msg2.classList.remove("d-none");
            console.log("email exict");
        }
    }
}



function clear(){
    signUpEmail.value = "";
    
}
