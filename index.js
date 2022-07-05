let clockBtn = document.querySelector(`.clock`)
let stopwatchBtn = document.querySelector(`.stopwatch`)

let time = document.querySelector(`.time`)
let stopWatch = document.querySelector(`.stopwatch-cocntent`)



function clock(){
    time.classList.remove(`hidden`)
    stopWatch.classList.add(`hidden`)
}



function stopwatch(){
    stopWatch.classList.remove(`hidden`)
    time.classList.add(`hidden`)
}