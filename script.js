function countdown() {
    const birthdate = document.getElementById("birthdate").value
    const birthDate = new Date(birthdate)
    console.log(birthDate)
    const currentDate =  new Date();
    const totalSeconds = (birthDate-currentDate)/1000
    const days = Math.floor((totalSeconds/3600)/24)
    const hours = Math.floor(totalSeconds/3600)%24
    const mins = Math.floor(totalSeconds/60)%60
    const seconds = Math.floor(totalSeconds%60)
    console.log(days,hours,mins,seconds)
    const Days = document.getElementById("Days").innerHTML = days
    const Hours = document.getElementById("Hours").innerHTML = hours
    const Mins = document.getElementById("Mins").innerHTML = mins
    const Seconds = document.getElementById("Seconds").innerHTML = seconds

}

countdown()

setInterval(countdown,1000)