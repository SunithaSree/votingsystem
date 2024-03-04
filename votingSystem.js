let count1=0;
let count2=0;
let count3=0;
let count4=0;
let lead=count1;
let leadannoune="John is leading";
function validate(){
    let pass=document.getElementById("password").value;
    if(pass=="vote20"){
        window.location.href="pollpage.html";
    }
}
function count(){
    if(document.getElementById("1").checked){
        count1++;
    }
    if(document.getElementById("2").checked){
        count2++;
    }  
    if(document.getElementById("3").checked){
        count3++;
    } 
     if(document.getElementById("4").checked){
        count4++;
    }
    if(count2>lead){
        lead=count2;
        leadannoune="Devarsh is leading";
    }
    if(count3>lead){
        lead=count3;
        leadannoune="Pratiksha is leading";
    }
   window.location.href="votethank.html";
}
function leading(){
    document.getElementById("lead").innerHTML=leadannoune;
}