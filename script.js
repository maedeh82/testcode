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

// let users = ["maedeh" , "ali"]
// users[2] = "love"
// console . log (users)
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
// let dayereh = {
//     masahat: 1 ,
//     dayere : {
//         x:2,
//         y:2
    
//     }, abad:true,
//     draw : function(){console.log ("draw")}
// }
//     dayereh.draw()

// factory function
// function maedehKHan (dayere){
//     return {
//         dayere ,
//         draw (){ console,log ("draw")}
//     }
// }
// let maedeh1 = maedehKHan (1)
// console.log (maedeh1)
// اگر بخواهیم هر تعداد فانگشن اضافه کنیم فقط کافیه زیر اینا بنویسیم
// let maedeh2 = maedehKHan (2)
// console.log (maedeh2)

// construtor function
// دوتا راه برای جدا سازی کلمات داریم یکیش کمل نوتیشن بود این یکی پاسکال نوتیشن است که هم حرف اول هم 
// هم حرف دوم بزرگ است مثل
// MaedehKHanzadeh
// function Maedeh (dayere){
//     this.dayere = dayere
//     this.draw =function (){
//         console.log ('draw')
//     }
// }
// const maedeh = new Maedeh (1)
// console.log (Maedeh)

// وقتی میخوایم یکی از ابجکتایی که ساختیمو پاک کنیم
// const maedeh = {
//     dayere: 1
// }
// maedeh. color = "read"
// maedeh. draw = function(){
// }
// delete maedeh.dayere
// console.log(maedeh)


// فانگشن ها همان ابجکت هستند برای مثال
// متود ها
// call
// function Maedeh (dayere , masahat){
//     this.dayere = dayere
//     this. draw = function(){
//         console.log ("draw")
//     }
// }
// const another = new Maedeh (3)
// کد خط بالا با خط پایین باهم برابرند یک کار را انجام میدهند
//  Maedeh.call({} , 9 , 6)

 // apply
//  function Maedeh (dayere , masahat){
//     this.dayere = dayere
//     this. draw = function(){
//         console.log ("draw")
//     }
// }
// const another = new Maedeh (3) 
// کد خط بالا با خط پایین باهم برابرند یک کار را انجام میدهند
// Maedeh.apply({} , [9 , 6])

// علاوه بر فانگشن ها آرایه ها هم ابجکت هستند
// let abj = {value : 10}
// function Maedeh(abj){
//     abj.value++
// }
// Maedeh(abj)
// console.log (abj)
// نکته کد های بالا
// فانکشن ها و ارایه ها که نوعی ابجکت هستن به مقدار ادرسشون کپی میشن
// ها مقدارشون کپی میشود value


// پیماش کردن پراپرتی های آبجکت
// const maedeh = {
//     radius : 1 ,
//     draw(){
//         console.log ("draw")
//     }
// }
// let maedehkeys = Object.keys(maedeh)
// console.log (maedehkeys)

// for(let key of maedehkeys)
//     console.log (key)

// روشی دیگر از کد های بالا
// const maedeh = {
//     radius : 1 ,
//     draw(){
//         console.log ("draw")
//     }
// }
// let maedehEntries = Object.entries(maedeh)
// for( let entry of maedehEntries){
//     console.log (entry)
// }

// اگر بخواهیم بفهمیم پیمایش چیزی که میخوایم را نشان میدهد 
// const maedeh = {
//     radius : 1 ,
//     draw(){
//         console.log ('draw')
//     }
// }
// if ('draw' in maedeh){
//     console.log ('yess')
//     console.log ('draw' in maedeh)
// }


// کلون کردن ابجکت
// ینی تمام پراپرتی های یک ابجکت را در ابجکتی دیگر کپی کنیم
// const maedeh = {
//     radius : 1 ,
//     draw(){
//         console.log ('draw')
//     }
// }
// const another = {...maedeh}
// یا میتونیم قبل و بعد کد بالا هم چیزایی که میخوایم رو اضافه کنیم مثل
// const another = {color : 'read' ,...maedeh , number : 4 }
// console.log (another)


// math ابجکت
// برای محابات ریاضی است که نیازشون داشتیم میتونیم از گوگل دان کنیم

// جاوااسکریپت استرینگ
// این هم یکسری متود داخل گوگل داره که میتونیم بریم استفاده کنیم ازشون


// اگر بخواهیم یه متنی رو سطر اول و متن بعدی را در سطر دوم بیاریم باید مثل کد های پایین عمل کنیم
// const another = ` maedeh .
// coding is cool`
// console.log (another)

// اگر بخواهیم متغیر کنیم اسمو مثلا یک متن ثابت باشد ولی اسمش تغییر کند 
// let name = 'maedeh'
// let msg = ' hi ' + name + ' thank you '
// console.log (msg)

// object date
// const now = new Date ()
// const date1 = new Date (' May 2003 11 9:00 ')
// const date2 = new Date (4 , 2018 , 12 , 0 )
// console. log (date1)


// اضافه کردن المنت به ارایه
 // push
 // به انتهای ارایه اضافه میکند
//  const numbers = [1 , 2, 3]
//  console.log (numbers)
//  numbers.push( 5 , 6 )
//  console.log (numbers)

// unshift
 // به ابتدای ارایه اضافه میکند
//  const numbers = [1 , 2, 3]
//  console.log (numbers)
//  numbers.unshift( 5 , 6 )
//  console.log (numbers)

// splice
// به هرجایی که خواستید اضافه میکنه
// splice (2,0,5)
// در قسمتی ک نوشتم دو اون قسمتیه که میخوایم اضافه کنیم
// در قسمتی که نوشتم صفر چیزیه که میخوایم حذف کنیم
// در قسمتی که نوشتم پنج چیزیه که میخوایم اضافه شه و حتی استرینگ هم میتونه باشه
//  const numbers = [1 , 2, 3]
//  console.log (numbers)
//  numbers.splice(2 , 0 , 5,'k')
//  console.log (numbers)


// یافتن المنت در ارایه
// باشد const اگر
// const numbers = [1,2,3,4]
// console.log (numbers.indexOf(1))
// کد بالا اولین عنصر را به من نشون میده
// کد پایین اخرین عنصر رو که پیدا کنه رو به من نشون میده
// const numbers = [1,2,3,4,1,5]
// console.log (numbers.lastIndexOf(1))
// اگر بخواهیم از یک جایی به بعد را جستجو کنه
// const numbers = [1,2,3,4,1,5]
// console.log (numbers.indexOf(1,2))
