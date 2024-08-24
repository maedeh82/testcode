// console.log("maedeh")

// برای اوردن کد های اچ تی ام ال کافیه علامت تعجب و اینتر را بزنیم تا بالا بیاورد
// کد اچ تی ام ال که در قسمت بادی مینویسیم
// <script src="script.js"></script>

// متغیر ها
// let name = "maedeh"
// console . log (name)
// برای اینکه کلمه اول را از کلمه دوم جدا کنیم به جای اسپیس کلمه دوم را با حرف بزرگ شروع کنیم اسم این کار 
// camel noteyshen
// است
// اکر بخواهیم اسم کوچیک و فامیلی را ذکر کنیم
// let fname = "maedeh"
// let lname = "khanzadeh"
// console . log (fname , lname)

// ثابت
// const name = "maedeh"
// console . log (name)
// وقتی از ثابت استفاده میکنیم نمیتوانیم مقدارش را تغییر دهیم ولی در متغر میتوانیم

// تایپ ها
// string
// let name = "maede"

// numbers
// let age = 21

// bool
// let admin = true 
// console . log (name , age , admin)

// نوع دوم تاپ ها
// opject
// let person = {
//     name : "maedeh" ,
//     age : 21 ,
//     admin : true 
// }
// console . log (person)

// اگر بخواهیم یکی از چیزایی ک نوشتیم را لاگ بگیرد
// console . log (person.name)
// یا
// console . log (person ["name"])

// آرایه ها

// let users = ["maedeh" , "ali"]
// users[2] = "love"
// console . log (users)

// لاگ گرفتن یک عنصر از ارایه
// console . log (users [0])

// اگر بخوایم بدونیم کلا چند عنصر دارد
// console . log (users.length)

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

//پاس دادن ابجکت به فانکشن
// function maedeh(props){
//         console . log (" hello " + props.name + " you are " + props.age + " years old ")
// }
// maedeh({name : "ali", age : 21 })

// عملگر های محاسباتی
// + و - و / و * و %
// let x = 2
// let y = 5
// console . log (x + y)
// اگر دوتا + قبل از ایکس باشد یه دونه به ایکس اضافه میکند اگر بعد ایکس باشد خود ایکس را نشان میدهد
// اگر دوتا ** هم بگذاریم توانش را میگیرد

// عملگر های انتصاب
// += و *= و /= و %= و -=
// x *= y
// یعنی مقدار جدید ایکس میشه ایکس ضربدر وای

// عملگر های مقایشه ای
// relational
// <  >  <=  >=
// let x = 1
// console . log (x > 1)

// equality
// lose equality
// ==  !=

// strict equality
// === !===
// فرق دوتا مساوی با سه تا اینه که دوتا تایپ هاشون مهم نیست ولی سه تا هست 
// console . log ("1" === "1")
// console . loge ("1" == 1)

// let maedeh = true
// let bottontex = maedeh === true ? "dashbord" : login
// خلاصه شده  
// let bottontex = maedeh? "dashbord" : login
// console . log (bottontex)

// عملگر های منطقی
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
// for
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

// الگو های ساخت ابجکت
// وقتی یک فانگشن را داخل ابجکت میگداریم اسمش میشه متود
// let dayereh = {
//     masahat: 1 ,
//     dayere : {
//         x:2,
//         y:2
    
//     }, abad:true,
//     draw : function(){console.log ("draw")}
// } 
// console.log(dayereh)
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
// MaedehKHanzadehs
// function Maedeh (dayere){
//     this.dayere = dayere
//     this.draw =function (){
//         console.log ('draw')
//     }
// }
// const maedeh = new Maedeh (1)
// console.log (maedeh)

// وقتی میخوایم یکی از قسمت های ابجکتایی که ساختیمو پاک کنیم
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
// function Maedeh (dayere){
//     this.dayere = dayere
//     this. draw = function(){
//         console.log ("draw")
//     }
// }
// const another = new Maedeh (3)
// // کد خط بالا با خط پایین باهم برابرند یک کار را انجام میدهند
//  Maedeh.call({} , 9 , 6)

