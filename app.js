//Dom Manipulation
const follower = document.querySelectorAll("#follower");
const followBtn = document.querySelector(".follow");
const messageBtn = document.querySelector(".message");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const violet = document.getElementById("violet");
const yellow = document.getElementById("yellow");

//Animated Counter
const speed = 50;
follower.forEach((follower) => {
    const updateCount = () => {
        const data =+ follower.getAttribute("data-following");
        const count =+  follower.innerText;
        let inc = data / speed;
        if(count < data){
            follower.innerHTML = count + inc;
            setTimeout(() => {
                updateCount();
            },1)
        } else {
            follower.innerHTML = data;
        }
    };
    updateCount();
});

//Btn-Handling
followBtn.addEventListener("click", () => {
    followBtn.innerHTML = "followed";
}); 

//generateColor
red.addEventListener("click", () =>{
    const cover = document.querySelector(".cover");
    const cardText = document.querySelector(".card-text");
    cover.style.backgroundColor = "crimson";
    cardText.style.color = "crimson";
    followBtn.style.backgroundColor = "crimson";
    messageBtn.style.backgroundColor = "crimson";
    follower.forEach((follower) => {
        follower.style.color = 'crimson';
    });
});

blue.addEventListener("click", () => {
    const cover = document.querySelector(".cover");
    const cardText = document.querySelector(".card-text");
    cover.style.backgroundColor = "lightblue";
    cardText.style.color = "lightblue";
    followBtn.style.backgroundColor = "lightblue";
    messageBtn.style.backgroundColor = "lightblue";
    follower.forEach((follower) => {
        follower.style.color = 'lightblue';
    });
});

green.addEventListener("click", () => {
    const cover = document.querySelector(".cover");
    const cardText = document.querySelector(".card-text");
    cover.style.backgroundColor = "lightgreen";
    cardText.style.color = "lightgreen";
    followBtn.style.backgroundColor = "lightgreen";
    messageBtn.style.backgroundColor = "lightgreen";
    follower.forEach((follower) => {
        follower.style.color = 'lightgreen';
    });
});
violet.addEventListener('click', () => {
    const cover = document.querySelector(".cover");
    const cardText = document.querySelector(".card-text");
    cover.style.backgroundColor = "violet";
    cardText.style.color = "violet";
    followBtn.style.backgroundColor = "violet";
    messageBtn.style.backgroundColor = "violet";
    follower.forEach((follower) => {
        follower.style.color = 'violet';
    });
});
yellow.addEventListener('click',  () => {
    const cover = document.querySelector(".cover");
    const cardText = document.querySelector(".card-text");
    cover.style.backgroundColor = "yellowgreen";
    cardText.style.color = "yellowgreen";
    followBtn.style.backgroundColor = "yellowgreen";
    messageBtn.style.backgroundColor = "yellowgreen";
    follower.forEach((follower) => {
        follower.style.color = 'yellowgreen';
    });
});