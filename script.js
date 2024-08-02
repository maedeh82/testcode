// console.log("maedeh")

//برای اوردن کد های اچ تی ام ال کافیه علامت تعجب و اینتر را بزنیم تا بالا بیاورد
//کد اچ تی ام ال که در قسمت بادی مینویسیم
//<script src="script.js"></script>

// متغیر ها
// let name = "maedeh"
// console . log (name)
//برای اینکه کلمه اول را از کلمه دوم جدا کنیم به جای اسپیس کلمه دوم را با حرف بزرگ شروع کنیم اسم این کار 
// camel noteyshen
//است
//اکر بخواهیم اسم کوچیک و فامیلی را ذکر کنیم
// let fname = "maedeh"
// let lname = "khanzadeh"
// console . log (fname , lname)

//ثابت
// const name = "maedeh"
// console . log (name)
//وقتی از ثابت استفاده میکنیم نمیتوانیم مقدارش را تغییر دهیم ولی در متغر میتوانیم

//تایپ ها
// string
// let name = "maede"

// numbers
// let age = 21

// bool
// let admin = true 
// console . log (name , age , admin)

//نوع دوم تاپ ها
// apject
// let person = {
//     name : "maedeh" ,
//     age : 21 ,
//     admin : true 
// }
// console . log (person)

//اگر بخواهیم یکی از چیزایی ک نوشتیم را لاگ بگیرد
// console . log (persin . name)
//یا
//console . log (person ["name"])

// آرایه ها

//let users = ["maedeh" , "ali"]
//users[2] = "love"
//console . log (users)
// یا
//console . log (users [0])
//اگر بخوایم بدونیم کلا چند عنصر دارد
//console . log (users.length)

// function
// function maedeh (){
//     let black = 2 + 2
//   console . log (black)
// }
// maedeh()

// function maedeh(name , age ){
//     console . log (" hello " + name + " you are " + age + " years old ")
// }
// maedeh(" maedeh " , 21)

//عملگر های محاسباتی
// + و - و / و * و %
// let x = 2
// let y = 5
// console . log (x + y)
// اگر دوتا + قبل از ایکس باشد یه دونه به ایکس اضافه میکند اگر بعد ایکس باشد خود ایکس را نشان میدهد
// اگر دوتا ** هم بگذاریم توانش را میگیرد

// عملگر های انتصاب
// += و *= و /= و %= و -=
// x *= y
//یعنی مقدار جدید ایکس میشه ایکس ضربدر وای

// عملگر های مقایشه ای
// relational
// <  >  <=  >=
// let x = 1
// console . log (x > 1)

//equality
// lose equality
// ==  !=

// strict equality
// === !===
// فرق دوتا مساوی با سه تا اینه که دوتا تایپ هاشون مهم نیست ولی سه تا هست 
// console . log ("1" === "1")
// console . loge ("1" == 1)

// let maedeh = true
// let bottontex = maedeh === true ? "dashbord" : login
// console . log (bottontex)

//عملگر های منطقی
// logical and
// &&
// اکر حتی یکیش فالز باشد نتیجه فالز میشود
// let mojodi = 5
// let gheymat = 1000
// let pol = 1500
// let buy = mojodi > 0 && pol > gheymat
// console . log (buy)

// logical or
// ||
// حتی اگر یکیش درست باشد نتیجه هم درست میشود

// not
// ! 
// درست را غلط میکند و برعکس

// تقدم عملگر ها
// برای اینکه بخوایم یه چیزی رو اول بزاریم یا تو تقدم بزاریم داخل پرانتز میگذاریم مثل
// let x = (3 + 5) * 10
// console . log ( x )

// شرط ها
// if   else if
  
// let hour = 13
// if ( hour >= 6 && hour < 12) {
//     console . log ( 'good morning' )
// }else if ( hour > 12 && hour < 18 ) {
//     console . log ("good afternoon")
// } else {
//     console . log ("good evening")
// }

// switch case

// let maedeh = "admin"
// switch (maedeh) {
//     case "admin":
//     console . log ("admin users")
//     break
//     case "guest": 
//     console . log ("guest users")
//     break
//     default:
//         console . log ("unknow users")
// }

// با استفاده از حلقه ها میتوانیم یک چیز را چند مرتبه لاگ بگیریم
// انواع حلقه ها
//for
// for (let i = 0 ; i < 5 ; i++ ){
//     console.log ("maedeh");
//     console.log ("i")
// }

// while
// let i = 0
// while (i < 5){
//     console.log (i)
//     i++
// }

// do while
// let i = 0
// do{
//     console.log (i)
//     i++
// }while( i < 5)

// for ... in
// const person = { name : "maedeh" , age : 21} 
// for ( let key in person){
//     console.log (key)
//     console.log ( person [ key ])
// }

// for ... of
// const colors = ["read" , "blu" , "pink"]
// for (let color of colors){
//     console.log (color)
// }

// برای این حلقه های بالا میتوانیم دوتا کلمه استفاده کنیم که کاربردش رو میگم پایین
// break
// از اون شرطی که میذاریم به بعد را لاگ نمیگیرد برای مثال
// let i = 0
// while(i <= 10){
//     if (i==5){
//         break
//     } 
//     console.log (i)
//     i++
// }

// continue
// شرط رو عددی که میذاریم فقط اون عدد اجرا نمیشود برای مثال
// let i = 0
// while (i <= 10){
//     if (i==5){
//         i++
//         continue 
//     }
//     console.log (i)
//     i++
// }

// ابجکت ها
// وقتی یک فانگشن را داخل ابجکت میگداریم اسمش میشه متود