//  apply
//  function Maedeh (dayere , masahat){
//     this.dayere = dayere
//     this. draw = function(){
//         console.log ("draw")
//     }
// }
// const another = new Maedeh (3) 
// کد خط بالا با خط پایین باهم برابرند یک کار را انجام میدهند
// Maedeh.apply( {}, [9 , 6])

// توضیح دهنده اینکه ارایه ها هم ابجکت هستند
//  ابجکت ها کروشه باز و بسته است که میتوانیم از این کروشه ها برای ارایه ها هم استفاده کنیم
// به معنای دیگر ارایه هاهم ابجکت هستند
// let abj = {value : 10}
// function Maedeh(abj){
//     abj.value++
// }
// Maedeh(abj)
// console.log (abj)
// نکته کد های بالا
// فانکشن ها و ارایه ها که نوعی ابجکت هستن به مقدار ادرسشون کپی میشن
// ها مقدارشون کپی میشود value
// منظور از مقدار اینه که همون عدد یا استرینگ که داخل ارایه نوشته شده رو میاره مینویسه
// منظور از ادرس اینه ک مثلا ولیو دونقطه ده رو میاره مینویسه



// پیماش کردن پراپرتی های آبجکت
// فور اف فقط برای کد هایی قابل اجرا است که ایتربل باشد
// ایتربل همان پیمایش کردن است
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

// اگر بخواهیم یه شرط برای ایتربل یا همون کد های بالا بزاریم به صورت زیر میگذاریم
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
// ینی تمام پراپرتی های یک ابجکت را کپی کنیم
// const maedeh = {
//     radius : 1 ,
//     draw(){
//         console.log ('draw')
//     }
// }
// const another = {...maedeh}
// console.log (another)
// معنی سه نقطه اینه ک تمام اجزای ابجکت بالا را در ابجکت انادر برا من قرار بده


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
// راه بهتر کد پاییین
// let massage = `hi ${name} thant you` 

// object date
// const now = new Date ()
// const date1 = new Date (' May 2003 11 9:00 ')
// const date2 = new Date (4 , 2018 , 12 , 0 )
// دریافت متد های مختلف مربوط تاریخ ساعت و
// console. log (now.getFullYear())


// اضافه کردن المنت به ارایه
//  push
//  به انتهای ارایه اضافه میکند
//  const numbers = [1 , 2, 3]
//  console.log (numbers)
//  numbers.push( 5 , 6 )
//  console.log (numbers)

// unshift
//  به ابتدای ارایه اضافه میکند
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
// indexOf
// باشد const اگر
// const numbers = [1,2,3,4]
// console.log (numbers.indexOf(1))
// کد بالا اولین عنصر را به من نشون میده
// کد پایین اخرین عنصر رو که پیدا کنه رو به من نشون میده
// const numbers = [1,2,3,4,1,5]
// console.log (numbers.lastIndexOf(1))
// اگر بخواهیم از یک جایی به بعد را جستجو کنه
// عدد اول اونیه که باید جاش و بگه عدد دوم برای اینه ک از اونجا به بعدشو بهم بگه
// const numbers = [1,2,3,4,1,5]
// console.log (numbers.indexOf(1,2))

// اگر بخواهیم بودن یا نبودن یک عدد یا هرچیزی که داخل ارایه امون هست رو چک کنیم 
// const numbers = [1,2,3,4,5,6]
// if(numbers.includes(5)){
//     console.log ('yes')
// }

