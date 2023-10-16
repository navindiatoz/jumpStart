// javascript data types

// primitive
// number
// string
// boolean
// null
// undefined
//
// reference type
// object
// array
// function

// var,let,const

// let firstName = "navin";
// let last_name = "kumar";

// const age = 25;
// const age2 = "25";
// var isBengaluru = false;

// var company = null;
// company = "diatoz";

// var insured = undefined;

// const person = {
//   firstName: "Navin",
//   last_name: "kumar",
//   age: 25,
//   isBengaluru: false,
//   company: null,
//   insured: undefined,
// };

// const arr = ["sdfdf", 345, false, { name: "macklin" }, null];

// console.log(arr[3]); //index start from 0

// console.log(arr.length); //start from 1

// console.log(arr);

// if (age >= age2) {
//   console.log("greater");
// } else if (age == age2) {
//   console.log("equal");
// } else {
//   console.log("else");
// }

// console.log(person.last_name, "person details");

// const expr = "dfjsdkfjsd";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes....");
//     break;
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// for (let index = 0; index <= 10; index++) {
//   console.log(`index ${index}`);
// }

// let n = 1;

// while (n < 3) {
//     console.log(n);
//   n++;
// }
// do {
//     console.log(n);
// } while (n>2);

// console.log(n);
// Expected output: 3

// console.log("external js linking is working fine.......",person.firstName);

// reduce the duplicate code

// const bill = 1500;
// const bankAcc = 30000;

// function declaration

// function getBalance(travelMoney, distance,food) {
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
// }

// getBalance(2000, 350,43);

//named function expression

// const getBalance1= function getBalance(travelMoney, distance,food) {
//   // console.log(food);
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

//anonymous function expression

// const getBalance2 = function (travelMoney, distance,food) {
//   // console.log(food);
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

// arrow function
// const getBalance3=  (travelMoney, distance,food)=> {
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

// console.log(getBalance3(2000, 350, 435, 345, 345));

// console.log(
//   getBalance(2000, 350, 435, 345, 345, 345, 546, 5654, 56765, 756, 75)
// );

// Javascript scope
// global scope
// local scope

// let myname = "royston"; //global it will refer window
// const myname2='asjfbksjf'

// function chcekmyName() {
//   if (true) {
//     // alert(myname)
//     // const ans = prompt("are you fine?");

//     // if (ans) {
//     //  const locatiokn= location.replace('http://localhost:8080/ams-v2/assets')
//     //  console.log(locatiokn);
//     // } else {
//     // }
//     var myname = "navin";
//     console.log(myname, "myname inside if");
//     // myname = "navin";
//     // console.log(myname, "inside condition");
//   }
// }
// chcekmyName()
// console.log(myname, "myname outseide if");

// console.log(myname, "outside condition");

// for (var index = 0; index < 10; index++) {
// console.log(index,'inside scope');

// }

// console.log(index,'outside');

// DOM manipulation
// function changeColor(color) {
// console.log(color, "color");
// const idElement = document.getElementById("paraId");
// console.log(idElement, "idElement");

// console.log(idElement.innerText);
// console.log(idElement.innerHTML);

// idElement.innerHTML="NAVIN"
// idElement.innerText="NAVIN"
// idElement.innerText="<ol><li>navin</li></ol>"
// idElement.innerHTML = "<ol><li>navin</li></ol>";
// idElement.style.backgroundColor = color;
// const classElement = document.getElementsByClassName("paraClass");
// console.log(classElement[0]);

// if (color === "green") {
// idElement.className='royston'
// idElement.style.visibility = "hidden";
// idElement.style.display = "none";
// classElement[0].style.color = color;
// } else if (color === "red") {
// idElement.style.visibility="visible";
// idElement.style.visibility = "visible";
// idElement.style.display = "block";
// classElement[0].style.color = color;
// idElement.className='royston2'
// } else {
//   const container = document.getElementById("container");
//   // container.innerHTML="<p>lorem100000000000000000</p>"
//   const createEle = document.createElement("p");
//   createEle.innerText = "lorem fs sjdbkjsbcm sdbcsdbcm  cjsbcisdbiksb";

//   container.append(createEle);
//   console.log(container);
// }

// const classElement = document.getElementsByClassName('paraClass');
// console.log(classElement,'classElement');
// }

// let show = false;
// function visiblePassword() {
//   show = !show;
//   const password = document.getElementById("password");
//   console.log(password);
//   if (show) {
//     password.setAttribute("type", "text");
//   } else {
//     password.setAttribute("type", "password");
//   }
// }
// function changeClass(type) {
//   const classElement = document.getElementsByClassName("paraClass");
//   const paraClass = classElement[0].classList;

//   console.log(type);

//   switch (type) {
//     case "add":
//       paraClass.add("royston");
//       break;
//     case "remove":
//       paraClass.remove("test-1");
//       break;
//     case "contain":
//       console.log(paraClass.contains("test-1"));
//       console.log(paraClass.contains("royston"));
//       break;
//     case "toggle":
//       paraClass.toggle("active");
//       break;

//     default:
//       break;
//   }
// }

// function change(param) {
//   const home = document.getElementById("home");
//   if (param != "remove") {
//     console.log("mouse");
//     home.style.color = param;
//   } else if (param == "toggle") {
//     home.classList.toggle("active");
//   } else {
//     console.log("mouse");
//     home.style.color = "#ffff";
//   }
// }

// function changeInnerText(param) {
//   const element = document.getElementById(param);
//   element.innerText = param;

// const home = document.getElementById("home");
// const about = document.getElementById("about");
// const service = document.getElementById("service");
// const contact = document.getElementById("contact");

// switch (param) {
//   case "home":
//     home.innerText="Home"
//     break;
//   case "about":
//     about.innerText="About"
//     break;
//   case "service":
//     service.innerText="Service"
//     break;
//   case "contact":
//     contact.innerHTML="contact"
//     break;

// }
// }

// const names = new String()
// const num = new Number()
// const obj = new Object()
// const bool = new Boolean()

// console.log(names);
// console.log(num);
// console.log(obj);
// console.log(bool);

// const firstName = "  Navin";
// const last_name = "kumar   ";

// const fullname = firstName.concat(last_name);
// const isKumar = fullname.includes("kumar");
// const index = fullname.indexOf("k");

// console.log(fullname.length);
// console.log(fullname, "before");
// console.log(fullname.trim(), "after");
// console.log(fullname.trimStart(), "after");
// console.log(fullname.trimEnd(), "after");
// console.log(firstName.toString());
// console.log(fullname.toLowerCase());
// console.log(fullname.toLocaleUpperCase());

// const a = 10;
// const b = "10";

// console.log(b + a);
// console.log("navin" + "kumar");
// console.log(fullname.replace("kumar", "kkkk"));

// javascript array methods

