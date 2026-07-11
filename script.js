// ----------------------
// Open Love Letter
// ----------------------

function startSurprise() {

    document.getElementById("message").style.display = "block";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

// ----------------------
// Photo Gallery
// ----------------------

let photos = [

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg"

];

let captions = [

"Our first beautiful memory together. ❤️",

"You'll always have a special place in my heart. 🤍",

"Every picture reminds me how precious you are. 🌹"

];

let i = 0;

let sliderStarted = false;

// ----------------------
// Continue Button
// ----------------------

function nextPage() {

document.getElementById("message").style.display = "none";

document.getElementById("gallery").style.display = "block";

if(!sliderStarted){

setInterval(changePhoto,3000);

setInterval(createHeart,350);

setInterval(createPetal,700);

setInterval(createBalloon,1000);

sliderStarted = true;

}

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

// ----------------------
// Change Photos
// ----------------------

function changePhoto(){

i++;

if(i>=photos.length){

i=0;

}

document.getElementById("slider").src=photos[i];

document.getElementById("caption").innerHTML=captions[i];

}

// ----------------------
// Hearts
// ----------------------

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},7000);

}

// ----------------------
// Rose Petals
// ----------------------

function createPetal(){

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(petal);

setTimeout(function(){

petal.remove();

},8000);

}
function createStar(){

let star=document.createElement("div");

star.className="star";

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.getElementById("stars").appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(createStar,250);
