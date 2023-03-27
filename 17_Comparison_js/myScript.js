// let x=8;
// console.log(x==8)
// let y="8";
// console.log(y==8)
// console.log(x==y)
// console.log(x===y)
// console.log(y==x)
// console.log(8===8)

// console.log(x !=8)
// console.log(x !=="8")


// "x ! değildir değil mi" anlamıdadır


// let x=8;
// let y=10;
// // console.log(x>=y)

// console.log(x<10 && y>11 )
// // && operatorü
// // herhangi biri false olursa conuç false
// // true olması için ikisininde true olması lazım


// console.log(x<10 || y>11)
// //-- >||veya--> true olmasi için bir tanesi true olması yeterli
// // -->||veya--> false olmasi için ikisisn de false olmasi lazım


// // conditional (ternary) operatör
// let yas=12
// let oyverme=(yas<18) ?"çok küçük oy veremez" 
//            : "oy vermesi için yeterli yaşta"
//    console.log(oyverme)    


// nullish coelescing operator(??)
// name?? name2
// ilk değer undefined/null değilse ilk değer yoksa ikinci değer yazar
// example
//  let name="mustafa"
//  let name1; //undefined
//  let name2=null;
//  let name3=0;
//  let name4="";
//  let name5=NaN;
//  let text="isim yok"
//  console.log(name ?? text)
//  console.log(name1 ?? text)
//  console.log(name2 ?? text)
//  console.log(name3 ?? text)
//  console.log(name4 ?? text)
//  console.log(name5 ?? text)
//  console.log("............")  
 
// // --> ||-->logical or 
// // --?? den farkı 0,"", NaN gelirse de ikinci değeri yazması herhangi bir geçerli değer görürse yazar

// console.log(name   || text)
//  console.log(name1 ||  text)
//  console.log(name2 || text)
//  console.log(name3 || text)
//  console.log(name4 ||  text)
//  console.log(name5 || text)
//  console.log("............")  

// //  && and oparetör(|| tam tersi olarak çalişr)(solda bir değer görürse sağdakini çaliştırır)

// console.log(name   && text)
//  console.log(name1 &&  text)
//  console.log(name2 && text)
//  console.log(name3 && text)
//  console.log(name4 &&  text)
//  console.log(name5 && text)
//  console.log("............")  


// optional chaining operatör 

// const person= {
//     name:"Alice",
// }
// const lastName=person.lastName?.value;
// console.log(lastName)
// const lastNameValue=person.lastName?.["Value"]
// console.log(lastNameValue)
// const myfunc=person.myfunc?.()
// console.log(myfunc)