// const products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 2,
//     title: "iPhone X",
//     description:
//       "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     price: 899,
//     discountPercentage: 17.94,
//     rating: 4.44,
//     stock: 34,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/2/1.jpg",
//       "https://i.dummyjson.com/data/products/2/2.jpg",
//       "https://i.dummyjson.com/data/products/2/3.jpg",
//       "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 3,
//     title: "Samsung Universe 9",
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     discountPercentage: 15.46,
//     rating: 4.09,
//     stock: 36,
//     brand: "Samsung",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//     images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
//   },
//   {
//     id: 4,
//     title: "OPPOF19",
//     description: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     discountPercentage: 17.91,
//     rating: 4.3,
//     stock: 123,
//     brand: "OPPO",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/4/1.jpg",
//       "https://i.dummyjson.com/data/products/4/2.jpg",
//       "https://i.dummyjson.com/data/products/4/3.jpg",
//       "https://i.dummyjson.com/data/products/4/4.jpg",
//       "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 5,
//     title: "Huawei P30",
//     description:
//       "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     price: 499,
//     discountPercentage: 10.58,
//     rating: 4.09,
//     stock: 32,
//     brand: "Huawei",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/5/1.jpg",
//       "https://i.dummyjson.com/data/products/5/2.jpg",
//       "https://i.dummyjson.com/data/products/5/3.jpg",
//     ],
//   },
//   {
//     id: 6,
//     title: "MacBook Pro",
//     description:
//       "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     price: 1749,
//     discountPercentage: 11.02,
//     rating: 4.57,
//     stock: 83,
//     brand: "Apple",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
//     images: [
//       "https://i.dummyjson.com/data/products/6/1.png",
//       "https://i.dummyjson.com/data/products/6/2.jpg",
//       "https://i.dummyjson.com/data/products/6/3.png",
//       "https://i.dummyjson.com/data/products/6/4.jpg",
//     ],
//   },
//   {
//     id: 7,
//     title: "Samsung Galaxy Book",
//     description:
//       "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     price: 1499,
//     discountPercentage: 4.15,
//     rating: 4.25,
//     stock: 50,
//     brand: "Samsung",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/7/1.jpg",
//       "https://i.dummyjson.com/data/products/7/2.jpg",
//       "https://i.dummyjson.com/data/products/7/3.jpg",
//       "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 8,
//     title: "Microsoft Surface Laptop 4",
//     description:
//       "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     price: 1499,
//     discountPercentage: 10.23,
//     rating: 4.43,
//     stock: 68,
//     brand: "Microsoft Surface",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/8/1.jpg",
//       "https://i.dummyjson.com/data/products/8/2.jpg",
//       "https://i.dummyjson.com/data/products/8/3.jpg",
//       "https://i.dummyjson.com/data/products/8/4.jpg",
//       "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 9,
//     title: "Infinix INBOOK",
//     description:
//       "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//     price: 1099,
//     discountPercentage: 11.83,
//     rating: 4.54,
//     stock: 96,
//     brand: "Infinix",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/9/1.jpg",
//       "https://i.dummyjson.com/data/products/9/2.png",
//       "https://i.dummyjson.com/data/products/9/3.png",
//       "https://i.dummyjson.com/data/products/9/4.jpg",
//       "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 10,
//     title: "HP Pavilion 15-DK1056WM",
//     description:
//       "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//     price: 1099,
//     discountPercentage: 6.18,
//     rating: 4.43,
//     stock: 89,
//     brand: "HP Pavilion",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
//     images: [
//       "https://i.dummyjson.com/data/products/10/1.jpg",
//       "https://i.dummyjson.com/data/products/10/2.jpg",
//       "https://i.dummyjson.com/data/products/10/3.jpg",
//       "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
//     ],
//   },
//   {
//     id: 11,
//     title: "perfume Oil",
//     description:
//       "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//     price: 13,
//     discountPercentage: 8.4,
//     rating: 4.26,
//     stock: 65,
//     brand: "Impression of Acqua Di Gio",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/11/1.jpg",
//       "https://i.dummyjson.com/data/products/11/2.jpg",
//       "https://i.dummyjson.com/data/products/11/3.jpg",
//       "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 12,
//     title: "Brown Perfume",
//     description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
//     price: 40,
//     discountPercentage: 15.66,
//     rating: 4,
//     stock: 52,
//     brand: "Royal_Mirage",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/12/1.jpg",
//       "https://i.dummyjson.com/data/products/12/2.jpg",
//       "https://i.dummyjson.com/data/products/12/3.png",
//       "https://i.dummyjson.com/data/products/12/4.jpg",
//       "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 13,
//     title: "Fog Scent Xpressio Perfume",
//     description:
//       "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
//     price: 13,
//     discountPercentage: 8.14,
//     rating: 4.59,
//     stock: 61,
//     brand: "Fog Scent Xpressio",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/13/1.jpg",
//       "https://i.dummyjson.com/data/products/13/2.png",
//       "https://i.dummyjson.com/data/products/13/3.jpg",
//       "https://i.dummyjson.com/data/products/13/4.jpg",
//       "https://i.dummyjson.com/data/products/13/thumbnail.webp",
//     ],
//   },
//   {
//     id: 14,
//     title: "Non-Alcoholic Concentrated Perfume Oil",
//     description:
//       "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
//     price: 120,
//     discountPercentage: 15.6,
//     rating: 4.21,
//     stock: 114,
//     brand: "Al Munakh",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/14/1.jpg",
//       "https://i.dummyjson.com/data/products/14/2.jpg",
//       "https://i.dummyjson.com/data/products/14/3.jpg",
//       "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 15,
//     title: "Eau De Perfume Spray",
//     description:
//       "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
//     price: 30,
//     discountPercentage: 10.99,
//     rating: 4.7,
//     stock: 105,
//     brand: "Lord - Al-Rehab",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/15/1.jpg",
//       "https://i.dummyjson.com/data/products/15/2.jpg",
//       "https://i.dummyjson.com/data/products/15/3.jpg",
//       "https://i.dummyjson.com/data/products/15/4.jpg",
//       "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 16,
//     title: "Hyaluronic Acid Serum",
//     description:
//       "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
//     price: 19,
//     discountPercentage: 13.31,
//     rating: 4.83,
//     stock: 110,
//     brand: "L'Oreal Paris",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/16/1.png",
//       "https://i.dummyjson.com/data/products/16/2.webp",
//       "https://i.dummyjson.com/data/products/16/3.jpg",
//       "https://i.dummyjson.com/data/products/16/4.jpg",
//       "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 17,
//     title: "Tree Oil 30ml",
//     description:
//       "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
//     price: 12,
//     discountPercentage: 4.09,
//     rating: 4.52,
//     stock: 78,
//     brand: "Hemani Tea",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/17/1.jpg",
//       "https://i.dummyjson.com/data/products/17/2.jpg",
//       "https://i.dummyjson.com/data/products/17/3.jpg",
//       "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 18,
//     title: "Oil Free Moisturizer 100ml",
//     description:
//       "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
//     price: 40,
//     discountPercentage: 13.1,
//     rating: 4.56,
//     stock: 88,
//     brand: "Dermive",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/18/1.jpg",
//       "https://i.dummyjson.com/data/products/18/2.jpg",
//       "https://i.dummyjson.com/data/products/18/3.jpg",
//       "https://i.dummyjson.com/data/products/18/4.jpg",
//       "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 19,
//     title: "Skin Beauty Serum.",
//     description:
//       "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
//     price: 46,
//     discountPercentage: 10.68,
//     rating: 4.42,
//     stock: 54,
//     brand: "ROREC White Rice",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/19/1.jpg",
//       "https://i.dummyjson.com/data/products/19/2.jpg",
//       "https://i.dummyjson.com/data/products/19/3.png",
//       "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 20,
//     title: "Freckle Treatment Cream- 15gm",
//     description:
//       "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
//     price: 70,
//     discountPercentage: 16.99,
//     rating: 4.06,
//     stock: 140,
//     brand: "Fair & Clear",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/20/1.jpg",
//       "https://i.dummyjson.com/data/products/20/2.jpg",
//       "https://i.dummyjson.com/data/products/20/3.jpg",
//       "https://i.dummyjson.com/data/products/20/4.jpg",
//       "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 21,
//     title: "- Daal Masoor 500 grams",
//     description: "Fine quality Branded Product Keep in a cool and dry place",
//     price: 20,
//     discountPercentage: 4.81,
//     rating: 4.44,
//     stock: 133,
//     brand: "Saaf & Khaas",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//     images: [
//       "https://i.dummyjson.com/data/products/21/1.png",
//       "https://i.dummyjson.com/data/products/21/2.jpg",
//       "https://i.dummyjson.com/data/products/21/3.jpg",
//     ],
//   },
//   {
//     id: 22,
//     title: "Elbow Macaroni - 400 gm",
//     description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
//     price: 14,
//     discountPercentage: 15.58,
//     rating: 4.57,
//     stock: 146,
//     brand: "Bake Parlor Big",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/22/1.jpg",
//       "https://i.dummyjson.com/data/products/22/2.jpg",
//       "https://i.dummyjson.com/data/products/22/3.jpg",
//     ],
//   },
//   {
//     id: 23,
//     title: "Orange Essence Food Flavou",
//     description:
//       "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
//     price: 14,
//     discountPercentage: 8.04,
//     rating: 4.85,
//     stock: 26,
//     brand: "Baking Food Items",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/23/1.jpg",
//       "https://i.dummyjson.com/data/products/23/2.jpg",
//       "https://i.dummyjson.com/data/products/23/3.jpg",
//       "https://i.dummyjson.com/data/products/23/4.jpg",
//       "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 24,
//     title: "cereals muesli fruit nuts",
//     description:
//       "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
//     price: 46,
//     discountPercentage: 16.8,
//     rating: 4.94,
//     stock: 113,
//     brand: "fauji",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/24/1.jpg",
//       "https://i.dummyjson.com/data/products/24/2.jpg",
//       "https://i.dummyjson.com/data/products/24/3.jpg",
//       "https://i.dummyjson.com/data/products/24/4.jpg",
//       "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 25,
//     title: "Gulab Powder 50 Gram",
//     description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
//     price: 70,
//     discountPercentage: 13.58,
//     rating: 4.87,
//     stock: 47,
//     brand: "Dry Rose",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/25/1.png",
//       "https://i.dummyjson.com/data/products/25/2.jpg",
//       "https://i.dummyjson.com/data/products/25/3.png",
//       "https://i.dummyjson.com/data/products/25/4.jpg",
//       "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 26,
//     title: "Plant Hanger For Home",
//     description:
//       "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
//     price: 41,
//     discountPercentage: 17.86,
//     rating: 4.08,
//     stock: 131,
//     brand: "Boho Decor",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/26/1.jpg",
//       "https://i.dummyjson.com/data/products/26/2.jpg",
//       "https://i.dummyjson.com/data/products/26/3.jpg",
//       "https://i.dummyjson.com/data/products/26/4.jpg",
//       "https://i.dummyjson.com/data/products/26/5.jpg",
//       "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 27,
//     title: "Flying Wooden Bird",
//     description:
//       "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
//     price: 51,
//     discountPercentage: 15.58,
//     rating: 4.41,
//     stock: 17,
//     brand: "Flying Wooden",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/27/1.jpg",
//       "https://i.dummyjson.com/data/products/27/2.jpg",
//       "https://i.dummyjson.com/data/products/27/3.jpg",
//       "https://i.dummyjson.com/data/products/27/4.jpg",
//       "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//     ],
//   },
//   {
//     id: 28,
//     title: "3D Embellishment Art Lamp",
//     description:
//       "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
//     price: 20,
//     discountPercentage: 16.49,
//     rating: 4.82,
//     stock: 54,
//     brand: "LED Lights",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/28/1.jpg",
//       "https://i.dummyjson.com/data/products/28/2.jpg",
//       "https://i.dummyjson.com/data/products/28/3.png",
//       "https://i.dummyjson.com/data/products/28/4.jpg",
//       "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 29,
//     title: "Handcraft Chinese style",
//     description:
//       "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
//     price: 60,
//     discountPercentage: 15.34,
//     rating: 4.44,
//     stock: 7,
//     brand: "luxury palace",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/29/1.jpg",
//       "https://i.dummyjson.com/data/products/29/2.jpg",
//       "https://i.dummyjson.com/data/products/29/3.webp",
//       "https://i.dummyjson.com/data/products/29/4.webp",
//       "https://i.dummyjson.com/data/products/29/thumbnail.webp",
//     ],
//   },
//   {
//     id: 30,
//     title: "Key Holder",
//     description:
//       "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//     price: 30,
//     discountPercentage: 2.92,
//     rating: 4.92,
//     stock: 54,
//     brand: "Golden",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/30/1.jpg",
//       "https://i.dummyjson.com/data/products/30/2.jpg",
//       "https://i.dummyjson.com/data/products/30/3.jpg",
//       "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
//     ],
//   },
// ];

