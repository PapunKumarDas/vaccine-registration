

        showData();
function saveData()
{
let name,email,age,phone,adhar,address,date;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
age=document.getElementById("age").value;
phone=document.getElementById("phone").value;
adhar=document.getElementById("adhar").value;
address=document.getElementById("address").value;
date=document.getElementById("date").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name":name,
  "email":email,
  "age":age,
  "phone":phone,
  "adhar":adhar,
  "address":address,
  "date":date,
  
})
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}
