let a=4
let b=2
let c=5
let d= 1
let e = 6
let f=7
console.log(a+b+c+d+e+f);
let sum=a+b+c+d+e+f;
console.log(sum/6);

let p=815
let r=9
let t=3
let simple=p*(1+(r*t))
console.log(simple);
let First_name= "aditya"
let last_name="pal"
console.log(typeof(First_name));
console.log(typeof(t));
console.log(First_name.length);
console.log(First_name.toUpperCase())
console.log(First_name.toLowerCase())

console.log(First_name.concat(last_name));


// Trim is used to trim the white spaces from both end

console.log(last_name.trim())
console.log(last_name.charAt(2));

console.log(First_name.substring(3,7))

let str ="Hello, I am learning Full Stack Development";
console.log(str.length);

let str1 = "Hello Everyone, My name is ";
let str2 = "I am learning Full Stack Development to become a certified Full Stack Developer";

console.log(str1.concat(str2));

let str3 = "Learning JavaScript is very easy and fun";
console.log(str3.substring(0,11));


let str4= "First I learnt HTML, then CSS, now I am learning React JS";
console.log(str4.replace("React JS","Java Script "))

let str5 ="I have watched several Rajinikanth movies"
let rep=str5.substring(23,34);
rep.toUpperCase()
r=rep.toUpperCase();

console.log(str5.replace("Rajinikanth",r));


let marks =50;
if(marks >=10 && marks<=10){
    console.log("D");
}
else if(marks>20 && marks<=60){
    console.log("C");
}
else if(marks>60 && marks<=80){
    console.log("B");
}

else{
    console.log("A");
}


// Array methods
// push(),pop(),indexof(),includes(),reverse()
let firends = ["aditya","himanshu","vivek","stephen"];
for(let i=0;i<firends.length;i++){
    console.log(firends[i]);
}

let scores =[15,25,22,17,19,19,12,7,99,61];

let s = 0;
let len =scores.length;
for(let i=0;i<scores.length;i++){
    s+=scores[i];
}

console.log(s/len);

let avg = (s/len);

if(avg%2==0){
    console.log("even");
}
else{
    console.log("odd")
}
 let total =0;
for(let i =0; i<10 ;i++){
    console.log(Math.floor(Math.random()*100)+1);
    total+=Math.floor(Math.random()*100)+1
}
console.log(total)

let nums = [ "One", "Two", "‘Three’", "‘Four’", "‘Five’", "‘Six’", "‘Seven’" ]

nums.shift();//shift is used to remove the first element from an array
console.log(nums);

nums.unshift("one","21");//unshift() is used to add the elements in front
console.log(nums);

console.log(nums.pop());
console.log(nums)

let arr =[];

for(let i=0;i<10;i++){
    arr.push(2*(Math.floor(Math.random()*100)+1))
}
console.log(arr);


// objects
let box={
    color:"Red",
    weight:100,
}
box.height=10;
console.log(box.color);
console.log(box.height)
delete box.height;
console.log(box)


// function

function printName(n){
    console.log(n)
}

printName("aditya");


function add(a,b){
    
    console.log(a+b);
    return(a+b);
}

add(4,5);
console.log(add(4,5))

function simpleInterest (p,r,t){
    return(p*(1+(r*t)))
}

console.log(simpleInterest(13900,7,2));


function existName(nums,num){
    // let nums = [ "One", "Two", "‘Three’", "‘Four’", "‘Five’", "‘Six’", "‘Seven’" ];
    if(nums.includes(num)){
        console.log("yes")
    }
    else{
        console.log("no");
    }
}

existName(nums,"Two");


let h1 = document.createElement('h1');
document.body.append(h1)

let img = document.createElement("img");
img.src="red.jpg";

document.body.append(img);

let div =document.createElement('div');
div.className="login";
 let input = document.createElement('input');
 input.type="text";
 input.className="emailinput";
 let button = document.createElement('button');
 button.textContent="Login";
 button.className="loginbutton";
 div.appendChild(input);
 div.appendChild(button);
 document.body.append(div);


//  MAP

let visitmap =new Map();
visitmap.set(1,"aditya")
console.log(visitmap.get(1))

let recipe=new Map([
    ['cucumber',500],
    ['tomato',200]
])

for(let key of recipe.keys()){
    console.log("keys are:"+key);
    console.log("values"+recipe.get(key));
}


// set

// let set = new Set();
// set.size();
// set.add();
// set.has();


let shoeNames =["nike","puma","addidas","pooma"];

let boxing = [
    {
        title:"pen",
        price:20,
    }
]

boxing.forEach((products)=>{
    console.log(products.price);
})

// forEach does not return anything

shoeNames.map((product)=>{
    console.log(product)
})
// map return an array

// filter return bollean value
let filteredproducts = shoeNames.filter((product)=>{
    // return product.price>200;
})

// Reduce
let score =[15,25,22,17,19,19,12,7,99,61];

let sums=score.reduce((a,c)=>{return a+c},0)
console.log(sums); 


// Find
console.log(score.find( price=> price==25));


// flat

let flatarrays = [1,3,2,[2,4,6,[23,5,43,9]]]
flatarrays = flatarrays.flat();
console.log(flatarrays); 
flatarrays = flatarrays.flat();
console.log(flatarrays); 


let sortedArr = flatarrays.sort((a,b)=>{return a-b});
console.log(sortedArr);
console.log(sortedArr.reverse());
