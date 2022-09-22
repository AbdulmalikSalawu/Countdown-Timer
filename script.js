const countDown = ()=>{
    let countedSecs = secs.value;
    let countedMins = mins.value;
    let countedHrs = hrs.value
    countedSecs--;
    secs.value = countedSecs;
    setTimeout(countDown, 1000)
    if (countedSecs< 0 && countedMins == 0){
        secs.value = "00"
        mins.value = "00"
    }
    if (countedSecs < 0 && mins.value > 0){
        secs.value = "59";
    }
    if (countedSecs < 0 && countedMins > 0){
        mins.value--
    }
    if(countedHrs != 0 && countedMins == 0 ){
        mins.value = 60
        hrs.value--
    }
    // clearInterval(myTimeout)
}