// find
// جستجو برای عناصر رفرنس
// همان بحث ذخیره به عنوان ادرس 
// اگر قسمت ریتورن 1 بگذاریم ایدی یک را نشان میدهد و اگر 2 بگذاریم ایدی دو را نشان میدهد
// به حروف کوچیک و بزرگ دقت کن 
// وقتی داخل یک ارایه بخواهیم ابجکتش رو پیدا کنیم از 
// FIND 
// استفاده میکنیم
//  const scool = [
//     {id : 1 , name:'maedeh' , famyli : 'khanzadeh' , gpa:18},
//     {id : 2 , name : 'ali' , family : 'sedighi' , gpa : 20}
//  ]
//  const Scool = scool.find(function(scools){
//     return scools.id === 1
//  })
//  console.log (Scool)
//  یک کد دیگر هم هست که به جای فایند بالا قرار میگیره و مکان اون جمله یا کلمه رو به ما میگه کجاست
//  مثلا یا صفره یا یک یا دو به همین ترتیب
//  کد دقیقشو پایین مینویسم یادت رفت لایگ بگیر ببین
//  نکته دیگ اینکه وقتی میخوای بفهمی اندیسشو میتونی به جای اینکه ایدیشو بگی مائده ام بنویسی ولی داخل نوتیشن
//  const scool = [
//     {id : 1 , name:'maedeh' , famyli : 'khanzadeh' , gpa:18},
//     {id : 2 , name : 'ali' , family : 'sedighi' , gpa : 20}
//  ]
//  const Scool = scool.findIndex(function(scools){
//     return scools.id === 1
//  })
//  console.log (Scool)
//  از طرف دیگر هم به جای فانگشنی که در بالا نوشته شده میتونم کوتاه ترش کنم و کد های پایین و بنویسم
//  const scool = [
//     {id : 1 , name:'maedeh' , famyli : 'khanzadeh' , gpa:18},
//     {id : 2 , name : 'ali' , family : 'sedighi' , gpa : 20}
//  ]
//  const Scool = scool.find((scools)=>{
//     return scools.id === 1
//  })
//  console.log (Scool)


// حذف المنت از ارایه
// وقتی میخوایم اخرین عنصر رو حذف کنیم
// const numbers = [1,2,3,4]
// const last = numbers.pop()
// console.log (numbers)

// اگر بخواهیم از ابندای عنصر حذف کنیم
// const numbers = [1,2,3,4]
// const first = numbers.shift()
// console.log (numbers)

// حذف عنصر از میانه یا هرجایی که خواستیم
// const numbers = [1,2,3,4]
// const result = numbers.splice(2,1)
// console.log (numbers)
// عدد اول ینی دو یعنی از عنصر دو به بعد را حذف کن
// و عدد دوم ینی یک یعنی وقتی همون یدونه رو حذف کن 
// و اگر بخواهیم ببینیم چیو حذف کرده کافیه پایین کنسول دات لاگ کد پایین را بزاریم
// console.log (result)
// اسمی که داخل پرانتز است متناسب با اسمیه برای کانست دومی انتخاب کردیمه

// مسئله
// let scool = [
//     {
//         id:1,
//         name:'maedeh',
//         family:'khanzadeh',
//         age:21,
//         gpa:20
//     },
//     {
//         id:2,
//         name:'ali',
//         family:'sedighi',
//         age:25,
//         gpa:20
//     },
//     {
//         id:3,
//         name:'zahra',
//         family:'moradi',
//         age:40,
//         gpa:20
//     },
//     {
//         id:4,
//         name:'mohamad',
//         family:'nemati',
//         age:18,
//         gpa:20
//     },
//     {
//         id:5,
//         name:'dariush',
//         family:'khanzadeh',
//         age:27,
//         gpa:20
//     }
    
// ]
// برای اینکه بخوایم کل ابجکت بالا را لاگ بگریم از کد پایین استفاده میکنیم
// console.log (scool)
// برای اینکه بخوایم یکی از ابجکتای بالا استفاده کنیم از کد پایین استفاده میکنیم
// console.log (scool[2])


// حذف تمام عنصر یا المنت های ارایه
// let numbers = [1,2,3,4]
// numbers = []
// console.log (numbers)

// حالا اگر بخواهیم خط دوم کد بالا یک متغیر اضافه کنیم که اونم خوانده نشود از کد پایین استفاده میکنیم
// let numbers = [1,2,3,4]
// let another = numbers
// numbers.length = 0
// console.log (numbers)
// console.log (another)


// چگونه دو آرایه را باهم ترکیب کنیم
// const number = [1,2,3]
// const numbers = [4,5,6]
// const add = number.concat(numbers)
// console.log (add)

