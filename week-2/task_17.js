/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
*/

console.log("OTP Sent Successfully")

let seconds=10

let IntervalID = setInterval(() => {
    console.log('Resend OTP in',seconds,"secs")
    seconds--
    if(seconds === 0){
        console.log("Resend OTP")
        clearInterval(IntervalID)
    }
},1000)
