let daily = [5,1,0,1,1,0],dailyPrevious=[7,2,1,1,3,1]
let weekly = [32,10,4,4,5,2],weeklyPrevious=[36,8,7,5,10,2]
let monthly = [103,23,13,11,21,7], monthlyPrevious=[128,29,19,18,23,11]


let timeCurrent=document.getElementsByClassName('time-current')
let timePrevious=document.getElementsByClassName('time-previous')
timeSelect=document.getElementsByClassName('date-button')
timeSelect[1].classList.add('selected')
const selectTime = (x) =>{
    for(i=0;i<timeSelect.length;i++){
        timeSelect[i].classList.remove("selected")
    }
    timeSelect[x].classList.add('selected')
    if(x==0){
        for(i=0;i<timeCurrent.length;i++){
            timeCurrent[i].textContent=daily[i]+'hrs'
            timePrevious[i].textContent='Yesterday - '+dailyPrevious[i]+'hrs'
        }
    }
    if(x==1){
        for(i=0;i<timeCurrent.length;i++){
            timeCurrent[i].textContent=weekly[i]+'hrs'
            timePrevious[i].textContent='Last Week - '+weeklyPrevious[i]+'hrs'
        }
    }
    if(x==2){
        for(i=0;i<timeCurrent.length;i++){
            timeCurrent[i].textContent=monthly[i]+'hrs'
            timePrevious[i].textContent='Last Month - '+monthlyPrevious[i]+'hrs'
        }
    }
}