// چگونه از دل یک ارایه ارایه دیگر را بیرون بکشیم
// const number = [1,2,3]
// const numbers = [4,5,6]
// const add = number.concat(numbers)
// console.log (add)
// const slice = add.slice(2,4)
// اعداد داخل پرانتز خط بالا اولین عدد میگه مه از چه عنصری به بعد رو خارج کنه 
// عنصر دومش میگه که قبل از چه عنصری تموم کنه جداسازی رو
// حالا اگر عنصر دوم را وارد نکنیم از اونجایی که گفتیم تا اخر اعداد را برای ما جدا میکنه
// و اگر هیچ ورودی بهش ندیم میاد همونو کپی میکنه
// console.log (slice)


// یک راه راحت تر برای اینکه دو تا ارایه رو باهم ترکیب کنیم 
// const number = [1,2,3]
// const numbers = [4,5,6]
// const add = [...number,...numbers]
// console.log (add)
// اگر هم بخواهیم میتوانیم در قسمت ادد به اول اخرش چیزی که میخوایم رو اضافه کنیم مثل کد پایین
// const add = ['m',...number,'a',...numbers]
// console.log (add)


// برای اینکه هر یک از اعداد در یک خط جدا قرار بگیرد
// باید از حلقه فور اف استفاده شود
// const numbers = [1,2,3]
// for(let number of numbers)
//     console.log (number)

// راه دیگر برای کد های بالا
// فور ایچ
// هر بار میاد اون ارایه ای داریم و صدا میزنه حالا هر تعداد که داشته باشیم
// const numbers = [1,2,3]
// numbers.forEach((number)=>{
//     console.log (number)
//     console.log (number+10)
// })
// در رابطه با به علاوه 10
// اگر بخواهیم به اعدادی که داریم هرچند عدد اضافه کنیم کافیه داخل پرانتزی ک میخوام لاگ بگیریم
// بنویسیم به علاوه حالا هر عددی ک خواستیم واعدادمون رو به علاوه اون عدد کنه



// جدا کردن ارایه ها از هم
// برای مثال من میخوام به جای و بین اعدادم فاصله بزاره 
// const numbers = [1,2,3,4]
// const joined = numbers.join(' ')
// console.log (joined)


// مرتب کردن ارایه ها
// بر اساس اعداد
// const numbers = [5,4,3,2,1]
// numbers.sort()
// console.log (numbers)

// چگونه ترتیب ارایه را برعکس کنیم 
// const numbers = [1,2,3,4,5]
// const reverse = numbers.reverse()
// console.log (reverse)

// مرتب کردن بر اساس حروف الفبا
// const scool = [
//     {id : 1 , name : 'maedeh'},
//     {id : 2 , name : 'ali'}
// ]
// scool.sort(function(a,b){
//     if(a.name<b.name)return -1
//     if(b.name<a.name)return 1
//     return 0
// })
// console.log (scool)


// تست المنت های ارایه
// every
// اگر حتی یک عدد منفی هم داشته باشیم نتیجه فالز میشود
// برای مثال میخوایم ببینیم همه ارایه ها فرد هستن یا زوج هستن یا هر چیز دیگری
// ما میخوایم ببینیم همه اعداد مثبت هستند یا نه
//  این شرط تا جایی ادامه پیدا میکنه ک یه عدد منفی باشد
// const numbers = [1,2,3,4,]
// const number = numbers.every(function(value){
//     return value >= 0
// })
// console.log (number)


// some
// حتی اگر یدونه ام عدد مثبت داشته باشه نتیجه درست میشه
// const numbers = [-1,-2,-3,4]
// const number = numbers.some(function(value){
//     return value >= 0
// })
// console.log (number)


// چگونه ارایه رو بر اساس یک شرط فیلتر کنیم
// برای مثال میخوایم فقط اعداد مثبت را به ما نشان دهد
// const numbers = [1,-1,2,-2,3]
// const filtered = numbers.filter(function(value){
//     return value >= 0
// })
// console.log (filtered)

// میخوایم به جای ولیو از ارایه استفاده کنیم
// برای مثال معدل بالای 18 رو برای من نشون بده
// const scool = [
//     {id : 1 , name : 'maedeh' , age : 21 , gpa : 18},
//     {id : 2 , name : 'ali' , age : 25 , gpa : 20},
//     {id : 3 , name : 'mohamad' , age : 18 , gpa : 16},
//     {id : 4 , name : 'zahra' , age : 40 , gpa : 15}
// ]
// const filtered = scool.filter(
//     scool=> scool.gpa>=18
// )
// console.log (filtered)