// console.log(products, "products");
// console.log(products.length,'products');
// console.log(products, "products");

// const apple = products.filter(getAppleAcc);
// const lessPriceProducts = products.filter(isPriceLess);

// const lessPriceProducts = products.filter(function isPriceLess(product) {
//   if (product.price < 500) {
//     return product
//   }
// });

// const apple = products.filter((product) => product.brand === "Apple");

// const applewithFind = products.find((product) => product.brand === "OPPO");

// console.log(applewithFind, "applewithFind");
// console.log(apple, "apple");

// const lessPriceProducts = products.filter(
//   (product) =>
//     product.price < 600 && product.price > 500 && product.brand === "Apple"
// );

// const moreDiscount = products.filter(
//   (product) => product.discountPercentage >= 17
// );

// products.forEach((product) => {
//   if (product.discountPercentage > 15) {
//     product.discountPercentage = 90;
//   }
// });

// const productlis = products.map((product) => {
//   if (product.discountPercentage > 15) {
//     product.discountPercentage = 90;
//   }
//   return product
// });

// console.log(productlis,'productlis');
// console.log(products);
// const appleProduct = products.map((product) => {
//   if (product.discountPercentage > 17) {
//     product.discountPercentage = 90;
//   }
// });
// console.log(appleProduct, "appleProduct");

// const findIdex = products.findIndex((product) => product.brand === "Samsung");

// function getSearchResult() {
//   const inputValue = document.getElementById("search").value;
//   const result = products.filter((product) =>
//     product.title.toLowerCase().includes(inputValue.toLowerCase())
//   );
//   console.log(result, "result");
// }

// function getAppleAcc(product) {
//   if (product.brand === "Apple") {
//     return product;
//   }
// }

// function isPriceLess(product) {
//   if (product.price < 500) {
//     return product
//   }
// // }
// console.log(apple, "apples");
// console.log(lessPriceProducts, "lessPriceProducts");
// console.log(moreDiscount, "moreDiscount");

// const pro = [45, 45, 50, 10, 50, 65];

// console.log(pro.map((p) => p * 10));

// console.log(pro.lastIndexOf(50));
// console.log(pro.sort());
// const pro2 = ["Sfsd"];

// console.log(pro.includes(23));
// console.log(pro.concat(pro2));

// console.log(pro.every((p) => p > 40));

// console.log(pro.some((p) => p < 40));

// console.log(pro.fill(500,1));

// console.log(pro.indexOf(56456));

