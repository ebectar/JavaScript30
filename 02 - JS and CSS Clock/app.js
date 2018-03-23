const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(seconds)
}

setInterval(setDate, 1000)
setDate()

//second hand does a full rotation when switching from 59 to 0, how to fix?