// مپ کردن ارایه
// هر المنت داخل ارایه رو میتونیم به چیز دیگه تغییر بدیم
// برای مثال میخوایم هر یک از عنصر هایی ک داریم و دو برابر کنه
// const numbers = [1,2,3,4]
// const number = numbers.map (function(value){
//     return value * 2
// })
// console.log (number)

// مثالی دیگر از مپ کردن 
//مثالی از یک ارایه استرینگی را به یک ارایه ابجکتی نوشتن
// مپ مثل فور ایچ و حلقه های دیگر عمل میکنه 
// فرقش اینه که بقیه حلقه ها اید بهشون بگی که وایسا ولی مپ به تعداد ایتمای یه ارایه حلقه میزنه
// نیاز نیست بهش بگی وایسا
// let values = []
// const name = ['maedeh' , 'ali' , 'sara' , 'reza']
// const items = name.map(function(names){
//     if (names=='maedeh') {
//     values.push({value : 0})  
//     } else {
//         values.push({valeu : names}) 

//     }
    
// })
// console.log (values)
// کد های بالا میاد قبل اسمایی ک میخوایم یک ولیو دو نقطه میزاره


// انجام میده this کاری که
// به ابجکتی که در فانگشن فعلی شماست اشاره میکند
// this برای مثال استفاده از
// وقتی که بخواهیم یک عنوانی رو جایگزین عنوان داخل فانگشنمون کنیم
// function video (title){
//     this.title=title
//     console.log (this)
// }
// const v = new video ("maedeh")

// this مثالی دیگر از
// const video = {
//     title : 'a',
//     tags : ['a' , 'b' , 'c'],
//     showTags (){
//         this.tags.forEach(function(tags){
//             console.log (this,tags)
//         }, this )
//     }
// }
// video.showTags()
// کدای بالا رو نفهمیدم


// hoisting
// وقتی یک فانگشن خالی بدون متغیر داشته باشیم مثل مثال زیر
// function video(){
//     console.log (video)
// }
// video()
// ما میتونیم صدا زدن ویدیو رو خط اول هم بیاریم بعد فانکشنمون رو بنویسیم
// hoisting که به اینکار میگن


// آرگومان
// در کد های پایین هرچند تا ارگومان هم میداشتیم بار فقط دوتا ارگومان اول را جمع میکرد
// function maedeh (a , b){
//     console.log ()
//     return a+b
// }
// console.log (maedeh(1,2))
// مقدار یک و دو که دادم میشن ارگومان

// حالا اگر بخواهیم که ارگومان بیشتری داشته باشیم ولی دو عنصر 
// a , b
// داشته باشیم و بخواهیم همه ارگومان هارو باهم جمع کند از کد های زیر استفاده میکنیم
// function maedeh (a , b){
//     console.log (arguments)
//     let total = 0
//     for(let valeu of arguments)
//         total += valeu
//     return total
// }
// console.log (maedeh( 1 , 2 , 3 , 6 , 8 ))


// وقتی میخوایم جمع تمام اعداد داخل یک متغیر را حساب کنیم
// const numbers = [1 , 2 , 3 , -1]
// let sum = 0
// for(let n of numbers)
//     sum = sum +n
// console.log (sum)

// یک راه دیگر برای کد های بالا 
// const numbers = [ 1 , 2 , 3 , -1]
// let sum = numbers.reduce(function( a , b){
//     return a + b
// } )
// console.log (sum)


// مقدار دهی اولیه پارامتر
// برای مثال میخواهیم سود بانکی را محاسبه کنیم 
// ولی مقدارشو میخوایم هرچی که خواستیم بزاریم 
// و هر وقت که خواستیم عوضش کنیم
// function interest (aslPool , nerkh , sal){
//     return ((aslPool * nerkh) / 100) * sal
// }
// console.log (interest(1000000 , 3.5 , 5))