// console.log(pro.join("&"));

// pro.push(500) //add last one item
// pro.pop(); //remove last one item

// pro.unshift(500) //add start one item
// pro.shift(); //remove start one item

// console.log(pro.reduce((a, c) => a + c));

// function p(value) {
//   if (value > 40) {
//     return value;
//   }
// }

// dot notation to access obj
// console.log(obj.brand, "brand");
// bracket notation to access obj
// console.log(obj["brand"], "brand");

// for (let index = 0; index < products.length; index++) {
//   console.log(products[index]);
// }

// products.forEach((element) => {
//   console.log(element);
// });

// for loop array it wont work with object
// for (const product of products) {
//   console.log(product);
// }

// for (const iterator of obj.images) {
//   console.log(iterator);
// }

// for itrate the object
// for (const key in obj) {
//   console.log(`${key}:${obj[key]}`);
// }

// for (const index in products) {
//   // console.log(index);
//   console.log(products[index]);
// }

// const obj = {
//   id: 1,
//   title: "iPhone 9",
//   description: "An apple mobile which is nothing like apple",
//   rating: 4.69,
//   stock: 94,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
// };
// const obj2 = {
//   price: 0,
//   discountPercentage: 12.96,
// };

// Object.freeze(obj);
// Object.seal(obj)

// const pro = Object.assign(obj, obj2);

// if (obj2.price) {
//   console.log("price is present");
// } else{
//   console.log("price is not present");
// }
// console.log(obj2.hasOwnProperty('price'));
// console.log(Object.hasOwn(obj2,'price'));

// if(Object.hasOwn(obj2, "price")){
//   console.log("price is present");
// }

// console.log(obj);
// console.log(pro);
// const classOb = new Object();
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// falsy
// false
// 0
// ""
// null
// undefined
// NaN

// with one parameter
// const weddingFun = (food) => {
//   console.log(food);
// };
// const weddingFun = food => {
//   const modify = `$ Dum ${food}`;

//   console.log(food);
// };
// const weddingFun = food =>  console.log(food);

// two paramters

// Default parameters

// const weddingFun = (food, music = "U1") => {
//   const modify = `Dum ${food}`;
//   console.log(modify, music);
// };

// weddingFun("briyani");

// object Destructuring
// const { images, brand, category,price } = obj;
// console.log(obj.images,'normal');
// console.log(images,'des');
// console.log(brand,category,price);

// spread opertator
// const pro = { ...obj, ...obj2 };

// Classes
// var name = "";
// var location = "";

// function parent(na, loc) {
//   name = na;
//   location = loc;
// }
// console.log(parent('navin','chennai'));

// class Parent {
//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//   }

//   getName() {
//     return this.name;
//   }

//   getLocation() {
//     return this.location;
//   }

//   getFullDetails() {
//     return `Name: ${this.name} Location:${this.location}`;
//   }
// }

// class Child extends Parent {
//   constructor(name, location, job) {
//     super(name, location);
//     this.job = job;
//   }
//   getDetails() {
//     return `Name: ${this.name} Location:${this.location} Job:${this.job}`;
//   }
// }

// const Macklin = new Child("jaison", "mengalure", "software");
// console.log(Macklin.getLocation());

// const notunique = [12, 34, 665, 678, 9, 12, 34, 12];

// console.log(Math.min(...notunique));
// console.log(Math.max(...notunique));
// console.log(Math.random());
// console.log(Math.floor(5.6));
// console.log(Math.round(5.4));

// const unique = new Set(notunique);

// console.log(notunique);
// console.log(unique);

// const fruits = new Map([
//   ["0", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// const obj2 = {
//   price: 0,
//   discountPercentage: 12.96,
// };

// console.log(fruits);

// const Navin = new Parent("raj", "trichy");
// const Macklin = new Parent("jaison", "mengalure");

// console.log(Navin.name);
// console.log(Navin.getLocation());
// console.log(Macklin.getFullDetails());

// rest operator

// const weddingFun = (food, music = "U1", ...rest) => {
//   const modify = `Dum ${food}`;
//   console.log(modify, music, rest);
// };
// weddingFun("briyani", "Ar", 34, "5446", { name: "navin" });

// Enhanced Object Literals
// function getMobile(manufacturer, model, year) {
// return {
//   manufacturer: manufacturer,
//   model: model,
//   year: year,
// };
// return {
//   manufacturer,
//   model,
//   year,
// };
// }
// const result = getMobile("Samsung", "Galaxy", "2020");

// console.log(result, "result");

// function getName() {
//   console.log("royston");
// }
// function getLocation() {
//   console.log("Mengaluru");
// }
// function getJobRole() {
//   console.log("Software developer");
// }

// sync
// getName();
// getJobRole();
// getLocation();

// async
// getName();
// setTimeout(() => {
//   getJobRole();
// }, 3000);

// getLocation();
// to convert json string into js object  JSON.parse(xhr.responseText)  ===> to convert js object to json string JSON.Stringfy(xhr.responseText)
// get,'post,'put,'delete
// function getAllProducts() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://dummyjson.com/products");
//   xhr.onload = () => {
//     console.log(xhr, "xhr===========================>");
//     if (xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       const productCardContainer = document.getElementById("productCards");

//       data.products.forEach((product) => {
//         const card = createProductCard(product);
//         productCardContainer.appendChild(card);
//       });

//     } else {
//       console.error(`Error: ${xhr.status}`);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Request error");
//   };
//   xhr.send();
// }

// function getAllProductsPromises() {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       const productCardContainer = document.getElementById("productCards");
//       data.products.forEach((product) => {
//         const card = createProductCard(product);
//         productCardContainer.appendChild(card);
//       });
//     })
//     .catch((error) => {
//       const productCardContainer = document.getElementById("productCards");
//       productCardContainer.innerText =
//         "Something went wrong!.. try again later....";
//       console.log(error);
//     });
// }

async function getAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
  
      const data = await response.json();
      const productCardContainer = document.getElementById("productCards");
  
      console.log(data.products);
  
      data.products.forEach((product) => {
        const card = createProductCard(product);
        productCardContainer.appendChild(card);
      });
    } catch (error) {
      const productCardContainer = document.getElementById("productCards");
      productCardContainer.innerText =
        "Something went wrong!.. try again later....";
      console.error("Error:", error);
      throw error;
    }
  }
  
  function createProductCard({
    title,
    price,
    description,
    category,
    thumbnail,
    rating,
  }) {
    const card = document.createElement("div");
    card.className = "p-3 col-md-4";
    card.innerHTML = `<div class="cart card h-100">
    <img src="${thumbnail}" alt="${title}" class="card-img-top mb-2  border-bottom"/>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h5 class="card-title">${category}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${price}</p>
      <p class="card-text">${rating}</p>
    </div>
  </div>`;
    return card;
  }
  
  // const demo = new Promise((resolve, reject) => {
  //   const ans = prompt("reject..? ");
  //   if (ans) {
  //     resolve(ans);
  //   } else {
  //     reject(ans);
  //   }
  // });
  
  // demo.then((res) => {
  //   console.log(res,'resolve');
  // });
  // demo.catch(error=>{
  //   console.log(error,'reject');
  // })
  // demo.finally(final=>{
  //   console.log(final,'final');
  // })
// javascript data types

// primitive
// number
// string
// boolean
// null
// undefined
//
// reference type
// object
// array
// function

// var,let,const

// let firstName = "navin";
// let last_name = "kumar";

