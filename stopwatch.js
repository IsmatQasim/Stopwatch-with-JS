const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;


const startTimer = () =>{
    intervalId = setInterval(() => {
        countDownElement.innerText = startCount++;
    }, 1000)
    };

const stopTimer = () =>{ 
    clearInterval(intervalId);
};

const resetTimer = () =>{
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(intervalId);
};

document
.querySelector(".start_btn")
.addEventListener("click", startTimer);

document
.querySelector(".reset_btn")
.addEventListener("click", resetTimer);

document
.querySelector(".stop_btn")
.addEventListener("click", stopTimer);

// document
// .querySelector(".time_btn")
// .addEventListener("click", showStopValue);

// document
// .querySelector(".clear_btn")
// .addEventListener("click", clearTimeValue);