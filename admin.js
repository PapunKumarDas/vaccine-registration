

        showData();

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-2" style="padding: 10px;">'+user_records[i].name+
    '</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].email+
    '</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].age+
    '</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].phone+
    '</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].adhar+
    '</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].address+        
    '</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }
     