function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
//skills
function addNewSKField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");
    skOb.insertBefore(newNode, skAddButtonOb);
}
//certificates
function addNewCEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let ceOb = document.getElementById("ce");
    let ceAddButtonOb = document.getElementById("ceAddButton");
    ceOb.insertBefore(newNode, ceAddButtonOb);
}

//projects

function addNewPJField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pjField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let pjOb = document.getElementById("pj");
    let pjAddButtonOb = document.getElementById("pjAddButton");
    pjOb.insertBefore(newNode, pjAddButtonOb);
}
//generating cv//
function generateCV(){
    let nameField = document.getElementById("nameField").value ;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById("contact").innerHTML = document.getElementById("ContactField").value;
    document.getElementById("address").innerHTML = document.getElementById("AddressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("FbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("InstaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("LinkedField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    //work experience
    let wes = document.getElementsByClassName("weField");
    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
    //academic
    let aqs = document.getElementsByClassName("eqField");

    let str1 = "";

    for(let e of aqs){
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //skills
    let sks = document.getElementsByClassName("skField");

    let str2 = "";

    for(let e of sks){
        str2 += `<li> ${e.value}</li>`;
    }
    document.getElementById("skT").innerHTML = str2;

    //certificates
    let ces = document.getElementsByClassName("ceField");

    let str3 = "";

    for(let e of ces){
        str3 += `<li> ${e.value}</li>`;
    }
    document.getElementById("ceT").innerHTML = str3;
    //projects
    let pjs = document.getElementsByClassName("pjField");

    let str4 = "";

    for(let e of pjs){
        str4 += `<li> ${e.value}</li>`;
    }
    document.getElementById("pjT").innerHTML = str4;
    
    //declaration
    document.getElementById("declarationT").innerHTML = document.getElementById("declarationField").value;

    //image
    let file = document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set the image
    reader.onloadend = function(){
    document.getElementById("imgtemplate").src = reader.result;
    };

    document.getElementById("CV-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
//print cv
function printCV(){
    window.print();
}