// حالا اگر نرخ و سال رو طرف خودش وارد نکرد بیایم یه نرخ و سال دیفالت بدیم
// اگر هم وارد کرده بود اون دیفالته خونده نمیشه
// function interest (aslPool , nerkh=3.5 , sal=5){
//     return ((aslPool * nerkh) / 100) * sal
// }
// console.log (interest(1000000 ))
// نکته این قضیه اینجاست که اگر نرخ و مقدار دیفالت بهش دادیم بعدیشم باید مقدار دیفالت بگیره
// وگرنه کد اجرا نمیشه
// فقط در صورتی میشه اینکارو کرد که مقدار نرخ رو در کنسول اندیفایند بدیم مثل مثال زیر
// function interest (aslPool , nerkh=3.5 , sal){
//     return ((aslPool * nerkh) / 100) * sal
// }
// console.log (interest(1000000 , undefined , 5 ))
// ولی بهترین کار اینه که اون پارامتری که بهش دیفالت دادیم اخر بمونه تا نیاز به کد بالا نباشه


// یک نوع دیگر از ابجکت ها
// وقتی بخواهیم اسم و فامیل طرف را در یک خط بیاریم
// getters
// const person = {
//     fname : 'maedeh',
//     lname : 'khanzadeh',
//     get fulname (){
//         return `${person.fname} ${person.lname}`
//     }
// }
// console.log (person.fulname)
// حالا اگر بخواهیم اسممون رو عوض کنیم یا یک مقدار دیگر بهش بدیم از کد زیر استفاده میکنیم 
// const person = {
//     fname : 'maedeh',
//     lname : 'khanzadeh',
//     get fullName (){
//         return `${person.fname} ${person.lname}`
//     },
//     set fullName (value){
//         const parts = value.split(' ')
//         this.fname = parts [0]
//         this.lname = parts [1]
//     }
// }
// person.fullName = 'ali sedighi'
// console.log (person.fullName)


// rest عملگر
// راهی دیگر برای جمع کردن اعداد از راه 
// rest
// با فرق اینکه اعدادو بعد از کد خودت بهش میدی
// function sum (...args){
//     return args.reduce((a , b)=>a+b)
// }
// console.log (sum(1,2,3,4,15))
// یک مسئله از کدای بالا
// میخوایم تخفیف رو بر یک یا چند محصولی که خریداری شده اعمال کنیم
// function buy (discount , ...args){
//     const total = args.reduce((a , b)=>a+b)
//     return total * (1- discount)
// }
// console.log (buy (0.5 , 1 , 2 , 3 , 4 , 10))
// نکته درباره مسئله بالا 
// تخفیف یا هرچیزی که میخوایم اعمال کنیم رو قبل از سه نقطه ارگس باید بزاریم حتما


// مسئله
// لاگ گرفتن اعداد زوج از یک تا پنجاه
// function even (numberStart , numberEnd){
//     for (let i = numberStart ; i < numberEnd ; i++){
//         if (i % 2 === 0){
//             console.log (i)
//         }
//     }
// }

// even(1 , 100)
    

// const scole = [
//     { name: 'Ali', score: 7, comment: 'Excellent service!' },
//     { name: 'mamad', score: 4, comment: 'It was okay.' },
//     { name: 'maedeh', score: 4, comment: 'Good, but could be better.' },
//     { name: 'zahrd', score: 2, comment: 'Not satisfied.' },
//     { name: 'reza', score: 5, comment: 'Amazing expece!' }
// ];


// const maedeh=()=>{
//     let num = 0
//     let comment=[]

//     scole.forEach(item => {
//       num = num + item.score / scole.length
//     });

//     num = Math.round(Number(num))
//     console.log("averange=>",num)

//     const sort = scole.sort(function(a,b){
//         if(a.comment.length<b.comment.length)return -1
//         return 0
//     })

//     sort.forEach(i => {
//     if (i.score>num) {
//         comment.push(
//             {
//                name : i.name,
//                coment : i.comment
//             }
//         )
//     }

// });
// console.log("comment=>",comment)

// }



// maedeh()


// مسئله
// let student = [
//     {id : 1 , firstName : 'maedeh' , lastName : 'khanzadeh' , gpa : 18 },
//     {id : 2 , firstName : 'ali' , lastName : 'sedighi' , gpa : 20},
//     {id : 3 , firstName : 'zahra' , lastName : 'moradi' , gpa : 17},
//     {id : 4 , firstName : 'mohamad' , lastName : 'namati' , gpa : 16}
// ]
// let stu = []
//     student.forEach(i => {
//       if (i.firstName){
//         stu.push(
//             {
//                 firstName:i.firstName,
//                 lastName:i.lastName
             
