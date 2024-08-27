const minute = document.getElementById("minutes")
const second = document.getElementById("seconds")
const ms = document.getElementById("ms")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
var n = 0
var s=0
var m=0
var Interval

function milliseconds(){
        if(n==100){
            n=0
            s=s+1
            second.innerHTML = s<10?"0"+s:s
        if(s==60){
            s=0
            m=m+1
            minute.innerHTML = m<10?"0"+m:m
        }
        if(m==60){
            m=0
        }
        }
        else{
            n = n + 1
            ms.innerHTML = n<10?"0"+n:n
        }
        
    }

function st(){
    interval =setInterval(milliseconds,10)
}
function sp(){
    clearInterval(interval)
}
function re(){
    clearInterval(interval)
    ms.innerHTML = "00"
    second.innerHTML = "00"
    minute.innerHTML = "00"
    n=0
    s=0
    m=0
}
