var a = 0;
var b = 0;
var V = 0;
var Name = "";
var Admin= "";
var YN = "";
var YM = "";
var YSN = "";
var YA = "";

document.getElementById('btn1').addEventListener("click",BTN1)

function BTN1 (c) 
{
    a = document.getElementById('myA').value;
    b = document.getElementById('myB').value;
   
 if (a > b)
 alert (b)
 else
 alert (a)

}
document.getElementById('btn2').addEventListener("click",BTN2)

function BTN2 (c) 
{
    a = document.getElementById('myA').value;
    b = document.getElementById('myB').value;
    
 if (a < b)
 alert (b)
 else
 alert (a)

}

document.getElementById('btn3').addEventListener("click",BTN3)

function BTN3 (c) 
{
  Name = document.getElementById('myName').value;
  
 
   var Admin = Name

   alert(Admin)
  
}

document.getElementById('btn4').addEventListener("click",BTN4)

function BTN4 (c) 
{
    V = document.getElementById('myV').value;
  
    var result = confirm("Это ваш возраст?")
    if (result ==true) 
    alert (V)
   
    else
    alert("Заново введите возраст")
    
    return false;
    
   


}

document.getElementById('btn5').addEventListener("click",BTN5)

function BTN5 (c) 
{
  YN = document.getElementById('myYN').value;
  YSN = document.getElementById('myYSN').value;
  YA = document.getElementById('myYA').value;
  YM = document.getElementById('myYM').value;
  
     
  alert (YN)
  alert (YSN)
  alert (YA)
  alert (YM)
  
}

document.getElementById('btn9').addEventListener("click",BTN9)

function BTN9 (c) 
{
  YN = document.getElementById('myYN').value;
  YSN = document.getElementById('myYSN').value;

  
  alert (YN)
  
}

function ch1()
{
    var checkbox=document.getElementById('che1');
  if(checkbox.checked!=false)
  alert("Вот и хорошо");
  
  else
  alert("Нет?");
    
}