// const age = 25;
// const age2 = "25";
// var isBengaluru = false;

// var company = null;
// company = "diatoz";

// var insured = undefined;

// const person = {
//   firstName: "Navin",
//   last_name: "kumar",
//   age: 25,
//   isBengaluru: false,
//   company: null,
//   insured: undefined,
// };

// const arr = ["sdfdf", 345, false, { name: "macklin" }, null];

// console.log(arr[3]); //index start from 0

// console.log(arr.length); //start from 1

// console.log(arr);

// if (age >= age2) {
//   console.log("greater");
// } else if (age == age2) {
//   console.log("equal");
// } else {
//   console.log("else");
// }

// console.log(person.last_name, "person details");

// const expr = "dfjsdkfjsd";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes....");
//     break;
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// for (let index = 0; index <= 10; index++) {
//   console.log(`index ${index}`);
// }

// let n = 1;

// while (n < 3) {
//     console.log(n);
//   n++;
// }
// do {
//     console.log(n);
// } while (n>2);

// console.log(n);
// Expected output: 3

// console.log("external js linking is working fine.......",person.firstName);

// reduce the duplicate code

// const bill = 1500;
// const bankAcc = 30000;

// function declaration

// function getBalance(travelMoney, distance,food) {
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
// }

// getBalance(2000, 350,43);

//named function expression

// const getBalance1= function getBalance(travelMoney, distance,food) {
//   // console.log(food);
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

//anonymous function expression

// const getBalance2 = function (travelMoney, distance,food) {
//   // console.log(food);
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

// arrow function
// const getBalance3=  (travelMoney, distance,food)=> {
//   console.log(`${bankAcc - bill - travelMoney - distance}`);
//   return bankAcc - bill - travelMoney - distance
// }

// console.log(getBalance3(2000, 350, 435, 345, 345));

// console.log(
//   getBalance(2000, 350, 435, 345, 345, 345, 546, 5654, 56765, 756, 75)
// );

// Javascript scope
// global scope
// local scope

// let myname = "royston"; //global it will refer window
// const myname2='asjfbksjf'

// function chcekmyName() {
//   if (true) {
//     // alert(myname)
//     // const ans = prompt("are you fine?");

//     // if (ans) {
//     //  const locatiokn= location.replace('http://localhost:8080/ams-v2/assets')
//     //  console.log(locatiokn);
//     // } else {
//     // }
//     var myname = "navin";
//     console.log(myname, "myname inside if");
//     // myname = "navin";
//     // console.log(myname, "inside condition");
//   }
// }
// chcekmyName()
// console.log(myname, "myname outseide if");

// console.log(myname, "outside condition");

// for (var index = 0; index < 10; index++) {
// console.log(index,'inside scope');

// }

// console.log(index,'outside');

// DOM manipulation
// function changeColor(color) {
// console.log(color, "color");
// const idElement = document.getElementById("paraId");
// console.log(idElement, "idElement");

// console.log(idElement.innerText);
// console.log(idElement.innerHTML);

// idElement.innerHTML="NAVIN"
// idElement.innerText="NAVIN"
// idElement.innerText="<ol><li>navin</li></ol>"
// idElement.innerHTML = "<ol><li>navin</li></ol>";
// idElement.style.backgroundColor = color;
// const classElement = document.getElementsByClassName("paraClass");
// console.log(classElement[0]);

// if (color === "green") {
// idElement.className='royston'
// idElement.style.visibility = "hidden";
// idElement.style.display = "none";
// classElement[0].style.color = color;
// } else if (color === "red") {
// idElement.style.visibility="visible";
// idElement.style.visibility = "visible";
// idElement.style.display = "block";
// classElement[0].style.color = color;
// idElement.className='royston2'
// } else {
//   const container = document.getElementById("container");
//   // container.innerHTML="<p>lorem100000000000000000</p>"
//   const createEle = document.createElement("p");
//   createEle.innerText = "lorem fs sjdbkjsbcm sdbcsdbcm  cjsbcisdbiksb";

//   container.append(createEle);
//   console.log(container);
// }

// const classElement = document.getElementsByClassName('paraClass');
// console.log(classElement,'classElement');
// }

// let show = false;
// function visiblePassword() {
//   show = !show;
//   const password = document.getElementById("password");
//   console.log(password);
//   if (show) {
//     password.setAttribute("type", "text");
//   } else {
//     password.setAttribute("type", "password");
//   }
// }
// function changeClass(type) {
//   const classElement = document.getElementsByClassName("paraClass");
//   const paraClass = classElement[0].classList;

//   console.log(type);

//   switch (type) {
//     case "add":
//       paraClass.add("royston");
//       break;
//     case "remove":
//       paraClass.remove("test-1");
//       break;
//     case "contain":
//       console.log(paraClass.contains("test-1"));
//       console.log(paraClass.contains("royston"));
//       break;
//     case "toggle":
//       paraClass.toggle("active");
//       break;

//     default:
//       break;
//   }
// }

// function change(param) {
//   const home = document.getElementById("home");
//   if (param != "remove") {
//     console.log("mouse");
//     home.style.color = param;
//   } else if (param == "toggle") {
//     home.classList.toggle("active");
//   } else {
//     console.log("mouse");
//     home.style.color = "#ffff";
//   }
// }

// function changeInnerText(param) {
//   const element = document.getElementById(param);
//   element.innerText = param;

// const home = document.getElementById("home");
// const about = document.getElementById("about");
// const service = document.getElementById("service");
// const contact = document.getElementById("contact");

// switch (param) {
//   case "home":
//     home.innerText="Home"
//     break;
//   case "about":
//     about.innerText="About"
//     break;
//   case "service":
//     service.innerText="Service"
//     break;
//   case "contact":
//     contact.innerHTML="contact"
//     break;

// }
// }

// const names = new String()
// const num = new Number()
// const obj = new Object()
// const bool = new Boolean()

// console.log(names);
// console.log(num);
// console.log(obj);
// console.log(bool);

// const firstName = "  Navin";
// const last_name = "kumar   ";

// const fullname = firstName.concat(last_name);
// const isKumar = fullname.includes("kumar");
// const index = fullname.indexOf("k");

// console.log(fullname.length);
// console.log(fullname, "before");
// console.log(fullname.trim(), "after");
// console.log(fullname.trimStart(), "after");
// console.log(fullname.trimEnd(), "after");
// console.log(firstName.toString());
// console.log(fullname.toLowerCase());
// console.log(fullname.toLocaleUpperCase());

// const a = 10;
// const b = "10";

// console.log(b + a);
// console.log("navin" + "kumar");
// console.log(fullname.replace("kumar", "kkkk"));

// javascript array methods

