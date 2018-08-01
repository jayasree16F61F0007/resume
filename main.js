// //function loadJSON(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status=="200"){
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
// loadJSON("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })

function loadJSON(file){
  return new Promise((reslove,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        reslove(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);

})

 var child2=document.querySelector("#child2");

function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Career Objective";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="education objective";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr>  <td> S.NO </td> <td> Degree </td> <td> institute </td> <td> Data </td> </tr>"
  //table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0; i<edu.length;i++){
tr1+="<tr> <td>"+(i+1)+" </td> <td> "+edu[i].degree+"</td> <td>"+edu[i].institute+"</td> <td> "+edu[i].data+"</td></tr>"
  }
  table .innerHTML=tr+tr1;
}
//skills
function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="skills";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  for(var i=0;i<skill.length; i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child2.appendChild(title);
  var list=document.createElement("u1");
  child2.appendChild(list);
}
}
