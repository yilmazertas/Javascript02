// let text="bu bir \"extra\" stringdir"
// console.log(text)
// let text2="istersek\t bir tab boşluk bırakabiliriz.istersek\n yeni satıra da geçebiliriz"
// console.log(text2)
// let text3="bu birinci metindir" +
// "bu ikinci metindir"
// console.log(text3)
// let text="ASFANDIRAM"
// let length=text.length
// console.log(length)

// slice (başlangıçPozisyonu,bitspozisyonu-bitiş dahildeğil )
// let text="Apple, Banana, Kivi"
// let part=text.slice(7,13)
// console.log(part)
// let part2=text.slice(7)
// console.log(part2)
// let part3=text.slice(0)
// console.log(part3)
// let part4=text.slice(-14)
// console.log(part4)
// let part5=text.slice(-7,17)
// console.log(part5)

// let text="Apple, Banana, Kivi"
// let part=text.substring(7,13)
// console.log(part)
// // substring negatif ifadeleri sıfır olarak kabul eder.


// let part2=text.substring(-5)
// console.log(part2)

// Substr(start,length)

// let text="Apple, Banana, Kivi Struberrrri"
// let part=text.substr(19,4)
// console.log(part)


// let text ="Seni SEVİYORUM seviyorum";
// console.log(text)
// let newText=text.replace("seviyorum","sevmiyorum")
// console.log(newText)
// let newText2=text.replace(/SEVIYORUM/i,"sevmiyorum")
// console.log(newText2)
// let newText3=text.replace(/SEVIYORUM/g,"sevmiyorum")
// console.log(newText3)

// let text4=" seni seviyorum,seviyorum";
// let newText5=text4.replace(/seviyorum/g,"sevmiyorum")
// console.log(newText5)

// let newText6=text.replace(/SEVIYORUM/gi,"sevmiyorum")
// console.log(newText6)

// replaceAll "g" nin yaptığı özelliği çalıştırır
// let text="Seni seviyorum seviyorum  Seviyorum Seviyorum"
// let newText=text.replaceAll("seviyorum","sevmiyorum")
// console.log(newText)

// let text1="Hello World!"
// let text2=text1.toUpperCase();
// console.log(text2)

// let text3=text1.toLowerCase()
// console.log(text3)

// let text1="Hello";
// let text2="World";
// let text3=text1.concat(" ",text2," ",text2)
// console.log(text3)
  
// let text1="   Hello  World  ! ";
// console.log(text1),
// console.log(text1.length)
// let text2=text1.trimStart();
// console.log(text2)
// console.log(text2.length)
// let text3=text1.trimEnd();
// console.log(text3)
// console.log(text3.length)
// let text4=text1.trim()
// console.log(text4)
// console.log(text4.length)
// console.log("-",text2,text3,"-",text4,"-")
// let str="Hello  World !"
// let letterCounnt=str.replace(/ /g,"").length;
// console.log(letterCounnt)

// let str="Go out pleas !!!"
// let letterCounnt=str.replace(/\s+/g,"").length;
// console.log(letterCounnt);
// s->bir boşluğu ;s+-->birden fazla boşluğun çıkarılmasını daha doğrusu sadece  toplam harf sayısını verir

// let text ="567";
// let withPadStart=text.padStart(8,"x")
// console.log(withPadStart)
// let withPadEnd=text.padEnd(8,"y")
// console.log(withPadEnd)

// padStart padEnd sadece string ifadelerde kullanılır
// let myNumber= 5;
// let text=myNumber.toString()
// let padded=text.padStart(4,"0")
// console.log(padded)
// console.log(typeof text)

// let text="HELLO WORLD!"
// let charAt1=text.charAt(4)
// console.log(charAt1)
// let charAt2=text.charAt(0)
// console.log(charAt2)
// let charCodeAt=text.charCodeAt(0)
// console.log(charCodeAt)
// let charProperty=text[6];
// console.log(charProperty)

// let x=text.length
// console.log(x)
// let last=text[x-1]
// console.log(last)
// let lastChar=text.charAt(x-1)
// console.log(last)

// let text="elma şeftali üzüm"
// let splitText=text.split(" ")
// console.log(splitText)

// let text1="elma,şeftali,üzüm"
// let splitText1=text.split(" ,")
// console.log(splitText1)

// let text2="elma,şeftali,üzüm"
// let splitText2=text.split("")
// console.log(splitText2)

// let text3="elma,şeftali,üzüm"
// let splitText3=text.split()
// console.log(splitText3)

// let text="Please locate where 'locate' occurs!"
// let indexText=text.indexOf("locate")
// console.log(indexText)
// let indexText2=text.lastIndexOf("loxcate")
// console.log(indexText2)
// let indexText3=text.indexOf("locate",15)
// console.log(indexText3)
// let indexText4=text.lastIndexOf("locate",15)
// console.log(indexText4)

// let text="Please Locate where 'locate' occurs!"
// let searchText=text.search("locate")
// console.log(searchText)
// let searchText2=text.search(/locate/i)
// console.log(searchText2)

// let text ="The rain in SPAIN stays mainly in the plain";
// let textMatch=text.match(/ain/g)
// console.log(textMatch)
// let textMatch2=text.match(/ain/gi)
// console.log(textMatch2)

//  let text="Hello world,welcome to the universr."
//  let textIncludes=text.includes("world",)
//  console.log(textIncludes)

// let text="Hello world,welcome to the universe."
// let textStartWith=text.startsWith("Hello")
// console.log(textStartWith)
// let textStartsWith2=text.startsWith("Hello",)
// console.log(textStartsWith2)
// let textStartsWith3=text.startsWith("Hello",12)
// console.log(textStartsWith3)
// let textEndsWith4=text.endsWith("universe.")
// console.log(textEndsWith4)
// let textEndsWith5=text.endsWith("universe.",12)
// console.log(textEndsWith5)




