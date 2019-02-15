function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState==4&&xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
    xhr.send(null);
}

loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  education(data.education);
  tech(data.TechnicalSkills);
})
var left=document.querySelector(".leftchild");
function details(det)
 {
   var image=document.createElement("img");
   image.src=det.image;
   left.appendChild(image);

   var name=document.createElement("h3");
   name.textContent=det.name;
   left.appendChild(name);

   var number=document.createElement("p");
   number.textContent=det.number;
   left.appendChild(number);

   var email=document.createElement("a");
   email.textContent=det.email;
   email.href="mailto:kiranvvs457@gmail.com"
   left.appendChild(email);

   var college=document.createElement("p");
   college.textContent=det.college;
   left.appendChild(college);

   var address=document.createElement("p");
   address.textContent=det.address;
   left.appendChild(address);
 }
var right=document.querySelector(".rightchild");
function careerinfo(career)
{
  var ci=document.createElement("h2");
  ci.textContent="Career Objectives";
  right.appendChild(ci);

  var add=document.createElement("p");
  add.textContent=career.info;
  right.appendChild(add);

   var hr=document.createElement("hr");
   right.appendChild(hr);
 }

 function education(edu)
 {
     var add1=document.createElement("h3");
     add1.textContent="Educational Qualification";
     right.appendChild(add1);

     var hr=document.createElement("hr");
     right.appendChild(hr);

     var table=document.createElement("table");
     table.border="1";
     var tr1="<tr><th>Institute</th><th>Degree</th><th>Passout</th></tr>";
     var tr2="";

     for(var i=0;i<edu.length;i++)
     {
       tr2+="<tr><td>"+edu[i].Institute+"</td><td>"+edu[i].Degree+"</td><td>"+edu[i].Passout+"</td></tr>";
     }
     table.innerHTML=tr1+tr2;
     right.appendChild(table);
 }
 function tech(tec)
 {
   var add2=document.createElement("h3");
   add2.textContent="Technical Skills";
   right.appendChild(add2);

   var hr=document.createElement("hr");
   right.appendChild(hr);

   var language1=document.createElement("p");
   language1.textContent=tec.language1;
   right.appendChild(language1);

   var language2=document.createElement("p");
   language2.textContent=tec.language2;
   right.appendChild(language2);

   var language3=document.createElement("p");
   language3.textContent=tec.language3;
   right.appendChild(language3);

   var language4=document.createElement("p");
   language4.textContent=tec.language4;
   right.appendChild(language4);

 }