// const products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 2,
//     title: "iPhone X",
//     description:
//       "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     price: 899,
//     discountPercentage: 17.94,
//     rating: 4.44,
//     stock: 34,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/2/1.jpg",
//       "https://i.dummyjson.com/data/products/2/2.jpg",
//       "https://i.dummyjson.com/data/products/2/3.jpg",
//       "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 3,
//     title: "Samsung Universe 9",
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     discountPercentage: 15.46,
//     rating: 4.09,
//     stock: 36,
//     brand: "Samsung",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//     images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
//   },
//   {
//     id: 4,
//     title: "OPPOF19",
//     description: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     discountPercentage: 17.91,
//     rating: 4.3,
//     stock: 123,
//     brand: "OPPO",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/4/1.jpg",
//       "https://i.dummyjson.com/data/products/4/2.jpg",
//       "https://i.dummyjson.com/data/products/4/3.jpg",
//       "https://i.dummyjson.com/data/products/4/4.jpg",
//       "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 5,
//     title: "Huawei P30",
//     description:
//       "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     price: 499,
//     discountPercentage: 10.58,
//     rating: 4.09,
//     stock: 32,
//     brand: "Huawei",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/5/1.jpg",
//       "https://i.dummyjson.com/data/products/5/2.jpg",
//       "https://i.dummyjson.com/data/products/5/3.jpg",
//     ],
//   },
//   {
//     id: 6,
//     title: "MacBook Pro",
//     description:
//       "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     price: 1749,
//     discountPercentage: 11.02,
//     rating: 4.57,
//     stock: 83,
//     brand: "Apple",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
//     images: [
//       "https://i.dummyjson.com/data/products/6/1.png",
//       "https://i.dummyjson.com/data/products/6/2.jpg",
//       "https://i.dummyjson.com/data/products/6/3.png",
//       "https://i.dummyjson.com/data/products/6/4.jpg",
//     ],
//   },
//   {
//     id: 7,
//     title: "Samsung Galaxy Book",
//     description:
//       "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     price: 1499,
//     discountPercentage: 4.15,
//     rating: 4.25,
//     stock: 50,
//     brand: "Samsung",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/7/1.jpg",
//       "https://i.dummyjson.com/data/products/7/2.jpg",
//       "https://i.dummyjson.com/data/products/7/3.jpg",
//       "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 8,
//     title: "Microsoft Surface Laptop 4",
//     description:
//       "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     price: 1499,
//     discountPercentage: 10.23,
//     rating: 4.43,
//     stock: 68,
//     brand: "Microsoft Surface",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/8/1.jpg",
//       "https://i.dummyjson.com/data/products/8/2.jpg",
//       "https://i.dummyjson.com/data/products/8/3.jpg",
//       "https://i.dummyjson.com/data/products/8/4.jpg",
//       "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 9,
//     title: "Infinix INBOOK",
//     description:
//       "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//     price: 1099,
//     discountPercentage: 11.83,
//     rating: 4.54,
//     stock: 96,
//     brand: "Infinix",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/9/1.jpg",
//       "https://i.dummyjson.com/data/products/9/2.png",
//       "https://i.dummyjson.com/data/products/9/3.png",
//       "https://i.dummyjson.com/data/products/9/4.jpg",
//       "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 10,
//     title: "HP Pavilion 15-DK1056WM",
//     description:
//       "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//     price: 1099,
//     discountPercentage: 6.18,
//     rating: 4.43,
//     stock: 89,
//     brand: "HP Pavilion",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
//     images: [
//       "https://i.dummyjson.com/data/products/10/1.jpg",
//       "https://i.dummyjson.com/data/products/10/2.jpg",
//       "https://i.dummyjson.com/data/products/10/3.jpg",
//       "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
//     ],
//   },
//   {
//     id: 11,
//     title: "perfume Oil",
//     description:
//       "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//     price: 13,
//     discountPercentage: 8.4,
//     rating: 4.26,
//     stock: 65,
//     brand: "Impression of Acqua Di Gio",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/11/1.jpg",
//       "https://i.dummyjson.com/data/products/11/2.jpg",
//       "https://i.dummyjson.com/data/products/11/3.jpg",
//       "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 12,
//     title: "Brown Perfume",
//     description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
//     price: 40,
//     discountPercentage: 15.66,
//     rating: 4,
//     stock: 52,
//     brand: "Royal_Mirage",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/12/1.jpg",
//       "https://i.dummyjson.com/data/products/12/2.jpg",
//       "https://i.dummyjson.com/data/products/12/3.png",
//       "https://i.dummyjson.com/data/products/12/4.jpg",
//       "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 13,
//     title: "Fog Scent Xpressio Perfume",
//     description:
//       "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
//     price: 13,
//     discountPercentage: 8.14,
//     rating: 4.59,
//     stock: 61,
//     brand: "Fog Scent Xpressio",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/13/1.jpg",
//       "https://i.dummyjson.com/data/products/13/2.png",
//       "https://i.dummyjson.com/data/products/13/3.jpg",
//       "https://i.dummyjson.com/data/products/13/4.jpg",
//       "https://i.dummyjson.com/data/products/13/thumbnail.webp",
//     ],
//   },
//   {
//     id: 14,
//     title: "Non-Alcoholic Concentrated Perfume Oil",
//     description:
//       "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
//     price: 120,
//     discountPercentage: 15.6,
//     rating: 4.21,
//     stock: 114,
//     brand: "Al Munakh",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/14/1.jpg",
//       "https://i.dummyjson.com/data/products/14/2.jpg",
//       "https://i.dummyjson.com/data/products/14/3.jpg",
//       "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 15,
//     title: "Eau De Perfume Spray",
//     description:
//       "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
//     price: 30,
//     discountPercentage: 10.99,
//     rating: 4.7,
//     stock: 105,
//     brand: "Lord - Al-Rehab",
//     category: "fragrances",
//     thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/15/1.jpg",
//       "https://i.dummyjson.com/data/products/15/2.jpg",
//       "https://i.dummyjson.com/data/products/15/3.jpg",
//       "https://i.dummyjson.com/data/products/15/4.jpg",
//       "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 16,
//     title: "Hyaluronic Acid Serum",
//     description:
//       "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
//     price: 19,
//     discountPercentage: 13.31,
//     rating: 4.83,
//     stock: 110,
//     brand: "L'Oreal Paris",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/16/1.png",
//       "https://i.dummyjson.com/data/products/16/2.webp",
//       "https://i.dummyjson.com/data/products/16/3.jpg",
//       "https://i.dummyjson.com/data/products/16/4.jpg",
//       "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 17,
//     title: "Tree Oil 30ml",
//     description:
//       "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
//     price: 12,
//     discountPercentage: 4.09,
//     rating: 4.52,
//     stock: 78,
//     brand: "Hemani Tea",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/17/1.jpg",
//       "https://i.dummyjson.com/data/products/17/2.jpg",
//       "https://i.dummyjson.com/data/products/17/3.jpg",
//       "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 18,
//     title: "Oil Free Moisturizer 100ml",
//     description:
//       "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
//     price: 40,
//     discountPercentage: 13.1,
//     rating: 4.56,
//     stock: 88,
//     brand: "Dermive",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/18/1.jpg",
//       "https://i.dummyjson.com/data/products/18/2.jpg",
//       "https://i.dummyjson.com/data/products/18/3.jpg",
//       "https://i.dummyjson.com/data/products/18/4.jpg",
//       "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 19,
//     title: "Skin Beauty Serum.",
//     description:
//       "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
//     price: 46,
//     discountPercentage: 10.68,
//     rating: 4.42,
//     stock: 54,
//     brand: "ROREC White Rice",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/19/1.jpg",
//       "https://i.dummyjson.com/data/products/19/2.jpg",
//       "https://i.dummyjson.com/data/products/19/3.png",
//       "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 20,
//     title: "Freckle Treatment Cream- 15gm",
//     description:
//       "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
//     price: 70,
//     discountPercentage: 16.99,
//     rating: 4.06,
//     stock: 140,
//     brand: "Fair & Clear",
//     category: "skincare",
//     thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/20/1.jpg",
//       "https://i.dummyjson.com/data/products/20/2.jpg",
//       "https://i.dummyjson.com/data/products/20/3.jpg",
//       "https://i.dummyjson.com/data/products/20/4.jpg",
//       "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 21,
//     title: "- Daal Masoor 500 grams",
//     description: "Fine quality Branded Product Keep in a cool and dry place",
//     price: 20,
//     discountPercentage: 4.81,
//     rating: 4.44,
//     stock: 133,
//     brand: "Saaf & Khaas",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//     images: [
//       "https://i.dummyjson.com/data/products/21/1.png",
//       "https://i.dummyjson.com/data/products/21/2.jpg",
//       "https://i.dummyjson.com/data/products/21/3.jpg",
//     ],
//   },
//   {
//     id: 22,
//     title: "Elbow Macaroni - 400 gm",
//     description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
//     price: 14,
//     discountPercentage: 15.58,
//     rating: 4.57,
//     stock: 146,
//     brand: "Bake Parlor Big",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/22/1.jpg",
//       "https://i.dummyjson.com/data/products/22/2.jpg",
//       "https://i.dummyjson.com/data/products/22/3.jpg",
//     ],
//   },
//   {
//     id: 23,
//     title: "Orange Essence Food Flavou",
//     description:
//       "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
//     price: 14,
//     discountPercentage: 8.04,
//     rating: 4.85,
//     stock: 26,
//     brand: "Baking Food Items",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/23/1.jpg",
//       "https://i.dummyjson.com/data/products/23/2.jpg",
//       "https://i.dummyjson.com/data/products/23/3.jpg",
//       "https://i.dummyjson.com/data/products/23/4.jpg",
//       "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 24,
//     title: "cereals muesli fruit nuts",
//     description:
//       "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
//     price: 46,
//     discountPercentage: 16.8,
//     rating: 4.94,
//     stock: 113,
//     brand: "fauji",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/24/1.jpg",
//       "https://i.dummyjson.com/data/products/24/2.jpg",
//       "https://i.dummyjson.com/data/products/24/3.jpg",
//       "https://i.dummyjson.com/data/products/24/4.jpg",
//       "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 25,
//     title: "Gulab Powder 50 Gram",
//     description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
//     price: 70,
//     discountPercentage: 13.58,
//     rating: 4.87,
//     stock: 47,
//     brand: "Dry Rose",
//     category: "groceries",
//     thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/25/1.png",
//       "https://i.dummyjson.com/data/products/25/2.jpg",
//       "https://i.dummyjson.com/data/products/25/3.png",
//       "https://i.dummyjson.com/data/products/25/4.jpg",
//       "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 26,
//     title: "Plant Hanger For Home",
//     description:
//       "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
//     price: 41,
//     discountPercentage: 17.86,
//     rating: 4.08,
//     stock: 131,
//     brand: "Boho Decor",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/26/1.jpg",
//       "https://i.dummyjson.com/data/products/26/2.jpg",
//       "https://i.dummyjson.com/data/products/26/3.jpg",
//       "https://i.dummyjson.com/data/products/26/4.jpg",
//       "https://i.dummyjson.com/data/products/26/5.jpg",
//       "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 27,
//     title: "Flying Wooden Bird",
//     description:
//       "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
//     price: 51,
//     discountPercentage: 15.58,
//     rating: 4.41,
//     stock: 17,
//     brand: "Flying Wooden",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/27/1.jpg",
//       "https://i.dummyjson.com/data/products/27/2.jpg",
//       "https://i.dummyjson.com/data/products/27/3.jpg",
//       "https://i.dummyjson.com/data/products/27/4.jpg",
//       "https://i.dummyjson.com/data/products/27/thumbnail.webp",
//     ],
//   },
//   {
//     id: 28,
//     title: "3D Embellishment Art Lamp",
//     description:
//       "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
//     price: 20,
//     discountPercentage: 16.49,
//     rating: 4.82,
//     stock: 54,
//     brand: "LED Lights",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/28/1.jpg",
//       "https://i.dummyjson.com/data/products/28/2.jpg",
//       "https://i.dummyjson.com/data/products/28/3.png",
//       "https://i.dummyjson.com/data/products/28/4.jpg",
//       "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 29,
//     title: "Handcraft Chinese style",
//     description:
//       "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
//     price: 60,
//     discountPercentage: 15.34,
//     rating: 4.44,
//     stock: 7,
//     brand: "luxury palace",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
//     images: [
//       "https://i.dummyjson.com/data/products/29/1.jpg",
//       "https://i.dummyjson.com/data/products/29/2.jpg",
//       "https://i.dummyjson.com/data/products/29/3.webp",
//       "https://i.dummyjson.com/data/products/29/4.webp",
//       "https://i.dummyjson.com/data/products/29/thumbnail.webp",
//     ],
//   },
//   {
//     id: 30,
//     title: "Key Holder",
//     description:
//       "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//     price: 30,
//     discountPercentage: 2.92,
//     rating: 4.92,
//     stock: 54,
//     brand: "Golden",
//     category: "home-decoration",
//     thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/30/1.jpg",
//       "https://i.dummyjson.com/data/products/30/2.jpg",
//       "https://i.dummyjson.com/data/products/30/3.jpg",
//       "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
//     ],
//   },
// ];

