const oneImg = "img/heart.png";
const twoImg = "img/rupee.png";
const threeImg = "img/sword.png";

const backImg = "img/back.jpg";

let array = [oneImg,oneImg,twoImg,twoImg,threeImg,threeImg];
let shuffle = [];    
let winner = [];
let idCount = [];

let buttons = document.querySelectorAll("#img button");
let btnOne = document.getElementById("one");

let allImg = document.querySelectorAll("#img img");

buttons.forEach(n => {
    n.addEventListener("click", (e) => {
        logic(e);
    })
})

function logic(string){
    let id = string.target.getAttribute("id");
    if(idCount.includes(id)){
        idCount = [];
        return
    }else{
        idCount.push(id);
    }
    string.target.setAttribute("src",shuffle[+id]);
    winner.push(shuffle[+id]);
    if(winner.length >= 2 && winner[0].join("") !== winner[1].join("")){
        winner = [];
        setTimeout(back,1000);
    }else if(winner.length > 3 && winner[2].join("") !== winner[3].join("")){
        winner = [];
        setTimeout(back,1000);
    }
    console.log(winner)
}

function back(){
    allImg.forEach(n => {
        n.setAttribute("src",backImg);
    })
}

function pushArr(){
    for(let i = array.length; i > 0; i--){
        let rand = Math.floor(Math.random() * array.length);
        let arr = array.splice(rand,1);
        shuffle.push(arr);

    }
}

//function addCards(){
//    let i = 0;
//    allImg.forEach(n => {
//        n.setAttribute("src", shuffle[i]);
//        i++;
//    })
//}
back();
pushArr();
console.log(shuffle)