// const xhttp=new XMLHttpRequest();
// xhttp.onload=function(){
//     document.getElementById("demo").innerHTML=this.responseText
// }
// xhttp.open("GET","txt.jpg");
// xhttp.send();

// const xhttp=new XMLHttpRequest();
// xhttp.onload=function(){
//     document.getElementById("demo").innerHTML=this.responseText
//     console.log(this.responseText)
//     console.log(JSON.parse(this.responseText).location)
// }
// xhttp.open("GET","indir.jpg");
// xhttp.send();

// const xhttp= new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     console.log(this.readystate)
//     console.log(this.status)
// }
// xhttp.onload=function(){
//     document.getElementById("demo").innerHTML=this.responseText
//     console.log(this)
// }
// xhttp.open("GET","txt.jpg")
// xhttp.send();

// function loadDoc(){
//     const xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
//             document.getElementById("load").innerHTML=this.responseText;
//         }
//     };
//     xhttp.open("GET","text.json")
//     xhttp.send();
// }