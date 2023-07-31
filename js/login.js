var emailInputLog = document.getElementById("emailInput");
var passInputLog = document.getElementById("passInput");
var msg = document.getElementById("alert");
var msg1 = document.getElementById("alert1");
var msg2 = document.getElementById("alert2");

var arr = [];

arr = JSON.parse(localStorage.getItem("emails"));
console.log(arr);

var btn = document.getElementById("loginbtn");
btn.addEventListener("click" , function(){

    logIn();

})

function logIn(){
    if(emailInputLog.value == "" || passInputLog.value == ""){
        msg.classList.remove("d-none");

    }
    else{
        emailCheck();
    }
}



function emailCheck(){
    for ( var i = 0 ; i < arr.length ; i++){
        if ( emailInputLog.value == arr[i].email && passInputLog.value == ""){
            msg.classList.remove("d-none");
        }
        else if(emailInputLog.value == arr[i].email && passInputLog.value != arr[i].pass)
        {
            msg2.classList.remove("d-none");
            msg.classList.add("d-none");
            msg1.classList.add("d-none");
            passInputLog.value= "";
        }
        else if(emailInputLog.value != arr[i].email){
            msg1.classList.remove("d-none");
            msg.classList.add("d-none");
            msg2.classList.add("d-none");
        }
        else if(emailInputLog.value == arr[i].email && passInputLog.value == arr[i].pass){
            msg.classList.add("d-none");
            msg1.classList.add("d-none");
            msg2.classList.add("d-none");
            window.location.href = "home.html";
        }
    }
}