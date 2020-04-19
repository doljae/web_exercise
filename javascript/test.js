/*var str1="hello"
var str2="world"
console.log(str1+str2)
console.log(str1+str2+new Date())

var me={
    name:"seokjae",
    age:29,
    sex:"male",
    hobby:"game"
}
var me2={"name":"young"}
console.log(me.age)

var i=0
while(true){
    console.log(i)
    if(++i>5)
        break
}

function plus(a,b){
    var sum=a+b
    return sum
}
var c=plus(6,3)
console.log(c)

function myFunc() {
	var myVar = 10;
	return myVar;
}

var d=function(){
    var a=10
    var b=20
    console.log(a+b)
}
function a(x){
    var b=function(y){
        return x+y
    }
    return b
}
console.log(a(4)(8))

function minus(x){
    return function(y){
        return x-y
    }
}
console.log(minus(4)(8))*/

function random1(){
    var myText1 = document.getElementById('mytext1');
    myText1.value = Math.random();
}


var div1=document.getElementById("div1")
var randTexts=div1.getElementsByClassName("rand-text")
for(var i=0; i<randTexts.length;i++){
    randTexts[i].value=Math.random()
}

var mySelector=document.getElementById('my-selector')
var mOptions=mySelector.getElementsByTagName('option')
for (var i=0;i<mOptions.length;i++){
    mOptions[i].innerHTML=Math.round(Math.random()*10000)
}
// document.write(123123123)
// window.alert(123123213)

function changeColor(){
    var box=document.getElementById("box")
    var r=parseInt(Math.random()*256)
    var g=parseInt(Math.random()*256)
    var b=parseInt(Math.random()*256)
    box.style.backgroundColor='rgb('+r+ ','+g+','+b+')';
}
function m_over(target){
    target.style.color="red"
}
function m_out(target){
    target.style.color="blue"
} 


var mybtn=document.getElementById("button2")
function e(target){
    window.alert(1111)
}

function e(){
    window.alert(22222)
}
mybtn.addEventListener("click",e)

function erase(target){
    mybtn.removeEventListener("click",e)
}