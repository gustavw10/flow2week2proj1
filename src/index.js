import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const tb = document.getElementById('tb');
const url = 'http://localhost:3333/api/users';
fetch(url)
.then(res=>fetchWithErrorCheck(res))
.then((data)=>{
    const trs = data.map((user)=>{
        return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
        
    });
    const trStr = trs.join('');
    tb.innerHTML = trStr;
});

document.getElementById('filterId').onclick = () => {
    let id = document.getElementById("idOf").value;
        fetch(url + '/' + id)
        .then(res=>fetchWithErrorCheck(res))
        .then((data)=>{ 
            const output = [data.id, data.name, data.age];
        
    document.getElementById("tdata").innerHTML = output;
});
}


document.getElementById("addMemb").onclick = () => {

   const dataMember = {
    name: document.getElementById("userName").value,
    age: document.getElementById("userAge").value,
    gender: document.getElementById("userGender").value,
    email: document.getElementById("userEmail").value,
}
    fetch(url, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
  },
    body: JSON.stringify(dataMember)
      }).then(res=>res.json())
     .then(res => console.log(res));
     console.log(dataMember)
}

document.getElementById("editMember").onclick = () => {

    const dataMember = {
     name: document.getElementById("putuserName").value,
     age: document.getElementById("putuserAge").value,
     gender: document.getElementById("putuserGender").value,
     email: document.getElementById("putuserEmail").value,
 }  
    const putId = document.getElementById("putuserId").value;
     fetch(url + "/" + putId, {
         method: 'put',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
   },
     body: JSON.stringify(dataMember)
       }).then(res=>res.json())
      .then(res => console.log(res));
      console.log(dataMember)
 }

 document.getElementById("deleteMember").onclick = () => {

    const putId = document.getElementById("deleteId").value;

    fetch(url + "/" + putId, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
}
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))

    
 }


function fetchWithErrorCheck(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


document.getElementById('getJokeById').onclick = () => {
    let id = document.getElementById("idOfJoke").value;
    const joke = jokes.getJokeById(id);
    document.getElementById("jokeFromId").innerHTML = joke;
}

document.getElementById('addJoke').onclick = () => {
    let joke = document.getElementById("textForJoke").value;
    jokes.addJoke(joke);

    const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}

document.getElementById("jokeButton").addEventListener("click", displayJoke);

function displayJoke() {
    const url = 'https://studypoints.info/jokes/api/jokes/period/hour';
        fetch(url)
        .then(res=>fetchWithErrorCheck(res))
        .then((data)=>{
            console.log(data)
            document.getElementById("jokeOfTheHour").innerHTML = data.joke;
    });
    
};

document.getElementById("rec1").addEventListener("click", displayMessage);
function displayMessage() {
    document.getElementById("recClick").innerHTML = "North"
};

document.getElementById("rec2").addEventListener("click", displayMessage2);
function displayMessage2() {
    document.getElementById("recClick").innerHTML = "South"
};

document.getElementById("rec3").addEventListener("click", displayMessage3);
function displayMessage3() {
    document.getElementById("recClick").innerHTML = "East"
};

document.getElementById("rec4").addEventListener("click", displayMessage4);
function displayMessage4() {
    document.getElementById("recClick").innerHTML = "West"
    console.log("reacted to rec")
};
