const square1 = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let r = 0
let isPaused = false; // Variable to keep track of whether the game is paused or not

// pop mole randomly

function randomsq(){
    square1.forEach(c => {
        c.classList.remove("mole")
    })
    i = Math.floor(Math.random()*9)
    square1[i].classList.add("mole")
    hitid = square1[i].id
}

let intervalId = setInterval(() => {
    if (!isPaused) {
        randomsq()
    }
}, 1000)

// check if hit add to score

square1.forEach(i=>{
    i.addEventListener("mouseup",()=>{
        if(i.id===hitid){
           r++
           score.textContent = r
        }
    })
})

// timer

let t = timeLeft.textContent
let timerId = setInterval(() => {
    t--
    timeLeft.textContent = t
    if(t === 0)
    {
        clearInterval(intervalId); // Stop the interval that calls randomsq() when the timer runs out
        clearInterval(timerId); // Stop the timer interval
        alert("Game Over, your final score is "+ r)
        timeLeft.textContent = 60
        t=60
    }
}, 500)

// reset

const reset = document.querySelector("#reset")
reset.addEventListener("click",function(){
    score.textContent = 0
    timeLeft.textContent = 60
    t=60
})

// pause/play

const pause = document.querySelector("#pause")
const resume = document.querySelector("#resume")

pause.addEventListener("click",function () {
    if (!isPaused) {
        clearInterval(intervalId)
        clearInterval(timerId)
        isPaused = true
        pause.innerHTML = "Resume"
    } else {
        intervalId = setInterval(() => {
            randomsq()
        }, 1000)
        timerId = setInterval(() => {
            t--
            timeLeft.textContent = t
            if(t ==0)
            {
                clearInterval(intervalId);
                clearInterval(timerId);
                alert("Game Over, your final score is "+ r)
                timeLeft.textContent = 60
                t=60
            }
        }, 500)
        isPaused = false
        pause.innerHTML = "Pause"
    }
})

    
    