//             }
//         )
//       }  
//     });
// console.log (stu)


// مسئله
// const number = [5 , 5]
// let plus = 0
// number.forEach(n => {
//   plus=plus+n
// });

// console.log (plus)


// مسئله
// let student = [
//     {id : 1 , firstName : 'maedeh' , lastName : 'khanzadeh' , gpa : 18 },
//     {id : 2 , firstName : 'ali' , lastName : 'sedighi' , gpa : 20},
//     {id : 3 , firstName : 'zahra' , lastName : 'moradi' , gpa : 17},
//     {id : 4 , firstName : 'mohamad' , lastName : 'namati' , gpa : 16}
// ]
// const filtered =student.filter(student=>student.gpa>=18)
  
// console.log ("gpa>=18=>",filtered)


// مسئله
// let student = [
//     {id : 1 , firstName : 'maedeh' , lastName : 'khanzadeh' , gpa : 18 },
//     {id : 2 , firstName : 'ali' , lastName : 'sedighi' , gpa : 20},
//     {id : 3 , firstName : 'zahra' , lastName : 'moradi' , gpa : 17},
//     {id : 4 , firstName : 'mohamad' , lastName : 'namati' , gpa : 16}
// ]
//  const stus = student.find((s)=>{
//     return s.id === 1
//  })
// const stu = ()=>{
//   if (stus) {
//     console.log (stus.id)
//   } else {
//     console.log(undefined)
//   }
// }
// console.log (stus)
// stu()



// مسئله
// let student = [
//     {id : 1 , firstName : 'maedeh' , lastName : 'khanzadeh' , gpa : 18 },
//     {id : 2 , firstName : 'ali' , lastName : 'sedighi' , gpa : 20},
//     {id : 3 , firstName : 'zahra' , lastName : 'moradi' , gpa : 17},
//     {id : 4 , firstName : 'mohamad' , lastName : 'namati' , gpa : 16}
// ]
// const stu = student.splice(2 , 4 , 'maedeh')
// console.log (student)



// مسئله
// let student = [
//   {id : 1 , firstName : 'maedeh' , lastName : 'khanzadeh' , gpa : 18 },
//   {id : 2 , firstName : 'ali' , lastName : 'sedighi' , gpa : 20},
//   {id : 3 , firstName : 'zahra' , lastName : 'moradi' , gpa : 17},
//   {id : 4 , firstName : 'mohamad' , lastName : 'namati' , gpa : 16}
// ]
// let aver = 0
// student.forEach(students => {
//     aver += students.gpa  
//   });
// aver = aver / student.length

// console.log ('aver=>',aver)



// مسئله 
// let number = [1,2,3,4,5,6,7,8]
// let n = 0
// number.forEach((number)=>{
//   if (number % 2 === 0) {
//     n=n+number
//   }
// })
// console.log (n)


// مسئله 
// let products = [
//     { name: 'ali', price: 1500000 },
//     { name: 'maei', price: 80000 },
//     { name: 'zary', price: 60000 },
//     { name: 'mmd', price: 300000 },
//     { name: 'leyli ', price: 50000 }
//   ];
//   let p = []
//   products.forEach((i) => {
//     if (i.price < 100000) {
//         p.push(i)
//     }
// });  
// console.log(p)


// مسئله
// let numbers = [3, 7, 4, 12, 5, 8, 10];
// let n = []
// numbers.forEach(i => {
//     if (i %2 === 0) {
//         n.push(i)
//     }
// });
// console.log (n)



// مسئله 
// let words = ["apple", "banana", "cherry", "blueberry", "strawberry"];
// let w = ''
// words.forEach((a)=> {
//     if (a.length>w.length) {
//         w=a
//     }

// });
// console.log (w)


// مسئله
// let numbers = [10, 15, 20, 25, 30];
// let x = 0
// numbers.forEach(n => {
//     if (n % 2=== 0) {
//         x += n
//     }
// });
// console.log(x)


