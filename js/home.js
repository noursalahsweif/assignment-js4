var btn = document.getElementById("logOut");


var arr = [];

arr = JSON.parse(localStorage.getItem("emails"));
console.log(arr);


var x = document.getElementById("con");
x.innerHTML = `
<h2>hello</h2>
<h1>${arr[0].name}</h1>
`


btn.addEventListener("click" , function(){

    window.location.href = "index.html";
})