// console.log(products, "products");
// console.log(products.length,'products');
// console.log(products, "products");

// const apple = products.filter(getAppleAcc);
// const lessPriceProducts = products.filter(isPriceLess);

// const lessPriceProducts = products.filter(function isPriceLess(product) {
//   if (product.price < 500) {
//     return product
//   }
// });

// const apple = products.filter((product) => product.brand === "Apple");

// const applewithFind = products.find((product) => product.brand === "OPPO");

// console.log(applewithFind, "applewithFind");
// console.log(apple, "apple");

// const lessPriceProducts = products.filter(
//   (product) =>
//     product.price < 600 && product.price > 500 && product.brand === "Apple"
// );

// const moreDiscount = products.filter(
//   (product) => product.discountPercentage >= 17
// );

// products.forEach((product) => {
//   if (product.discountPercentage > 15) {
//     product.discountPercentage = 90;
//   }
// });

// const productlis = products.map((product) => {
//   if (product.discountPercentage > 15) {
//     product.discountPercentage = 90;
//   }
//   return product
// });

// console.log(productlis,'productlis');
// console.log(products);
// const appleProduct = products.map((product) => {
//   if (product.discountPercentage > 17) {
//     product.discountPercentage = 90;
//   }
// });
// console.log(appleProduct, "appleProduct");

// const findIdex = products.findIndex((product) => product.brand === "Samsung");

// function getSearchResult() {
//   const inputValue = document.getElementById("search").value;
//   const result = products.filter((product) =>
//     product.title.toLowerCase().includes(inputValue.toLowerCase())
//   );
//   console.log(result, "result");
// }

// function getAppleAcc(product) {
//   if (product.brand === "Apple") {
//     return product;
//   }
// }

// function isPriceLess(product) {
//   if (product.price < 500) {
//     return product
//   }
// // }
// console.log(apple, "apples");
// console.log(lessPriceProducts, "lessPriceProducts");
// console.log(moreDiscount, "moreDiscount");

// const pro = [45, 45, 50, 10, 50, 65];

// console.log(pro.map((p) => p * 10));

// console.log(pro.lastIndexOf(50));
// console.log(pro.sort());
// const pro2 = ["Sfsd"];

// console.log(pro.includes(23));
// console.log(pro.concat(pro2));

