/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$("#btnLogin").click(function(){
    location.href="login.html";
});

$("#frmRegister").submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    var email = $("#inputEmail").val();
    var pass1 = $("#inputPassword").val();
    var pass2 = $("#inputPassword2").val();
    var datalist = "inputEmail="+email+"&inputPassword="+pass1;
    
    if(pass1 === pass2){
        $.ajax({
            type:"post",
            url:"http://192.168.1.15:8080/Lab5/Register",
            data:datalist,
            cache:false,
            success:function(mydata){
                var myData = JSON.parse(mydata);
                if(myData.status === 1){
                    alert("User already Register");
                }
                else{
                    alert("User Succesfully Registered");
                    location.href="login.html";
                }
            },
            error:function(){
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    }else{
        alert("Password did not match!");
    }
});