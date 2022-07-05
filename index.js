let clockBtn = document.querySelector(`.clock`)
let stopwatchBtn = document.querySelector(`.stopwatch`)

let time = document.querySelector(`.time`)
let stopWatch = document.querySelector(`.stopwatch-cocntent`)

let realTime = document.querySelector(`.realTime`)



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