// console.log(pro.every((p) => p > 40));

// console.log(pro.some((p) => p < 40));

// console.log(pro.fill(500,1));

// console.log(pro.indexOf(56456));

// console.log(pro.join("&"));

// pro.push(500) //add last one item
// pro.pop(); //remove last one item

// pro.unshift(500) //add start one item
// pro.shift(); //remove start one item

// console.log(pro.reduce((a, c) => a + c));

// function p(value) {
//   if (value > 40) {
//     return value;
//   }
// }

// dot notation to access obj
// console.log(obj.brand, "brand");
// bracket notation to access obj
// console.log(obj["brand"], "brand");

// for (let index = 0; index < products.length; index++) {
//   console.log(products[index]);
// }

// products.forEach((element) => {
//   console.log(element);
// });

// for loop array it wont work with object
// for (const product of products) {
//   console.log(product);
// }

// for (const iterator of obj.images) {
//   console.log(iterator);
// }

// for itrate the object
// for (const key in obj) {
//   console.log(`${key}:${obj[key]}`);
// }

// for (const index in products) {
//   // console.log(index);
//   console.log(products[index]);
// }

// const obj = {
//   id: 1,
//   title: "iPhone 9",
//   description: "An apple mobile which is nothing like apple",
//   rating: 4.69,
//   stock: 94,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
// };
// const obj2 = {
//   price: 0,
//   discountPercentage: 12.96,
// };

// Object.freeze(obj);
// Object.seal(obj)

// const pro = Object.assign(obj, obj2);

// if (obj2.price) {
//   console.log("price is present");
// } else{
//   console.log("price is not present");
// }
// console.log(obj2.hasOwnProperty('price'));
// console.log(Object.hasOwn(obj2,'price'));

// if(Object.hasOwn(obj2, "price")){
//   console.log("price is present");
// }

// console.log(obj);
// console.log(pro);
// const classOb = new Object();
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// falsy
// false
// 0
// ""
// null
// undefined
// NaN

// with one parameter
// const weddingFun = (food) => {
//   console.log(food);
// };
// const weddingFun = food => {
//   const modify = `$ Dum ${food}`;

//   console.log(food);
// };
// const weddingFun = food =>  console.log(food);

// two paramters

// Default parameters

// const weddingFun = (food, music = "U1") => {
//   const modify = `Dum ${food}`;
//   console.log(modify, music);
// };

// weddingFun("briyani");

// object Destructuring
// const { images, brand, category,price } = obj;
// console.log(obj.images,'normal');
// console.log(images,'des');
// console.log(brand,category,price);

// spread opertator
// const pro = { ...obj, ...obj2 };

// Classes
// var name = "";
// var location = "";

// function parent(na, loc) {
//   name = na;
//   location = loc;
// }
// console.log(parent('navin','chennai'));

// class Parent {
//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//   }

//   getName() {
//     return this.name;
//   }

//   getLocation() {
//     return this.location;
//   }

//   getFullDetails() {
//     return `Name: ${this.name} Location:${this.location}`;
//   }
// }

// class Child extends Parent {
//   constructor(name, location, job) {
//     super(name, location);
//     this.job = job;
//   }
//   getDetails() {
//     return `Name: ${this.name} Location:${this.location} Job:${this.job}`;
//   }
// }

// const Macklin = new Child("jaison", "mengalure", "software");
// console.log(Macklin.getLocation());

// const notunique = [12, 34, 665, 678, 9, 12, 34, 12];

// console.log(Math.min(...notunique));
// console.log(Math.max(...notunique));
// console.log(Math.random());
// console.log(Math.floor(5.6));
// console.log(Math.round(5.4));

// const unique = new Set(notunique);

// console.log(notunique);
// console.log(unique);

// const fruits = new Map([
//   ["0", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// const obj2 = {
//   price: 0,
//   discountPercentage: 12.96,
// };

// console.log(fruits);

// const Navin = new Parent("raj", "trichy");
// const Macklin = new Parent("jaison", "mengalure");

// console.log(Navin.name);
// console.log(Navin.getLocation());
// console.log(Macklin.getFullDetails());

// rest operator

// const weddingFun = (food, music = "U1", ...rest) => {
//   const modify = `Dum ${food}`;
//   console.log(modify, music, rest);
// };
// weddingFun("briyani", "Ar", 34, "5446", { name: "navin" });

// Enhanced Object Literals
// function getMobile(manufacturer, model, year) {
// return {
//   manufacturer: manufacturer,
//   model: model,
//   year: year,
// };
// return {
//   manufacturer,
//   model,
//   year,
// };
// }
// const result = getMobile("Samsung", "Galaxy", "2020");

// console.log(result, "result");

// function getName() {
//   console.log("royston");
// }
// function getLocation() {
//   console.log("Mengaluru");
// }
// function getJobRole() {
//   console.log("Software developer");
// }

// sync
// getName();
// getJobRole();
// getLocation();

// async
// getName();
// setTimeout(() => {
//   getJobRole();
// }, 3000);

// getLocation();
// to convert json string into js object  JSON.parse(xhr.responseText)  ===> to convert js object to json string JSON.Stringfy(xhr.responseText)
// get,'post,'put,'delete
// function getAllProducts() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://dummyjson.com/products");
//   xhr.onload = () => {
//     console.log(xhr, "xhr===========================>");
//     if (xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       const productCardContainer = document.getElementById("productCards");

//       data.products.forEach((product) => {
//         const card = createProductCard(product);
//         productCardContainer.appendChild(card);
//       });

//     } else {
//       console.error(`Error: ${xhr.status}`);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Request error");
//   };
//   xhr.send();
// }

// function getAllProductsPromises() {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       const productCardContainer = document.getElementById("productCards");
//       data.products.forEach((product) => {
//         const card = createProductCard(product);
//         productCardContainer.appendChild(card);
//       });
//     })
//     .catch((error) => {
//       const productCardContainer = document.getElementById("productCards");
//       productCardContainer.innerText =
//         "Something went wrong!.. try again later....";
//       console.log(error);
//     });
// }

async function getAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
  
      const data = await response.json();
      const productCardContainer = document.getElementById("productCards");
  
      console.log(data.products);
  
      data.products.forEach((product) => {
        const card = createProductCard(product);
        productCardContainer.appendChild(card);
      });
    } catch (error) {
      const productCardContainer = document.getElementById("productCards");
      productCardContainer.innerText =
        "Something went wrong!.. try again later....";
      console.error("Error:", error);
      throw error;
    }
  }
  
  function createProductCard({
    title,
    price,
    description,
    category,
    thumbnail,
    rating,
  }) {
    const card = document.createElement("div");
    card.className = "p-3 col-md-4";
    card.innerHTML = `<div class="cart card h-100">
    <img src="${thumbnail}" alt="${title}" class="card-img-top mb-2  border-bottom"/>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h5 class="card-title">${category}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${price}</p>
      <p class="card-text">${rating}</p>
    </div>
  </div>`;
    return card;
  }
  
  // const demo = new Promise((resolve, reject) => {
  //   const ans = prompt("reject..? ");
  //   if (ans) {
  //     resolve(ans);
  //   } else {
  //     reject(ans);
  //   }
  // });
  
  // demo.then((res) => {
  //   console.log(res,'resolve');
  // });
  // demo.catch(error=>{
  //   console.log(error,'reject');
  // })
  // demo.finally(final=>{
  //   console.log(final,'final');
  // })
    