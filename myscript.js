function validate_form()
{
var s=true;
var p=document.getElementById("pass");
var p=document.getElementById("repass");
var n=document.getElementById("stu_name");
var r=document.getElementById("regno");
const name_pattern=/^([a-z]+){8}$/;
const reg_pattern=/^[1923]([0-9]){5}$/;
if(!name_pattern.test(n.value))
{
s=false;
n.value="";
document.getElementById("name_error").innerHTML="Name not given properly";
}
if(!reg_pattern.test(r.value))
{
s=false;
r.value="";
document.getElementById("reg_error").innerHTML="Register number is wrong";
}
{
if(p.value!=rp.value)
{
s=false;
p.value="";
rp.value="";
document.GetElementById("pass_error").innerHTML="Misatch between psword and retype assword";
}
return s;
}
