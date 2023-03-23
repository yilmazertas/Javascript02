// const cars=["volvo","BMV","Fiat","audi"]
// console.log(cars)
// console.log(cars[2])
// console.log(cars.length)
// console.log(cars[cars.length-1])

// // myList["name"]-->Object
// const cars2={
//     name:"volvo",
//     age:20  
// }
// // myList[0]     -->Array

// console.log(typeof cars2)
// console.log(Array.isArray(cars))
// console.log(Array.isArray(cars2))

// const fruits=["Banana","Orange","Apple","Mango" ]

// console.log(fruits.toString())
// console.log(fruits.join(" "))

// const value=fruits.pop();
// console.log(fruits,value)

// const value2=fruits.push("kivi");
// console.log(fruits,value2)

// const value3=fruits.shift();
// console.log(fruits,value3)

// const value4=fruits.unshift("kivi");
// console.log(fruits,value4)

// const fruits=["Banana","Orange","Apple","Mango" ]
// // fruits[0]="kivi"
// // console.log(fruits)
// fruits[fruits.length-1]="kivi"
// console.log(fruits)
// fruits[fruits.length]="stroberi"
// console.log(fruits)

// const girls=["ayşe","fatma","sibel"];
// const boys=["can","umut","yusuf"];
// const extra=["yılmaz","cemal","muhammed"];
// const people=girls.concat(boys,extra)
// console.log(people)

//SPLİCE()
// const fruits=["Banana","Orange","Apple","Mango"];
// fruits.splice(0,2,"Lemon","Kivi","üzüm")
// // ilk rakam başlama endexini veriyor.ikinci rakam ise sağdan silinecek eleman sayısını veriyor.
// console.log(fruits)

// SLİCE()
// const fruits=["Banana","Orange","Apple","Mango"];
// const citrus=fruits.slice(2)
// const citrus2=fruits.slice(1,3)
// const citrus3=fruits.slice(-1)
// console.log(citrus)
// console.log(citrus2)
// console.log(citrus3)

// ARRAY SORT
// const fruits=["Banana","Orange","Apple","Mango"];
// const citrus=fruits.slice(2)
// console.log(fruits.sort())
// console.log(fruits.reverse())

// const numbers=[40,100,1,5,25,10,]
// // console.log(numbers.sort())
// console.log(numbers.sort(function(a,b){return a-b}))
// console.log(numbers.sort(function(a,b){return b-a}))
// console.log(numbers.reverse(function(a,b){return a-b}))

// console.log(Math.random())
// const points=[40,100,1,5,25,10]
// console.log(points.sort(function(){return 0.5-Math.random()}))

// const cars=[
//     {
//     type:"volvo",year:2016}
//  ,{type:"Mercedes", year:2001},{type:"BMV" ,year:2010}]
// //  console.log(cars)
// //  console.log(cars.sort(function(a,b){return a.year-b.year}))
// //  console.log(cars.reverse(function(a,b){return a.year-b.year}))
// //  console.log(cars.sort(function(a,b){return b.year-a.year}))
// //  console.log(cars.reverse(function(a,b){return a.type-b.type}))
//  console.log(cars.sort(
//     function(a,b){
//     let x= a.type.toLowerCase();
//     let y= b.type.toLowerCase(); 
//     if(x<y) {return -1} 
//     if(x>y){return 1} }))


//  console.log(cars.reverse(
//     function(a,b){
//     let x= a.type.toLowerCase();
//     let y= b.type.toLowerCase(); 
//     if(x<y) {return -1} 
//     if(x>y){return 1} }))

// alfabetik type göre