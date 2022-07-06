let clockBtn = document.querySelector(`.clock`)
let stopwatchBtn = document.querySelector(`.stopwatch`)

let time = document.querySelector(`.time`)
let stopWatch = document.querySelector(`.stopwatch-cocntent`)

let realTime = document.querySelector(`.realTime`)

let startBtn = document.querySelector(`.start`)



function clock(){
    time.classList.remove(`hidden`)
    stopWatch.classList.add(`hidden`)
    
    
}




function stopwatch(){
    stopWatch.classList.remove(`hidden`)
    time.classList.add(`hidden`)
}

// Clock funcionality

function currentTime(time){
    let date = new Date
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session ='AM'
    
    if(hh === 12){
        hh = 12
    }
    if(hh > 12){
        hh = hh-12
        session= "PM"
    }

    hh = (hh<10)?`0`+ hh: hh
    mm = (mm< 10)? `0`+ mm: mm
    ss = (ss< 10)? `0`+ ss: ss
    
    time.textContent = `${hh}:${mm}:${ss}:${session}`
     setTimeout(function(){ currentTime(realTime) }, 1000)
}
currentTime(realTime)

//StopWatch starting condition
let minEl = document.querySelector(`.min`)
let secEl = document.querySelector(`.sec`)
let milEl = document.querySelector(`.mil`)

let mil = 0
let sec = 0 
let min = 00

minEl.textContent='0'+min
secEl.textContent=`0`+sec
milEl.textContent=`0`+mil



let timerEl = document.querySelector(`.timerEl`)




let timer;


function start(){
    startBtn.disabled=true
    
    timer = setInterval(() => {
    
        mil++
    if(mil>99){
        sec++
        mil=0
    }
    if(sec>59){
        min=min+1
        sec=0
    }
    
    minEl.textContent=(min<10)?'0'+min:min
    secEl.textContent=(sec<10)?`0`+sec:sec
    milEl.textContent=(mil<10)?`0`+mil:mil
       }, 10);

}

function stop(){
    
    clearInterval(timer)
}

function reset() {
    mil = 0
    sec = 0 
    min = 00

minEl.textContent='0'+min
secEl.textContent=`0`+sec
milEl.textContent=`0`+mil

}