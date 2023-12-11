// menu

let bars = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-xmark")
let nav = document.querySelector("ul")

console.log(bars);

bars.addEventListener("click",()=>{
    nav.style.right = "200px";
    nav.style.cssText = "transition:.5s ease"
})

close.addEventListener("click",()=>{
   nav.style.right = "-650px"
})

// json player

const palyer = [
    {
        img : "image/gallery/maloul.jpg",
        name : "Maloul",
        team : "Ahly EGY",
        nationality : "Tunisian"
    },
    {
        img : "image/gallery/jabrane.jpg",
        name : "Jabrane",
        team : "Wydad MOR",
        nationality : "Morocan"
    },
    {
        img : "image/gallery/aboutrika.jpg",
        name : "Aboutrika",
        team : "Ahly EGY",
        nationality : "Egyptian"
    },
    {
        img : "image/gallery/favourite team.jpg",
        name : "Favourite Team",
        team : "",
        nationality : ""
    },
    {
        img : "image/gallery/favourite player.jpg",
        name : "Favourite Player",
        team : "",
        nationality : ""
    }
]

// slider 

let imgSlider = document.querySelector(".gallery img");
let surname = document.querySelector(".gallery h3");
let eq = document.querySelector(".gallery .sp1");
let nt = document.querySelector(".gallery .sp2");
let left = document.querySelector(".gallery .left");
let right = document.querySelector(".gallery .right");

console.log(nt);

let i = 0;

imgSlider.src = palyer[i].img;
surname.innerHTML = palyer[i].name;
eq.innerHTML = palyer[i].team;
nt.innerHTML = palyer[i].nationality;
right.addEventListener("click",()=>{
   imgSlider.src = palyer[i].img;
   surname.innerHTML = palyer[i].name;
   eq.innerHTML = palyer[i].team;
   nt.innerHTML = palyer[i].nationality;
   if(i < palyer.length-1){
    i++;
   }
   else {
    i = 0;
   }
   imgSlider.src = palyer[i].img;
   surname.innerHTML = palyer[i].name;
   eq.innerHTML = palyer[i].team;
   nt.innerHTML = palyer[i].nationality;
})

left.addEventListener("click",()=>{
    imgSlider.src = palyer[i].img;
    surname.innerHTML = palyer[i].name;
    eq.innerHTML = palyer[i].team;
    nt.innerHTML = palyer[i].nationality;
    if(i > 0){
        i--;
    }
    else {
        i = palyer.length-1
    }
    imgSlider.src = palyer[i].img;
    surname.innerHTML = palyer[i].name;
    eq.innerHTML = palyer[i].team;
    nt.innerHTML = palyer[i].nationality;
})

// json teams
const teams = [
{
    img : "image/teams/ahly.jpg",
    team : "Ahly",
    country : "EGY",
    cups : "11 cups"
},
{
    img : "image/teams/wydad.jpg",
    team : "Wydad",
    country : "MOR",
    cups : "3 cups"
},
{
    img : "image/teams/tareji.jpg",
    team : "Tareji",
    country : "Tun",
    cups : "2 cups"
},
{
    img : "image/teams/mazembi.jpg",
    team : "Mazembi",
    country : "COD",
    cups : "2 cups"
},
{
    img : "image/teams/sundowns.jpg",
    team: "Sundows",
    country : "SA",
    cups : "1 cups"
},
{
    img : "image/teams/bb.jpg",
    team: "Bouluizded",
    country : "ALG",
    cups : "0 cups"
}
]

// teams

let boxesTeams = document.querySelector(".boxes-teams");

console.log(boxesTeams);

teams.map(element => {
    boxesTeams.innerHTML +=`<div><img src = ${element.img} ><h3>Team :<span>${element.team}</span> </h3> <h3>Country :<span> ${element.country}</span></h3> <p>African Champions League Cups : <span>${element.cups}</span></p> </div> `;
});

// comptitions

let champ = document.querySelector(".champ h3");
let conf = document.querySelector(".conf h3");

console.log(conf);

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 2300){
        champ.classList.remove("hide");
        champ.classList.add("show");
        conf.classList.remove("hid");
        conf.classList.add("sho");
    }
    else{
        champ.classList.remove("show");
        champ.classList.add("hide");
        conf.classList.add("hid");
        conf.classList.remove("sho");
    }
})