// مسئله
// let number = -5
// function numbers(){
//     if (number > 0) {
//         console.log (true)
//     } else if (number < 0){
//         console.log (false)
//     }
//     else{
//         console.log (0)
//     }
    
// }
// numbers()


// مسئله 
// let number = 20
// function numbers (){
//     if (number %2===0) {
//         console.log (true)
//     } else {
//         console.log (false)
//     }
// }
// numbers()



// مسئله 
// let number = 5
// function numbers (){
//     if (number > 0) {
//         console.log (true)
//     }
//     else if (number < 0){
//         console.log (false)
//     }
//     else {
//         console.log (0)
//     }
// }
// numbers()



// مسئله 
// let students = [
//     {id: 1, firstName: 'maedeh', lastName: 'khanzadeh', gpa: 18},
//     {id: 2, firstName: 'ali', lastName: 'sedighi', gpa: 20},
//     {id: 3, firstName: 'zahra', lastName: 'moradi', gpa: 17},
//     {id: 4, firstName: 'mohamad', lastName: 'namati', gpa: 16}
//   ];
//   let x = 0
// students.forEach(i => {
//         x += i.gpa
// });  
// let aver = x / students.length
// console.log (aver)
// let y = students.filter(i=>i.gpa>aver)
// console.log (y)


// مسئله 
// let students = [
//     {id: 1, firstName: 'maedeh', lastName: 'khanzadeh', gpa: 18},
//     {id: 2, firstName: 'ali', lastName: 'sedighi', gpa: 20},
//     {id: 3, firstName: 'zahra', lastName: 'moradi', gpa: 17},
//     {id: 4, firstName: 'mohamad', lastName: 'namati', gpa: 16}
//   ];
// دانشجویی که بیشترین معدل را دارد
//   let x = students[1]
//   console.log (x)


// متغیر وار 
// var name1 ="ali"
// وار وقتی داخل یک فانگشن است بیرون اون فانکشن هم خوانده میشود 
// در کل که استفاده از وار زیاد مناسب نیست در برنامه نویسی



// برای اینکه ارورمون رو بعضی وقتا از بین ببریم 
// const person = {
//   fname : 'maedeh',
//   lname : 'khanzadeh',
//   get fulName(){
//     return `${person.fname} ${person.lname}`
//   },
//   set fulName(valeu){
//     const parts = valeu.split('')
//     this.fname=parts[0]
//     this.lname=parts[1]


//   }
// }
// person.fulName=true
// console.log (person)
// کد های بالا یک اروری به میدن که معنیش اینه که ولیو دات اسپلیت یک استرینگ نیست
// برای از بین بردن ارور بالا کافیه یک شرط اضافه بشه مثل کد پایین
// const person = {
//   fname : 'maedeh',
//   lname : 'khanzadeh',
//   get fulName(){
//     return `${person.fname} ${person.lname}`
//   },
//   set fulName(valeu){
//     if (typeof valeu !== 'string'){
//       return 
//     }
//     const parts = valeu.split('')
//     this.fname=parts[0]
//     this.lname=parts[1]


//   }
// }
// person.fulName=true
// console.log (person)



// متود
// bind
// میاد یک فانگشن جدید میسازه و
// this
// را به یک مقدار جدیدی ک بهش دادیم تبدیل میکنه
// function names (){
//   console.log (this)
// }
// const n = names.bind({name:'maedeh'})
// n()
// کد های بالا مقدار 
// this
// را تغییر میدهد



// اصول برنامه نویسی شی گرا
// نوع اول
// ما ر یک فانگشن اکر نخواهیم از بیرون فانکشن دسترسی داشته باشیم بهش که مقدارش را عوض کنیم یا هرچیز
// دیگر اگر برای هر یک از تعریفایی ک کردیم
// this.
// گذاشته بودیم اون قسمت هایی که نمیخواهیم تغییری از بیرون فانکشن روشون انجام بشه رو باید از
// let
// استفاده کنیم وقتی اینکار را انجام دهیم دیگر از بیرون بهش دسترسی نداریم



// وراثت
// بدون اینکه کد هامون رو کپی پیست کنیم میتونیم از اون ها استفاده کنیم
// پروتوتایپ
