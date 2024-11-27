//Explanations and previous study
console.log ("Hello console")

var favColor="orange";

//array=list
var array=["1", "2", "3"];
var myFavColors=["orange", "purple", "pink"];

//number, not text
var numOfFavColors= 3;

//booleans (true or false, or yes or no, values) lowercase
var hasGotFavColors = true;

//object, can combine all of those things, object is like an array; ir uses comas , instead of ;
var albaObject = {
	//propietats:
	firstName: "Alba",
	lastName: "Huguet",
	favColors: ["orange", "purple", "pink"],
	yearsAlive: 26,
	isFemale: true
}

//a function is something that can be reused (dos maneres d'escriure-ho a continuació)
function whatIsMyFavColor () {
	return "orange";
}

var whatIsMyFavColor = function () {
	return false; //after that the function doesn't work, doesn't do anything and it cannot return the following
	return true;
	return "orange";
}

var doSomething = function () {
	console.log ("do Something!!!")
}

var area = function (width, height){
	return width * height;
}

var fullname = function (firstName, secondName){
	return firstName + " " + secondName;
}


//if statements (if what's inside the parentesis is true, then do something)
//var number1= 10;
//var number2=100;

//if (number1 < number2){
	//alert("yes!!!")
//} else {
	//alert("no!!!")
//}

//var name1= "Alba";
//var name2= "Susi";

//if (name1 == "Alba"){
	//alert("yes!!!")
//} else if (name2 == "Alba"){
	//alert("yess!!!")
//} else {
	//alert ("no!!!")
//}

//if (name1 == "Alba" && name2 == "Susi"){  (&&=and) (||=or)
	//alert("yes!!!")
//} else if (name2 == "Alba"){
	//alert("yess!!!")
//} else {
	//alert ("no!!!")
//}

//segona practica de variables
var car={
			make: "Nissan",
			type: "Qashqai",
			color: "white",
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				"seat 1",
				"seat 2",
				"seat 3",
				"seat 4"
				],
			turnOn: function (){
				this.isTurnedOn = true;
			},
			fly: function (){
				alert ("fly")
			},
			switchCar: function (isOn){
				console.log ("turn car " + isOn)
				if (isOn == true){
					this.isTurnedOn= true;
				} else {
					this.isTurnedOn=false;
				}
			}
	}

var sayMyName = function (name) {
	alert ("My name is " + name);
}