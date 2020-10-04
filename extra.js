/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const myList = [10, 50, 100];

function myCallBack(param) {
    let x = param * 10;
    if (x < 1000) {
        return true;
    } else {
        return false;
    }
}

function myFilter(list, callback) {
    let flist = [];
    for (idx in list) {
        if (callback(list[idx])) {
            flist.push(list[idx])
        }
    }
    return flist;
}

console.log(myFilter(myList, myCallBack))




//opgave 1
let list = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Aena", "Elan"]

function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}
console.log(filterItems(list, 'an'));

let mappedlist = list.map(function (item) {
    return item.split("").reverse().join("")
})
console.log(mappedlist)


//opgave 2
function callbackOne(param) {
    return param.match("a");
}

function myFilter(list, callback) {
    let seclist = [];
    for (idx in list) {
        if (callback(list[idx])) {
            seclist.push(list[idx])
        }
    }
    return seclist;
}
console.log(myFilter(list, callbackOne));

function callbackTwo(param) {
    return param.split("").reverse().join("")
}

function mapReverse(list, callback) {
    let seclist = [];
    for (idx in list) {
        var temp = callbackTwo(list[idx])
        seclist.push(temp)
    }
    return seclist;
}
console.log(mapReverse(list, callbackTwo));


//opgave 3
//a)
var numbers = [1, 3, 5, 10, 11];

var mapp = function (n) {
    var temp = 0;
    var e = numbers.indexOf(n)
    if (numbers[e + 1] !== undefined) {
        temp = numbers[e + 1]
    }
    return n + temp;
};

var numbersmapped = numbers.map(n => mapp(n))
console.log(numbersmapped)

//b)
var mappedList = list.map((c) => {
    return "<a href=\"\">" + c + "<a>"
})
var mappedList = "<nav>" + mappedList + "</nav>"

console.log(mappedList)

//c
var persons = [{name: "Hassan", phone: "1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"}, {name: "Boline", phone: "79345"}];
console.log(persons[2].phone)
var personsHTML = "<table class=\"table table-dark\">" + "<thead class=\"thead-dark\">" + "<tr>" + "<th scope=\"col\">name</th>" + "<th scope=\"col\">phone</th>" + "</thead>" + "<tbody>"
var line = "";
var temp = persons.map((p) => {
    line = line + "<tr>" + "<td>" + p.name + "</td>" + "<td>" + p.phone + "</td>"
    return line;
})
personsHTML = personsHTML + temp + "</tr>" + "</tbody>" + "</table>";

console.log(personsHTML)

//opgave 4
//a
var all = ["Hassan", "Peter", "Carla", "Boline"];
console.log(all.join('#'))

//b
numbers = [2, 3, 67, 33];
function callbackReduce(accumulator, current){
    return accumulator + current
}
console.log(numbers.reduce(callbackReduce))

//c
const members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}]
 
 function callbackReducer(accumulator, current){
     return accumulator + current.age;
 }

function getAvg (accumulator, currentValue, index, arr) {
     console.log(index)
     if(index === arr.length - 1){
         accumulator += currentValue.age
         return accumulator / arr.length;
     }
  return accumulator + currentValue.age
}
 
 console.log(members.reduce(getAvg, 0))
 
 